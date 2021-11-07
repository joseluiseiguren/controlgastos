using System;

namespace Domain.Queries.Outputs
{
    public class ConceptOutput
    {
        public string Id { get; set; }

        public string Description { get; set; }

        public bool Credit { get; set; }

        public string User { get; set; }

        public DateTime EntryDate { get; set; }
    }
}
