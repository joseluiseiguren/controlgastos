using Cotecna.Domain.Core;

namespace Domain.Commands
{
    public class ConceptUpdateCommand : Command
    {
        public string UserId { get; init; }

        public string ConceptId { get; init; }

        public string Description { get; init; }

        public bool Credit { get; init; }

        public ConceptUpdateCommand(string userId, string conceptId, string description, bool credit)
        {
            this.UserId = userId;
            this.ConceptId = conceptId;
            this.Description = description;
            this.Credit = credit;
        }
    }
}
