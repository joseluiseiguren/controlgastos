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
    public class ConceptMonthlyQueryHandler : IAsyncQueryHandler<ConceptMonthlyQuery, IReadOnlyList<ConceptPeriodOutput>>
    {
        private readonly IConceptRepository _conceptRepository;
        private readonly ITransactionRepository _transactionRepository;

        public ConceptMonthlyQueryHandler(IConceptRepository conceptRepository, ITransactionRepository transactionRepository)
        {
            _conceptRepository = conceptRepository;
            _transactionRepository = transactionRepository;
        }

        public async Task<IReadOnlyList<ConceptPeriodOutput>> HandleAsync(ConceptMonthlyQuery query)
        {
            var result = new List<ConceptPeriodOutput>();

            var dateFrom = DateOnly.ParseExact(query.Month + "01", "yyyyMMdd", null);
            var dateTo = dateFrom.AddMonths(1).AddDays(-1);

            var userConcepts = await _conceptRepository.GetConceptsByUser(query.UserId);
            foreach (var userConcept in userConcepts.OrderBy(x => x.Description))
            {
                var totalAmmount = await _transactionRepository.GetTotalAmmountByFilterAsync(dateFrom, dateTo, userConcept.id);
                result.Add(new ConceptPeriodOutput() { ConceptId = userConcept.id, Description = userConcept.Description, Balance = Math.Round(totalAmmount, 2) });
            }

            return result;
        }
    }
}
