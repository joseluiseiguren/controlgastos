using Domain.Queries.Outputs;
using System.Collections.Generic;

namespace Domain.Queries
{
    public class ConceptSummaryByMonthQuery : QueryBase<IReadOnlyList<ConceptBalanceOutputByDate>>
    {
        public string Month { get; init; } //YYYMM

        public string ConceptId { get; init; }

        public ConceptSummaryByMonthQuery(string userId, string month, string conceptId)
            : base(userId)
        {
            this.Month = month;
            this.ConceptId = conceptId;
        }
    }
}
