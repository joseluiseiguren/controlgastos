using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Shared.Helpers
{
    public static class SecurityHelper
    {
        public static string HashPassword(string password)
        {
            return Convert.ToBase64String(System.Security.Cryptography.SHA1.Create().ComputeHash(Encoding.ASCII.GetBytes(password)));
        }

        public static string GenerateJwtToken(string tokenSecret, string userId, string userCurrency, string userName, string userLanguage, string action, DateTime expiration)
        {
            // generate token that is valid for 7 days
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(tokenSecret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(Constants.Constants.ACCESS_TOKEN_USERID, userId),
                    new Claim(Constants.Constants.ACCESS_TOKEN_CURRENCY, userCurrency),
                    new Claim(Constants.Constants.ACCESS_TOKEN_USERNAME, userName),
                    new Claim(Constants.Constants.ACCESS_TOKEN_LANGUAGE, userLanguage),
                    new Claim(Constants.Constants.ACCESS_TOKEN_ACTION, action)
                }),
                Expires = expiration,
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
