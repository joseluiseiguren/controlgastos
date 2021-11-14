using Domain.Commands;

namespace Backend.Dto
{
    public class CreateConceptDto
    {
        public string Description { get; set; }

        public bool Credit { get; set; }

        internal ConceptCreationCommand ToCommand(string userId)
            => new(userId, Description, Credit);
    }
}
