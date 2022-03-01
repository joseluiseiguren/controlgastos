namespace Domain.Queries.Outputs
{
    public class ConceptPeriodOutput
    {
        public string ConceptId { get; set; }

        public string Description { get; set; }

        public decimal Balance { get; set; }

        public bool Favorite { get; set; }
    }
}
