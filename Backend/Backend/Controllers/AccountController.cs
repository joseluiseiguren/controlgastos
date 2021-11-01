using Backend.Attributes;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Services.Interfaces;
using Services.Interfaces.Dto;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    [ApiController]
    public class AccountController : BaseController
    {
        private readonly ILogger<AccountController> _logger;
        private readonly IUserService _userService;

        public AccountController(ILogger<AccountController> logger, IUserService userService)
        {
            _logger = logger;
            _userService = userService;
        }

        [Microsoft.AspNetCore.Authorization.AllowAnonymous]
        [HttpPost]
        [Route("usuarios/login")]
        public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
        {
            _logger.LogInformation("Test log information");
            _logger.LogWarning("Test log warn");

            var token = await _userService.Login(loginDto?.Email, loginDto?.Password);

            return Ok(new { token = token });
        }

        [Authorize]
        [HttpGet]
        [Route("usuarios/dummy")]
        public async Task<IActionResult> Dummy()
        {
            return Ok(new { UserId = this.UserId, Name = UserName });
        }

        [Authorize]
        [HttpGet]
        [Route("usuarios/dummyException")]
        public async Task<IActionResult> DummyException()
        {
            var i = 0;
            var j = 10 / i;
            return Ok(new { UserId = this.UserId, Name = UserName });
        }
    }
}
