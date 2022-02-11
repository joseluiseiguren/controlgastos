using Backend.Attributes;
using Backend.Dto;
using Cotecna.Domain.Core;
using Domain.Queries;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Shared.Constants;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LogController : BaseController
    {
        private readonly ILogger<AccountController> _logger;
        private readonly IApplicationMediator _applicationMediator;

        public LogController(ILogger<AccountController> logger, IApplicationMediator applicationMediator)
        {
            _logger = logger;
            _applicationMediator = applicationMediator;
        }

        [Microsoft.AspNetCore.Authorization.AllowAnonymous]
        [HttpPost]
        [Route("mobile/internal")]
        public async Task<IActionResult> MobileLog([FromBody] UploadFileDto dto)
        {
            /*var command = loginDto.ToCommand();

            var token = await _applicationMediator.DispatchAsync<string>(command);

            return Ok(new { token = token });*/

            return Ok();
        }
    }
}
