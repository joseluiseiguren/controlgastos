using Cotecna.Domain.Core;
using Domain.Commands;
using Repository.Interfaces;
using Shared.Execptions;
using System.Threading.Tasks;
using Services.CommandHandlers.Helper;
using Shared.Settings;
using Shared.Constants;
using Shared.Helpers;
using System;
using Queue.Interfaces;

namespace Services.CommandHandlers.User
{
    public class UserForgotPasswordRequestCommandHandler : IAsyncCommandHandler<UserForgotPasswordRequestCommand>
    {
        private readonly IUserRepository _userRepository;
        private readonly SecuritySettings _securitySettings;
        private readonly IQueueForgotPasswordEvents _queueForgotPasswordEvents;

        public UserForgotPasswordRequestCommandHandler(IUserRepository userRepository, SecuritySettings securitySettings, IQueueForgotPasswordEvents queueForgotPasswordEvents)
        {
            _userRepository = userRepository;
            _securitySettings = securitySettings;
            _queueForgotPasswordEvents = queueForgotPasswordEvents;
        }

        public async Task HandleAsync(UserForgotPasswordRequestCommand command)
        {
            var existingUser = await _userRepository.GetUserByEmailAsync(command.Email);
            if (existingUser == null)
            {
                throw new BusinessException(ResourceHelper.GetString("USER_NOT_EXIST", command.Language));
            }

            var accessToken = SecurityHelper.GenerateJwtToken(_securitySettings.AccessTokenSecret,
                                                                existingUser.id.ToString(),
                                                                existingUser.Currency.ToString(),
                                                                existingUser.Name.ToString(),
                                                                existingUser.Language.ToString(),
                                                                Constants.ACTION_FORGOT_PASSWORD,
                                                                DateTime.UtcNow.AddMinutes(15));


            await _queueForgotPasswordEvents.ForgotPasswordEvent(existingUser, accessToken);
        }
    }
}
