using ControlGastos.Models;
using Microsoft.IdentityModel.Tokens;
using Repository.Interfaces;
using Services.Interfaces;
using Shared.Constants;
using Shared.Enums;
using Shared.Execptions;
using Shared.Helpers;
using Shared.Settings;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Services.Implementation
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly SecuritySettings _securitySettings;

        private const int MAX_INTENTOS_FALLIDOS_LOGIN = 3;

        public UserService(IUserRepository userRepository, SecuritySettings securitySettings)
        {
            _userRepository = userRepository;
            _securitySettings = securitySettings;
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

            var token = GenerateJwtToken(user);

            return token;
        }

        private string GenerateJwtToken(User user)
        {
            // generate token that is valid for 7 days
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_securitySettings.AccessTokenSecret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] 
                { 
                    new Claim(Constants.ACCESS_TOKEN_USERID, user.id.ToString()), 
                    new Claim(Constants.ACCESS_TOKEN_CURRENCY, user.Currency.ToString()),
                    new Claim(Constants.ACCESS_TOKEN_USERNAME, user.Name.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
