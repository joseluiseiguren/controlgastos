using Domain.Queries.Outputs;
using System.Collections.Generic;

namespace Domain.Queries
{
    public class ConceptSummaryHistoricQuery : QueryBase<IReadOnlyList<ConceptBalanceOutputByYear>>
    {
        public string ConceptId { get; init; }

        public ConceptSummaryHistoricQuery(string userId, string conceptId)
            : base(userId)
        {
            this.ConceptId = conceptId;
        }
    }
}
