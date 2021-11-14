using Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repository.Interfaces
{
    public interface IConceptRepository
    {
        Task<IEnumerable<Concept>> GetConceptsByUser(string userId);

        Task<Concept> GetConceptByUserAndDescription(string userId, string description);

        Task<Concept> GetConceptByUserAndConceptId(string userId, string conceptId);

        Task InsertConceptAsync(Concept concept);

        Task UpdateConceptAsync(Concept concept);
    }
}
