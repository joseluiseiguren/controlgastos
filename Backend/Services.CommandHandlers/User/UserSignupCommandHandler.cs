using Cotecna.Domain.Core;
using Domain.Commands;
using Repository.Interfaces;
using Shared.Enums;
using Shared.Execptions;
using Shared.Helpers;
using System;
using UserModel = Domain.Model.User;
using System.Threading.Tasks;
using Services.CommandHandlers.Helper;

namespace Services.CommandHandlers.User
{
    public class UserSignupCommandHandler : IAsyncCommandHandler<UserSignupCommand>
    {
        private readonly IUserRepository _userRepository;

        public UserSignupCommandHandler(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task HandleAsync(UserSignupCommand command)
        {
            var existingUser = await _userRepository.GetUserByEmailAsync(command.Email);
            if (existingUser != null)
            {
                throw new BusinessException(ResourceHelper.GetString("USER_EXISTS", command.Language));
            }

            var user = new UserModel(id: Guid.NewGuid().ToString(),
                                        invalidLoginAttempts: 0,
                                        email: command.Email,
                                        name: command.Name,
                                        bornDate: command.BornDate,
                                        statusId: (int)UserStatus.OK,
                                        currency: command.Currency,
                                        password: SecurityHelper.HashPassword(command.Password),
                                        entryDate: DateTime.UtcNow,
                                        language: command.Language);

            await _userRepository.InsertUserAsync(user);
        }
    }
}
