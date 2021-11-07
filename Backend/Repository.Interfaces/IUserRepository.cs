using Domain.Models;
using System.Threading.Tasks;

namespace Repository.Interfaces
{
    public interface IUserRepository
    {
        Task<User> GetUserByEmailAsync(string email);

        Task UpdateUserAsync(User user);

        Task InsertUserAsync(User user);
    }
}
