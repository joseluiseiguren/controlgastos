using Cotecna.Domain.Core;
using Domain.Queries;
using Domain.Queries.Outputs;
using Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Services.QueryHandlers.Concept
{
    public class ConceptSummaryHistoricHandler : IAsyncQueryHandler<ConceptSummaryHistoricQuery, IEnumerable<ConceptBalanceOutputByYear>>
    {
        private readonly ITransactionRepository _transactionRepository;

        public ConceptSummaryHistoricHandler(ITransactionRepository transactionRepository)
        {
            _transactionRepository = transactionRepository;
        }

        public async Task<IEnumerable<ConceptBalanceOutputByYear>> HandleAsync(ConceptSummaryHistoricQuery query)
        {
            var result = new List<ConceptBalanceOutputByYear>();

            var dateFrom = DateTime.MinValue;
            var dateTo = DateTime.MaxValue;

            var transactions = await _transactionRepository.GetTransactionsByFilterAsync(dateFrom.ToUniversalTime(), dateTo.ToUniversalTime(), query.ConceptId);
            var transactionsGroupedByDate = transactions.GroupBy(x => x.TransactionDate.Year, x => x.Ammount).OrderBy(x => x.Key);

            foreach (var item in transactionsGroupedByDate)
            {
                result.Add(new ConceptBalanceOutputByYear() { Year = item.Key, Balance = item.Sum() });
            }

            return result;
        }
    }
}
