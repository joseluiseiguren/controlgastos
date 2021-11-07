using Cotecna.Domain.Core;
using Domain.Queries;
using Domain.Queries.Outputs;
using Repository.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ConceptModel = Domain.Models.Concept;

namespace Services.QueryHandlers.Concept
{
    public class ConceptQueryHandler : IAsyncQueryHandler<ConceptsQuery, IEnumerable<ConceptOutput>>
    {
        private readonly IConceptRepository _conceptRepository;

        public ConceptQueryHandler(IConceptRepository conceptRepository)
        {
            _conceptRepository = conceptRepository;
        }

        public async Task<IEnumerable<ConceptOutput>> HandleAsync(ConceptsQuery query)
        {
            var concepts = await _conceptRepository.GetConceptsByUser(query.UserId);

            return concepts.Select(x => Map(x)).ToList();
        }

        private ConceptOutput Map(ConceptModel concept)
        {
            return new ConceptOutput()
            {
                Credit = concept.Credit,
                Description = concept.Description,
                EntryDate = concept.EntryDate,
                Id = concept.id,
                User = concept.UserId
            };
        }
    }
}
