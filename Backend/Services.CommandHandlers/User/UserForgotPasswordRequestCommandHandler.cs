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

namespace Services.CommandHandlers.User
{
    public class UserForgotPasswordRequestCommandHandler : IAsyncCommandHandler<UserForgotPasswordRequestCommand>
    {
        private readonly IUserRepository _userRepository;
        private readonly SecuritySettings _securitySettings;

        public UserForgotPasswordRequestCommandHandler(IUserRepository userRepository, SecuritySettings securitySettings)
        {
            _userRepository = userRepository;
            _securitySettings = securitySettings;
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


            //TODO: write message to send email in azure queue


        }
    }
}
