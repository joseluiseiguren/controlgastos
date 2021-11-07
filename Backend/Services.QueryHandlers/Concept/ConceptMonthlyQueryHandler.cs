using Cotecna.Domain.Core;
using Domain.Queries;
using Domain.Queries.Outputs;
using Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.QueryHandlers.Concept
{
    public class ConceptMonthlyQueryHandler : IAsyncQueryHandler<ConceptMonthlyQuery, IEnumerable<ConceptMonthlyOutput>>
    {
        private readonly IConceptRepository _conceptRepository;
        private readonly ITransactionRepository _transactionRepository;

        public ConceptMonthlyQueryHandler(IConceptRepository conceptRepository, ITransactionRepository transactionRepository)
        {
            _conceptRepository = conceptRepository;
            _transactionRepository = transactionRepository;
        }

        public async Task<IEnumerable<ConceptMonthlyOutput>> HandleAsync(ConceptMonthlyQuery query)
        {
            var result = new List<ConceptMonthlyOutput>();

            var dateFrom = DateTime.ParseExact(query.Month + "01", "yyyyMMdd", null);
            var dateTo = dateFrom.AddMonths(1).AddSeconds(-1);

            var userConcepts = await _conceptRepository.GetConceptsByUser(query.UserId);
            foreach (var userConcept in userConcepts)
            {
                var totalAmmount = await _transactionRepository.GetTotalAmmountByFilterAsync(dateFrom.ToUniversalTime(), dateTo.ToUniversalTime(), userConcept.id);
                result.Add(new ConceptMonthlyOutput() { ConceptId = userConcept.id, Description = userConcept.Description, Balance = totalAmmount });
            }

            return result;
        }
    }
}
