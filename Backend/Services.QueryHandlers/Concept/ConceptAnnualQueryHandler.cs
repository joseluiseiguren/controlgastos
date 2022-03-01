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
    public class ConceptAnnualQueryHandler : IAsyncQueryHandler<ConceptAnnualQuery, IReadOnlyList<ConceptPeriodOutput>>
    {
        private readonly IConceptRepository _conceptRepository;
        private readonly ITransactionRepository _transactionRepository;

        public ConceptAnnualQueryHandler(IConceptRepository conceptRepository, ITransactionRepository transactionRepository)
        {
            _conceptRepository = conceptRepository;
            _transactionRepository = transactionRepository;
        }

        public async Task<IReadOnlyList<ConceptPeriodOutput>> HandleAsync(ConceptAnnualQuery query)
        {
            var result = new List<ConceptPeriodOutput>();

            var dateFrom = DateOnly.ParseExact(query.Year + "0101", "yyyyMMdd", null);
            var dateTo = dateFrom.AddMonths(12).AddDays(-1);

            var userConcepts = await _conceptRepository.GetConceptsByUser(query.UserId);
            foreach (var userConcept in userConcepts.OrderBy(x => x.Description))
            {
                var totalAmmount = await _transactionRepository.GetTotalAmmountByFilterAsync(dateFrom, dateTo, userConcept.id);
                result.Add(new ConceptPeriodOutput() { ConceptId = userConcept.id, 
                                                       Description = userConcept.Description, 
                                                       Favorite = userConcept.Favorite,
                                                       Balance = Math.Round(totalAmmount, 2) });
            }

            return result;
        }
    }
}
