using System;

namespace Domain.Queries.Outputs
{
    public class TransactionByDateOutput
    {
        public string ConceptId { get; set; }

        public string Description { get; set; }

        public decimal Ammount { get; set; }

        public string TransactionDate { get; set; } //YYYY-MM-DD

        public bool Credit { get; set; }

        public bool Favorite { get; set; }
    }
}
