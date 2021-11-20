using Domain.Queries.Outputs;
using System.Collections.Generic;

namespace Domain.Queries
{
    public class ConceptMonthlyQuery : QueryBase<IReadOnlyList<ConceptPeriodOutput>>
    {
        public string Month { get; init; } //YYYMM

        public ConceptMonthlyQuery(string userId, string month)
            : base(userId)
        {
            this.Month = month;
        }
    }
}
