using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Shared.Constants;
using System;

namespace Backend.Attributes
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
    public class AuthorizeAttribute : Attribute, IAuthorizationFilter
    {
        public string ActionAllowed { get; set; }

        public void OnAuthorization(AuthorizationFilterContext context)
        {
            var userId = context.HttpContext.Items[Constants.HTTP_CONTEXT_USERID]?.ToString();
            if (string.IsNullOrEmpty(userId))
            {
                // not logged in
                context.Result = new JsonResult(new { message = "Unauthorized" }) { StatusCode = StatusCodes.Status401Unauthorized };
                return;
            }

            if (!string.IsNullOrEmpty(ActionAllowed))
            {
                var action = context.HttpContext.Items[Constants.HTTP_CONTEXT_ACTION]?.ToString();
                if (action != ActionAllowed)
                {
                    context.Result = new JsonResult(new { message = "Unauthorized: invalid action token" }) { StatusCode = StatusCodes.Status401Unauthorized };
                }
            }
            
        }
    }
}
