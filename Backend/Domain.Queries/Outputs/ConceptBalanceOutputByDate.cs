using System;

namespace Domain.Queries.Outputs
{
    public class ConceptBalanceOutputByDate
    {
        public DateOnly Date { get; set; }

        public decimal Balance { get; set; }
    }
}
