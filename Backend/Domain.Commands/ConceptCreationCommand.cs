using Cotecna.Domain.Core;

namespace Domain.Commands
{
    public class ConceptCreationCommand : CommandBase
    {
        public string Description { get; init; }

        public bool Credit { get; init; }

        public ConceptCreationCommand(string userId, string description, bool credit)
            : base (userId)
        {
            this.Description = description;
            this.Credit = credit;
        }
    }
}
