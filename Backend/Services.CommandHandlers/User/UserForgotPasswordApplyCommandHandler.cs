using Cotecna.Domain.Core;
using Domain.Commands;
using Repository.Interfaces;
using Shared.Execptions;
using System.Threading.Tasks;
using Services.CommandHandlers.Helper;
using Shared.Constants;
using Shared.Helpers;
using Shared.Enums;

namespace Services.CommandHandlers.User
{
    public class UserForgotPasswordApplyCommandHandler : IAsyncCommandHandler<UserForgotPasswordApplyCommand>
    {
        private readonly IUserRepository _userRepository;

        public UserForgotPasswordApplyCommandHandler(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task HandleAsync(UserForgotPasswordApplyCommand command)
        {
            var existingUser = await _userRepository.GetUserByIdAsync(command.UserId);
            if (existingUser == null)
            {
                throw new BusinessException(ResourceHelper.GetString("USER_NOT_EXIST", Constants.DEFAULT_LANGUAGE));
            }

            var newPassword = SecurityHelper.HashPassword(command.Password);

            existingUser.UpdatePassword(newPassword);
            if (existingUser.StatusId == (int)UserStatus.BLOCKED)
            {
                existingUser.UpdateStatus((int)UserStatus.OK);
            }

            await _userRepository.UpdateUserAsync(existingUser);
        }

        
    }
}
