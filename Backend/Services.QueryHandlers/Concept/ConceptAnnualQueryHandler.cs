    using Cotecna.Domain.Core;
using Domain.Queries;
using Domain.Queries.Outputs;
using Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services.QueryHandlers.Concept
{
    public class ConceptAnnualQueryHandler : IAsyncQueryHandler<ConceptAnnualQuery, IEnumerable<ConceptPeriodOutput>>
    {
        private readonly IConceptRepository _conceptRepository;
        private readonly ITransactionRepository _transactionRepository;

        public ConceptAnnualQueryHandler(IConceptRepository conceptRepository, ITransactionRepository transactionRepository)
        {
            _conceptRepository = conceptRepository;
            _transactionRepository = transactionRepository;
        }

        public async Task<IEnumerable<ConceptPeriodOutput>> HandleAsync(ConceptAnnualQuery query)
        {
            var result = new List<ConceptPeriodOutput>();

            var dateFrom = DateTime.ParseExact(query.Year + "0101", "yyyyMMdd", null);
            var dateTo = dateFrom.AddMonths(12).AddSeconds(-1);

            var userConcepts = await _conceptRepository.GetConceptsByUser(query.UserId);
            foreach (var userConcept in userConcepts)
            {
                var totalAmmount = await _transactionRepository.GetTotalAmmountByFilterAsync(dateFrom.ToUniversalTime(), dateTo.ToUniversalTime(), userConcept.id);
                result.Add(new ConceptPeriodOutput() { ConceptId = userConcept.id, Description = userConcept.Description, Balance = Math.Round(totalAmmount, 2) });
            }

            return result;
        }
    }
}
