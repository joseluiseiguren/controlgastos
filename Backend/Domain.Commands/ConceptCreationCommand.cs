using Cotecna.Domain.Core;

namespace Domain.Commands
{
    public class ConceptCreationCommand : Command
    {
        public string UserId { get; init; }

        public string Description { get; init; }

        public bool Credit { get; init; }

        public ConceptCreationCommand(string userId, string description, bool credit)
        {
            this.UserId = userId;
            this.Description = description;
            this.Credit = credit;
        }
    }
}
