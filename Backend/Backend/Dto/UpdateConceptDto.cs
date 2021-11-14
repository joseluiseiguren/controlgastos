using Domain.Commands;

namespace Backend.Dto
{
    public class UpdateConceptDto
    {
        public string ConceptId { get; set; }

        public string Description { get; set; }

        public bool Credit { get; set; }

        internal ConceptUpdateCommand ToCommand(string userId)
            => new(userId, ConceptId, Description, Credit);
    }
}
