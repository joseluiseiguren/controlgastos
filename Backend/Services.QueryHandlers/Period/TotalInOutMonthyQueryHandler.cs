using Cotecna.Domain.Core;
using Domain.Queries;
using Domain.Queries.Outputs;
using Repository.Interfaces;
using System;
using System.Threading.Tasks;

namespace Services.QueryHandlers.Period
{
    public class TotalInOutMonthyQueryHandler : IAsyncQueryHandler<TotalInOutMonthyQuery, TotalInOutOutput>
    {
        private readonly ITransactionRepository _transactionRepository;

        public TotalInOutMonthyQueryHandler(ITransactionRepository transactionRepository)
        {
            _transactionRepository = transactionRepository;
        }

        public async Task<TotalInOutOutput> HandleAsync(TotalInOutMonthyQuery query)
        {
            var result = new TotalInOutOutput();

            var dateFrom = DateOnly.ParseExact(query.Year + query.Month.ToString().PadLeft(2, '0') + "01", "yyyyMMdd", null);
            var dateTo = dateFrom.AddMonths(1).AddDays(-1);

            result.In = Math.Round(await _transactionRepository.GetTotalAmmountByUserAsync(dateFrom, dateTo, query.UserId, true), 2);
            result.Out = Math.Round(await _transactionRepository.GetTotalAmmountByUserAsync(dateFrom, dateTo, query.UserId, false), 2);

            return result;
        }
    }
}
