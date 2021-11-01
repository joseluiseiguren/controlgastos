using Microsoft.AspNetCore.Mvc;
using Shared.Constants;

namespace Backend.Controllers
{
    public abstract class BaseController : ControllerBase
    {
        public string UserId 
        { 
            get 
            {
                return this.HttpContext.Items[Constants.HTTP_CONTEXT_USERID]?.ToString();
            } 
        }

        public string UserName
        {
            get
            {
                return this.HttpContext.Items[Constants.HTTP_CONTEXT_USERNAME]?.ToString();
            }
        }
    }
}
