using Domain.Queries.Outputs;
using System.Collections.Generic;

namespace Domain.Queries
{
    public class ConceptAnnualQuery : QueryBase<IEnumerable<ConceptPeriodOutput>>
    {
        public int Year { get; init; }

        public ConceptAnnualQuery(string userId, int year)
            : base(userId)
        {
            this.Year = year;
        }
    }
}
