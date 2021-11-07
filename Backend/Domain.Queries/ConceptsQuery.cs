using Cotecna.Domain.Core;
using Domain.Queries.Outputs;
using System.Collections.Generic;

namespace Domain.Queries
{
    public class ConceptsQuery : Query<IEnumerable<ConceptOutput>>
    {
        public string UserId { get; init; }

        public ConceptsQuery(string userId)
        {
            this.UserId = userId;
        }
    }
}
