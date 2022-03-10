namespace Domain.Commands
{
    public class ConceptUpdateCommand : CommandBase
    {
        public string ConceptId { get; init; }

        public string Description { get; init; }

        public bool Credit { get; init; }

        public bool Favorite { get; init; }

        public ConceptUpdateCommand(string userId, string conceptId, string description, bool credit, bool favorite)
            : base(userId)
        {
            this.ConceptId = conceptId;
            this.Description = description;
            this.Credit = credit;
            this.Favorite = favorite;
        }
    }
}
