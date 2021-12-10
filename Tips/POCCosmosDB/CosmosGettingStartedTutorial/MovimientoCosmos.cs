using System;
using System.Collections.Generic;

namespace CosmosGettingStartedTutorial
{
    public class MovimientoCosmos
    {
        public string id { get; set; }

        public DateOnly TransactionDate { get; set; }

        public string UserId { get; set; }

        public string ConceptId { get; set; }

        public DateTime EntryDate { get; set; }

        public double Ammount { get; set; }

        public IEnumerable<string> Tags { get; set; }
    }
}
