using Cotecna.Domain.Core;
using Domain.Queries.Outputs;
using System.Collections.Generic;

namespace Domain.Queries
{
    public class ConceptMonthlyQuery : Query<IEnumerable<ConceptMonthlyOutput>>
    {
        public string UserId { get; init; }

        public string Month { get; init; } //YYYMM

        public ConceptMonthlyQuery(string userId, string month)
        {
            this.UserId = userId;
            this.Month = month;
        }
    }
}
