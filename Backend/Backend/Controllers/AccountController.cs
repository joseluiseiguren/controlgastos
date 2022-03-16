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
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
        {
            var command = loginDto.ToCommand();

            var token = await _applicationMediator.DispatchAsync<string>(command);

            return Ok(new { token = token });
        }

        [Microsoft.AspNetCore.Authorization.AllowAnonymous]
        [HttpPost]
        [Route("signup")]
        public async Task<IActionResult> SignUp([FromBody] SignupDto signupDto)
        {
            var command = signupDto.ToCommand();

            await _applicationMediator.DispatchAsync(command);

            return Ok();
        }

        [Microsoft.AspNetCore.Authorization.AllowAnonymous]
        [HttpPost]
        [Route("forgotpassword/request")]
        public async Task<IActionResult> ForgotPasswordRequest([FromBody] ForgotPasswordRequestDto forgotPasswordRequestDto)
        {
            var command = forgotPasswordRequestDto.ToCommand();

            await _applicationMediator.DispatchAsync(command);

            return Ok();
        }

        [Authorize(ActionAllowed = Constants.ACTION_FORGOT_PASSWORD)]
        [HttpPost]
        [Route("forgotpassword/apply")]
        public async Task<IActionResult> ForgotPasswordApply([FromBody] ForgotPasswordApplyDto forgotPasswordApplyDto)
        {
            var command = forgotPasswordApplyDto.ToCommand(this.UserId);

            await _applicationMediator.DispatchAsync(command);

            return Ok();
        }

        [Authorize]
        [HttpPut]
        public async Task<IActionResult> UpdateProfile([FromBody] UpdateUserProfileDto updateUserProfileDto)
        {
            var command = updateUserProfileDto.ToCommand(this.UserId);

            await _applicationMediator.DispatchAsync(command);

            return Ok();
        }

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetUserProfile()
        {
            var query = new UserProfileQuery(this.UserId);

            var result = await _applicationMediator.DispatchAsync(query);

            return Ok(result);
        }

        [Authorize]
        [HttpGet]
        [Route("dummy")]
        public async Task<IActionResult> Dummy()
        {
            return Ok(await Task.FromResult(new { UserId = this.UserId, Name = UserName }));
        }

        [Authorize]
        [HttpGet]
        [Route("dummyException")]
        public async Task<IActionResult> DummyException()
        {
            var i = 0;
            var j = 10 / i;
            return Ok(await Task.FromResult(new { UserId = this.UserId, Name = UserName }));
        }

        [ApiKey]
        [HttpGet]
        [Route("{userId}")]
        public async Task<IActionResult> GetUserInformation(string userId)
        {
            var query = new UserProfileQuery(userId);

            var result = await _applicationMediator.DispatchAsync(query);

            if (result == null)
            {
                return BadRequest("User not found");
            }

            return Ok(result);
        }

        [ApiKey]
        [HttpGet]
        [Route("all")]
        public async Task<IActionResult> GetUsers()
        {
            var query = new UsersQuery();

            var result = await _applicationMediator.DispatchAsync(query);

            return Ok(result);
        }
    }
}
