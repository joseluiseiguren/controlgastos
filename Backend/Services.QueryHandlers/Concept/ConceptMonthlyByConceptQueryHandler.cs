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
    public class ConceptMonthlyByConceptQueryHandler : IAsyncQueryHandler<ConceptMonthlyByConceptQuery, IEnumerable<ConceptMonthlyByConceptOutput>>
    {
        private readonly ITransactionRepository _transactionRepository;

        public ConceptMonthlyByConceptQueryHandler(ITransactionRepository transactionRepository)
        {
            _transactionRepository = transactionRepository;
        }

        public async Task<IEnumerable<ConceptMonthlyByConceptOutput>> HandleAsync(ConceptMonthlyByConceptQuery query)
        {
            var result = new List<ConceptMonthlyByConceptOutput>();

            var dateFrom = DateTime.ParseExact(query.Month + "01", "yyyyMMdd", null);
            var dateTo = dateFrom.AddMonths(1).AddSeconds(-1);

            var transactions = await _transactionRepository.GetTransactionsByFilterAsync(dateFrom.ToUniversalTime(), dateTo.ToUniversalTime(), query.ConceptId);
            var transactionsGroupedByDate = transactions.GroupBy(x => x.TransactionDate, x => x.Ammount);

            foreach (var item in transactionsGroupedByDate)
            {
                result.Add(new ConceptMonthlyByConceptOutput() { Date = item.Key, Balance = item.Sum() });
            }

            return result;
        }
    }
}
