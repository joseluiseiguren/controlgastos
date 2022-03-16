using Cotecna.Domain.Core;
using Domain.Queries;
using Domain.Queries.Outputs;
using Repository.Interfaces;
using UserModel = Domain.Model.User;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;

namespace Services.QueryHandlers.User
{
    public class UsersQueryHandler : IAsyncQueryHandler<UsersQuery, IReadOnlyList<UserProfileOutput>>
    {
        private readonly IUserRepository _userRepository;

        public UsersQueryHandler(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<IReadOnlyList<UserProfileOutput>> HandleAsync(UsersQuery query)
        {
            var users = await _userRepository.GetUsersAsync();
            return users.Select(x => Map(x)).ToList();
        }

        private UserProfileOutput Map(UserModel user)
        {
            if (user == null)
            {
                return null;
            }

            return new UserProfileOutput()
            {
                Id = user.id,
                BornDate = user.BornDate.ToString("yyyy/MM/dd"),
                Currency = user.Currency,
                Language = user.Language,
                Email = user.Email,
                EntryDate = user.EntryDate,
                Name = user.Name,
                StatusId = user.StatusId
            };
        }
    }
}
