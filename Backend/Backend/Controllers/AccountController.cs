using Backend.Attributes;
using Backend.Dto;
using Cotecna.Domain.Core;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    [ApiController]
    public class AccountController : BaseController
    {
        private readonly ILogger<AccountController> _logger;
        private readonly IApplicationMediator _applicationMediator;

        public AccountController(ILogger<AccountController> logger, IApplicationMediator applicationMediator)
        {
            _logger = logger;
            _applicationMediator = applicationMediator;
        }

        [Microsoft.AspNetCore.Authorization.AllowAnonymous]
        [HttpPost]
        [Route("usuarios/login")]
        public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
        {
            var command = loginDto.ToCommand();

            var token = await _applicationMediator.DispatchAsync<string>(command);

            return Ok(new { token = token });
        }

        [Microsoft.AspNetCore.Authorization.AllowAnonymous]
        [HttpPost]
        [Route("usuarios/registracion")]
        public async Task<IActionResult> SignUp([FromBody] SignupDto signupDto)
        {
            var command = signupDto.ToCommand();

            await _applicationMediator.DispatchAsync(command);

            return Ok();
        }

        [Authorize]
        [HttpGet]
        [Route("usuarios/dummy")]
        public async Task<IActionResult> Dummy()
        {
            return Ok(await Task.FromResult(new { UserId = this.UserId, Name = UserName }));
        }

        [Authorize]
        [HttpGet]
        [Route("usuarios/dummyException")]
        public async Task<IActionResult> DummyException()
        {
            var i = 0;
            var j = 10 / i;
            return Ok(await Task.FromResult(new { UserId = this.UserId, Name = UserName }));
        }
    }
}
