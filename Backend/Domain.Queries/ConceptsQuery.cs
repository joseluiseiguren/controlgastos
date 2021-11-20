using Domain.Queries.Outputs;
using System.Collections.Generic;

namespace Domain.Queries
{
    public class ConceptsQuery : QueryBase<IReadOnlyList<ConceptOutput>>
    {
        public ConceptsQuery(string userId)
            : base(userId)
        {
        }
    }
}
