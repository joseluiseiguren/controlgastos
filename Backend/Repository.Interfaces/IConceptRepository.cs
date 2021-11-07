using Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repository.Interfaces
{
    public interface IConceptRepository
    {
        Task<IEnumerable<Concept>> GetConceptsByUser(string userId);
    }
}
