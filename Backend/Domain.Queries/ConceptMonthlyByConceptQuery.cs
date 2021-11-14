using Cotecna.Domain.Core;
using Domain.Queries.Outputs;
using System.Collections.Generic;

namespace Domain.Queries
{
    public class ConceptMonthlyByConceptQuery : Query<IEnumerable<ConceptMonthlyByConceptOutput>>
    {
        public string UserId { get; init; }

        public string Month { get; init; } //YYYMM

        public string ConceptId { get; init; }

        public ConceptMonthlyByConceptQuery(string userId, string month, string conceptId)
        {
            this.UserId = userId;
            this.Month = month;
            this.ConceptId = conceptId;
        }
    }
}
