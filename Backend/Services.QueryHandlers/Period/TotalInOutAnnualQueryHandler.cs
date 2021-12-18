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

            var dateFrom = DateOnly.ParseExact(query.Year + "0101", "yyyyMMdd", null);
            var dateTo = dateFrom.AddMonths(12).AddDays(-1);

            result.In = Math.Round(await _transactionRepository.GetTotalAmmountByUserAsync(dateFrom, dateTo, query.UserId, true), 2);
            result.Out = Math.Abs(Math.Round(await _transactionRepository.GetTotalAmmountByUserAsync(dateFrom, dateTo, query.UserId, false), 2));

            return result;
        }
    }
}
