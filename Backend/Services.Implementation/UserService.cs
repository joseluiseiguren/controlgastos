using Repository.Interfaces;
using Services.Interfaces;
using Shared.Enums;
using Shared.Execptions;
using Shared.Helpers;
using System.Threading.Tasks;

namespace Services.Implementation
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        private const int MAX_INTENTOS_FALLIDOS_LOGIN = 3;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<string> Login(string email, string password)
        {
            var user = await _userRepository.GetUserByEmailAsync(email);
            if (user == null)
            {
                throw new BusinessException("Usuario Inexistente");
            }
            if (user.StatusId == (int)UserStatus.BLOCKED)
            {
                throw new BusinessException("Usuario Bloqueado");
            }
            if (PasswordHelper.HashPassword(password) != user.Password)
            {
                user.InvalidLoginAttempts++;
                if (user.InvalidLoginAttempts >= MAX_INTENTOS_FALLIDOS_LOGIN)
                {
                    user.StatusId = (int)UserStatus.BLOCKED;
                }
                await _userRepository.UpdateUserAsync(user);
                
                throw new BusinessException("Password Invalido");
            }



            return "";
        }
    }
}
