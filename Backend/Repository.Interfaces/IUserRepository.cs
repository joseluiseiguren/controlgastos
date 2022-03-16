using Domain.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repository.Interfaces
{
    public interface IUserRepository
    {
        Task<User> GetUserByEmailAsync(string email);

        Task<User> GetUserByIdAsync(string id);

        Task<IReadOnlyList<User>> GetUsersAsync();

        Task UpdateUserAsync(User user);

        Task InsertUserAsync(User user);
    }
}
