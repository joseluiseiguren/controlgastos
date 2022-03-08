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
            //var locked = new object();

            //var res = Parallel.For(1, 12, async (i) =>
            //{
            //    var dateFrom = DateOnly.ParseExact($"{query.Year}{i.ToString().PadLeft(2, '0')}01", "yyyyMMdd", null);
            //    var dateTo = dateFrom.AddMonths(1).AddDays(-1);

            //    var income = Math.Round(await _transactionRepository.GetTotalAmmountByUserAsync(dateFrom, dateTo, query.UserId, true), 2);
            //    var outcome = Math.Round(await _transactionRepository.GetTotalAmmountByUserAsync(dateFrom, dateTo, query.UserId, false), 2);

            //    lock (locked)
            //    {
            //        result.Add(new TotalInOutMonthOutput()
            //        {
            //            Month = i,
            //            In = income,
            //            Out = outcome
            //        });
            //    }               
            //});

            for (int i = 1; i <= 12; i++)
            {
                var dateFrom = DateOnly.ParseExact($"{query.Year}{i.ToString().PadLeft(2, '0')}01", "yyyyMMdd", null);
                var dateTo = dateFrom.AddMonths(1).AddDays(-1);

                result.Add(new TotalInOutMonthOutput()
                {
                    Month = i,
                    In = Math.Round(await _transactionRepository.GetTotalAmmountByUserAsync(dateFrom, dateTo, query.UserId, true), 2),
                    Out = Math.Abs(Math.Round(await _transactionRepository.GetTotalAmmountByUserAsync(dateFrom, dateTo, query.UserId, false), 2))
                });
            }



            return result.OrderBy(x => x.Month);
        }
    }
}
