using Cotecna.Domain.Core;
using Domain.Queries;
using Domain.Queries.Outputs;
using Repository.Interfaces;
using UserModel = Domain.Model.User;
using System.Threading.Tasks;

namespace Services.QueryHandlers.User
{
    public class UserProfileQueryHandler : IAsyncQueryHandler<UserProfileQuery, UserProfileOutput>
    {
        private readonly IUserRepository _userRepository;

        public UserProfileQueryHandler(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<UserProfileOutput> HandleAsync(UserProfileQuery query)
        {
            var userFound = await _userRepository.GetUserByIdAsync(query.UserId);
            return Map(userFound);
        }

        private UserProfileOutput Map(UserModel user)
        {
            if (user == null)
            {
                return null;
            }

            return new UserProfileOutput()
            {
                BornDate = user.BornDate.ToString("yyyy/MM/dd"),
                Currency = user.Currency,
                Email = user.Email,
                EntryDate = user.EntryDate,
                Name = user.Name,
                StatusId = user.StatusId
            };
        }
    }
}
