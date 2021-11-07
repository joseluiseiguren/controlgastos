using Cotecna.Domain.Core;
using Domain.Commands;
using Repository.Interfaces;
using Shared.Enums;
using Shared.Execptions;
using Shared.Helpers;
using System;
using UserModel = Domain.Models.User;
using System.Threading.Tasks;

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
                throw new BusinessException("Ya existe un usuario con el mismo email");
            }

            var user = new UserModel(id: Guid.NewGuid().ToString(),
                                        invalidLoginAttempts: 0,
                                        email: command.Email,
                                        name: command.Name,
                                        bornDate: command.BornDate,
                                        statusId: (int)UserStatus.OK,
                                        currency: command.Currency,
                                        password: PasswordHelper.HashPassword(command.Password),
                                        entryDate: DateTime.UtcNow);

            await _userRepository.InsertUserAsync(user);
        }
    }
}
