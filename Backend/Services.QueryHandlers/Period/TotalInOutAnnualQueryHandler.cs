using Cotecna.Domain.Core;
using Domain.Queries;
using Domain.Queries.Outputs;
using Repository.Interfaces;
using System;
using System.Threading.Tasks;

namespace Services.QueryHandlers.Period
{
    public class TotalInOutAnnualQueryHandler : IAsyncQueryHandler<TotalInOutAnnualQuery, TotalInOutOutput>
    {
        private readonly ITransactionRepository _transactionRepository;

        public TotalInOutAnnualQueryHandler(ITransactionRepository transactionRepository)
        {
            _transactionRepository = transactionRepository;
        }

        public async Task<TotalInOutOutput> HandleAsync(TotalInOutAnnualQuery query)
        {
            var result = new TotalInOutOutput();

            var dateFrom = DateTime.ParseExact(query.Year + "0101", "yyyyMMdd", null);
            var dateTo = dateFrom.AddMonths(12).AddSeconds(-1);

            result.In = Math.Round(await _transactionRepository.GetTotalAmmountByUserAsync(dateFrom.ToUniversalTime(), dateTo.ToUniversalTime(), query.UserId, true), 2);
            result.Out = Math.Round(await _transactionRepository.GetTotalAmmountByUserAsync(dateFrom.ToUniversalTime(), dateTo.ToUniversalTime(), query.UserId, false), 2);

            return result;
        }
    }
}
