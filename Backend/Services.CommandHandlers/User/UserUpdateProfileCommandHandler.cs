using Cotecna.Domain.Core;
using Domain.Commands;
using Repository.Interfaces;
using Shared.Execptions;
using System.Threading.Tasks;

namespace Services.CommandHandlers.User
{
    public class UserUpdateProfileCommandHandler : IAsyncCommandHandler<UserUpdateProfileCommand>
    {
        private readonly IUserRepository _userRepository;

        public UserUpdateProfileCommandHandler(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task HandleAsync(UserUpdateProfileCommand command)
        {
            var userFoundById = await _userRepository.GetUserByIdAsync(command.UserId);
            if (userFoundById == null)
            {
                throw new BusinessException($"User not found: {command.UserId}");
            }

            var userFoundByEmail = await _userRepository.GetUserByEmailAsync(command.Email);
            if (userFoundByEmail != null &&
                userFoundByEmail.id != userFoundById.id)
            {
                throw new BusinessException("Ya existe un usuario con el mismo email");
            }

            userFoundById.UpdateBornDate(command.BornDate);
            userFoundById.UpdateCurrecny(command.Currency);
            userFoundById.UpdateEmail(command.Email);
            userFoundById.UpdateName(command.Name);
            userFoundById.UpdateLanguage(command.Language);

            await _userRepository.UpdateUserAsync(userFoundById);
        }
    }
}
