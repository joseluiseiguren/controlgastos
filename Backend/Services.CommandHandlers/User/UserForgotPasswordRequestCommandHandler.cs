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
    public class UserForgotPasswordRequestCommandHandler : IAsyncCommandHandler<UserForgotPasswordRequestCommand>
    {
        private readonly IUserRepository _userRepository;

        public UserForgotPasswordRequestCommandHandler(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task HandleAsync(UserForgotPasswordRequestCommand command)
        {
            var existingUser = await _userRepository.GetUserByEmailAsync(command.Email);
            if (existingUser == null)
            {
                throw new BusinessException(ResourceHelper.GetString("USER_NOT_EXIST", command.Language));
            }

            //TODO: write message to send email in azure queue

           
        }
    }
}
