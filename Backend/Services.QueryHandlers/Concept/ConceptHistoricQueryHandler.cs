using Cotecna.Domain.Core;
using Domain.Queries;
using Domain.Queries.Outputs;
using Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services.QueryHandlers.Concept
{
    public class ConceptHistoricQueryHandler : IAsyncQueryHandler<ConceptHistoricQuery, IReadOnlyList<ConceptPeriodOutput>>
    {
        private readonly IConceptRepository _conceptRepository;
        private readonly ITransactionRepository _transactionRepository;

        public ConceptHistoricQueryHandler(IConceptRepository conceptRepository, ITransactionRepository transactionRepository)
        {
            _conceptRepository = conceptRepository;
            _transactionRepository = transactionRepository;
        }

        public async Task<IReadOnlyList<ConceptPeriodOutput>> HandleAsync(ConceptHistoricQuery query)
        {
            var result = new List<ConceptPeriodOutput>();

            var dateFrom = DateTime.MinValue;
            var dateTo = DateTime.MaxValue;

            var userConcepts = await _conceptRepository.GetConceptsByUser(query.UserId);
            foreach (var userConcept in userConcepts)
            {
                var totalAmmount = await _transactionRepository.GetTotalAmmountByFilterAsync(dateFrom, dateTo, userConcept.id);
                result.Add(new ConceptPeriodOutput() { ConceptId = userConcept.id, Description = userConcept.Description, Balance = Math.Round(totalAmmount, 2) });
            }

            return result;
        }
    }
}
