using Domain.Queries.Outputs;
using System.Collections.Generic;

namespace Domain.Queries
{
    public class ConceptHistoricQuery : QueryBase<IReadOnlyList<ConceptPeriodOutput>>
    {
        public ConceptHistoricQuery(string userId)
            : base(userId)
        {
        }
    }
}
