using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Services.Interfaces;
using Services.Interfaces.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly ILogger<AccountController> _logger;
        private readonly IUserService _userService;

        public AccountController(ILogger<AccountController> logger, IUserService userService)
        {
            _logger = logger;
            _userService = userService;
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("usuarios/login")]
        public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
        {
            var token = await _userService.Login(loginDto?.Email, loginDto?.Password);

            return Ok(token);
        }
    }
}
