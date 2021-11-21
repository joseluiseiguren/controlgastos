using System;

namespace Domain.Queries.Outputs
{
    public class TransactionByDateOutput
    {
        public string ConceptId { get; set; }

        public string Description { get; set; }

        public decimal Ammount { get; set; }

        public DateTime TransactionDate { get; set; }

        public bool Credit { get; set; }
    }
}
