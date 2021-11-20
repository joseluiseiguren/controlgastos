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
    public class ConceptSummaryByMonthHandler : IAsyncQueryHandler<ConceptSummaryByMonthQuery, IEnumerable<ConceptBalanceOutputByDate>>
    {
        private readonly ITransactionRepository _transactionRepository;

        public ConceptSummaryByMonthHandler(ITransactionRepository transactionRepository)
        {
            _transactionRepository = transactionRepository;
        }

        public async Task<IEnumerable<ConceptBalanceOutputByDate>> HandleAsync(ConceptSummaryByMonthQuery query)
        {
            var result = new List<ConceptBalanceOutputByDate>();

            var dateFrom = DateTime.ParseExact(query.Month + "01", "yyyyMMdd", null);
            var dateTo = dateFrom.AddMonths(1).AddSeconds(-1);

            var transactions = await _transactionRepository.GetTransactionsByFilterAsync(dateFrom.ToUniversalTime(), dateTo.ToUniversalTime(), query.ConceptId);
            var transactionsGroupedByDate = transactions.GroupBy(x => x.TransactionDate, x => x.Ammount);

            foreach (var item in transactionsGroupedByDate)
            {
                result.Add(new ConceptBalanceOutputByDate() { Date = item.Key, Balance = item.Sum() });
            }

            return result;
        }
    }
}
