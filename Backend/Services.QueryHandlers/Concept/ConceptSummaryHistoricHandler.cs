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
    public class ConceptSummaryHistoricHandler : IAsyncQueryHandler<ConceptSummaryHistoricQuery, IReadOnlyList<ConceptBalanceOutputByYear>>
    {
        private readonly ITransactionRepository _transactionRepository;

        public ConceptSummaryHistoricHandler(ITransactionRepository transactionRepository)
        {
            _transactionRepository = transactionRepository;
        }

        public async Task<IReadOnlyList<ConceptBalanceOutputByYear>> HandleAsync(ConceptSummaryHistoricQuery query)
        {
            var result = new List<ConceptBalanceOutputByYear>();

            var dateFrom = DateOnly.MinValue;
            var dateTo = DateOnly.MaxValue;

            var transactions = await _transactionRepository.GetTransactionsByFilterAsync(dateFrom, dateTo, query.ConceptId);
            var transactionsGroupedByDate = transactions.GroupBy(x => x.TransactionDate.Year, x => x.Ammount).OrderBy(x => x.Key);

            foreach (var item in transactionsGroupedByDate)
            {
                result.Add(new ConceptBalanceOutputByYear() { Year = item.Key, Balance = item.Sum() });
            }

            return result;
        }
    }
}
