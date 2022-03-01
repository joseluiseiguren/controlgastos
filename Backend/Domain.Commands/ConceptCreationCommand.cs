using Cotecna.Domain.Core;

namespace Domain.Commands
{
    public class ConceptCreationCommand : Command<System.Guid>
    {
        public string UserId { get; private set; }

        public string Description { get; init; }

        public bool Credit { get; init; }

        public bool Favorite { get; init; }

        public ConceptCreationCommand(string userId, string description, bool credit, bool favorite)
        {
            this.UserId = userId;
            this.Description = description;
            this.Credit = credit;
            this.Favorite = favorite;
        }
    }
}
