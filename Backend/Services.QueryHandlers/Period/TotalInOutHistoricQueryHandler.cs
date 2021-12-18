using Cotecna.Domain.Core;
using Domain.Queries;
using Domain.Queries.Outputs;
using Repository.Interfaces;
using System;
using System.Threading.Tasks;

namespace Services.QueryHandlers.Period
{
    public class TotalInOutHistoricQueryHandler : IAsyncQueryHandler<TotalInOutHistoricQuery, TotalInOutOutput>
    {
        private readonly ITransactionRepository _transactionRepository;

        public TotalInOutHistoricQueryHandler(ITransactionRepository transactionRepository)
        {
            _transactionRepository = transactionRepository;
        }

        public async Task<TotalInOutOutput> HandleAsync(TotalInOutHistoricQuery query)
        {
            var result = new TotalInOutOutput();

            var dateFrom = DateOnly.MinValue;
            var dateTo = DateOnly.MaxValue;

            result.In = Math.Round(await _transactionRepository.GetTotalAmmountByUserAsync(dateFrom, dateTo, query.UserId, true), 2);
            result.Out = Math.Abs(Math.Round(await _transactionRepository.GetTotalAmmountByUserAsync(dateFrom, dateTo, query.UserId, false), 2));

            return result;
        }
    }
}
