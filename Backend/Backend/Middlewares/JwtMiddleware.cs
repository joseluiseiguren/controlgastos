using Microsoft.AspNetCore.Http;
using Microsoft.IdentityModel.Tokens;
using Shared.Constants;
using Shared.Settings;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Middlewares
{
    public class JwtMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly SecuritySettings _securitySettings;

        public JwtMiddleware(RequestDelegate next, SecuritySettings securitySettings)
        {
            _next = next;
            _securitySettings = securitySettings;
        }

        public async Task Invoke(HttpContext context)
        {
            var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();
            if (token != null)
            {
                AttachUserToContext(context, token);
            }

            var apikeyPwd = context.Request.Headers[_securitySettings.ApikeyHeader].FirstOrDefault();
            if (!string.IsNullOrEmpty(apikeyPwd) && apikeyPwd == _securitySettings.ApikeyPwd)
            {
                AttachApiKeyToContext(context);
            }

            await _next(context);
        }

        private void AttachUserToContext(HttpContext context, string token)
        {
            try
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(_securitySettings.AccessTokenSecret);
                tokenHandler.ValidateToken(token, new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    // set clockskew to zero so tokens expire exactly at token expiration time (instead of 5 minutes later)
                    ClockSkew = TimeSpan.Zero
                }, out SecurityToken validatedToken);

                var jwtToken = (JwtSecurityToken)validatedToken;
                var userId = jwtToken.Claims.First(x => x.Type == Constants.ACCESS_TOKEN_USERID).Value;
                var userName = jwtToken.Claims.First(x => x.Type == Constants.ACCESS_TOKEN_USERNAME).Value;
                var userAction = jwtToken.Claims.First(x => x.Type == Constants.ACCESS_TOKEN_ACTION).Value;

                context.Items[Constants.HTTP_CONTEXT_USERID] = userId;
                context.Items[Constants.HTTP_CONTEXT_USERNAME] = userName;
                context.Items[Constants.HTTP_CONTEXT_ACTION] = userAction;
            }
            catch
            {
                // do nothing if jwt validation fails
                // user is not attached to context so request won't have access to secure routes
            }
        }

        private void AttachApiKeyToContext(HttpContext context)
        {
            context.Items[Constants.HTTP_CONTEXT_APIKEY_ALLOWED] = "true";
        }
    }
}
