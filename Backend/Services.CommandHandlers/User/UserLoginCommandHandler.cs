using Cotecna.Domain.Core;
using Domain.Commands;
using Microsoft.IdentityModel.Tokens;
using Repository.Interfaces;
using Services.CommandHandlers.Helper;
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
using UserModel = Domain.Model.User;

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
            if (PasswordHelper.HashPassword(command.Password) != user.Password)
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

            var token = GenerateJwtToken(user);

            return token;
        }

        private string GenerateJwtToken(UserModel user)
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
                    new Claim(Constants.ACCESS_TOKEN_USERNAME, user.Name.ToString()),
                    new Claim(Constants.ACCESS_TOKEN_LANGUAGE, user.Language.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}