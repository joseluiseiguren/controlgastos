using Cotecna.Domain.Core;
using Domain.Queries;
using Domain.Queries.Outputs;
using Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Services.QueryHandlers.Period
{
    public class TotalInOutAnnualMonthQueryHandler : IAsyncQueryHandler<TotalInOutAnnualMonthQuery, IEnumerable<TotalInOutMonthOutput>>
    {
        private readonly ITransactionRepository _transactionRepository;

        public TotalInOutAnnualMonthQueryHandler(ITransactionRepository transactionRepository)
        {
            _transactionRepository = transactionRepository;
        }

        public async Task<IEnumerable<TotalInOutMonthOutput>> HandleAsync(TotalInOutAnnualMonthQuery query)
        {
            var result = new List<TotalInOutMonthOutput>();

            for (int i = 1; i <= 12; i++)
            {
                result.Add(new TotalInOutMonthOutput() { Month = i, Out = 0, In = 0 });
            }

            //foreach (var item in result)
            //{
            //    var dateFrom = DateOnly.ParseExact($"{query.Year}{item.Month.ToString().PadLeft(2, '0')}01", "yyyyMMdd", null);
            //    var dateTo = dateFrom.AddMonths(1).AddDays(-1);

            //    var income = Math.Round(await _transactionRepository.GetTotalAmmountByUserAsync(dateFrom, dateTo, query.UserId, true), 2);
            //    var outcome = Math.Round(await _transactionRepository.GetTotalAmmountByUserAsync(dateFrom, dateTo, query.UserId, false), 2);

            //    item.In = income;
            //    item.Out = outcome;
            //}

            ParallelOptions parallelOptions = new()
            {
                MaxDegreeOfParallelism = 4
            };

            await Parallel.ForEachAsync(result, parallelOptions, async (item, cancelToken) =>
            {
                var dateFrom = DateOnly.ParseExact($"{query.Year}{item.Month.ToString().PadLeft(2, '0')}01", "yyyyMMdd", null);
                var dateTo = dateFrom.AddMonths(1).AddDays(-1);

                var income = Math.Round(await _transactionRepository.GetTotalAmmountByUserAsync(dateFrom, dateTo, query.UserId, true), 2);
                var outcome = Math.Round(await _transactionRepository.GetTotalAmmountByUserAsync(dateFrom, dateTo, query.UserId, false), 2);

                item.In = income;
                item.Out = outcome;
            });

            return result.OrderBy(x => x.Month);
        }
    }
}
