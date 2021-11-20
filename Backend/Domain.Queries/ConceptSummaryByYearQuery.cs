using Domain.Queries.Outputs;
using System.Collections.Generic;

namespace Domain.Queries
{
    public class ConceptSummaryByYearQuery : QueryBase<IReadOnlyList<ConceptBalanceOutputByMonth>>
    {
        public int Year { get; init; }

        public string ConceptId { get; init; }

        public ConceptSummaryByYearQuery(string userId, int year, string conceptId)
            : base(userId)
        {
            this.Year = year;
            this.ConceptId = conceptId;
        }
    }
}
