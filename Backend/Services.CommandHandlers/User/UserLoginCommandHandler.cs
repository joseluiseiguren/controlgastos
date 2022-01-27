using Cotecna.Domain.Core;
using Domain.Commands;
using Repository.Interfaces;
using Services.CommandHandlers.Helper;
using Shared.Constants;
using Shared.Enums;
using Shared.Execptions;
using Shared.Helpers;
using Shared.Settings;
using System;
using System.Threading.Tasks;

namespace Services.Handlers.User
{
    public class UserLoginCommandHandler : IAsyncCommandHandler<UserLoginCommand, string>
    {
        private readonly IUserRepository _userRepository;
        private readonly SecuritySettings _securitySettings;

        private const int MAX_INTENTOS_FALLIDOS_LOGIN = 3;

        public UserLoginCommandHandler(IUserRepository userRepository, SecuritySettings securitySettings)
        {
            _userRepository = userRepository;
            _securitySettings = securitySettings;
        }

        public async Task<string> HandleAsync(UserLoginCommand command)
        {
            var user = await _userRepository.GetUserByEmailAsync(command.Email);
            if (user == null)
            {
                throw new BusinessException(ResourceHelper.GetString("USER_NOT_EXIST", command.Language));
            }
            if (user.StatusId == (int)UserStatus.BLOCKED)
            {
                throw new BusinessException(ResourceHelper.GetString("USER_BLOCKED", command.Language));
            }
            if (SecurityHelper.HashPassword(command.Password) != user.Password)
            {
                user.UpdateInvalidLoginAttempts(user.InvalidLoginAttempts + 1);
                if (user.InvalidLoginAttempts >= MAX_INTENTOS_FALLIDOS_LOGIN)
                {
                    user.UpdateStatus((int)UserStatus.BLOCKED);
                }
                await _userRepository.UpdateUserAsync(user);

                throw new BusinessException(ResourceHelper.GetString("INVALID_PASSWORD", command.Language));
            }
            else
            {
                if (user.InvalidLoginAttempts > 0)
                {
                    user.UpdateInvalidLoginAttempts(0);
                    await _userRepository.UpdateUserAsync(user);
                }
            }

            var token = SecurityHelper.GenerateJwtToken(_securitySettings.AccessTokenSecret,
                                                               user.id.ToString(),
                                                               user.Currency.ToString(),
                                                               user.Name.ToString(),
                                                               user.Language.ToString(),
                                                               Constants.ACTION_LOGGED_IN,
                                                               DateTime.UtcNow.AddDays(7));

            return token;
        }
    }
}