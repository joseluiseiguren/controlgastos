using Backend.Attributes;
using Backend.Dto;
using Cotecna.Domain.Core;
using Domain.Commands;
using Domain.Queries;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TransactionController : BaseController
    {
        private readonly ILogger<PeriodController> _logger;
        private readonly IApplicationMediator _applicationMediator;

        public TransactionController(ILogger<PeriodController> logger, IApplicationMediator applicationMediator)
        {
            _logger = logger;
            _applicationMediator = applicationMediator;
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> CreateTransaction([FromBody] CreateTransactionDto createTransactionDto)
        {
            var command = createTransactionDto.ToCommand(this.UserId);

            await _applicationMediator.DispatchAsync(command);

            return Ok();
        }

        [Authorize]
        [HttpGet]
        [Route("firstlast")]
        public async Task<IActionResult> GetFirstLastTransaction()
        {
            var query = new TransactionFirstLastQuery(this.UserId);

            var result = await _applicationMediator.DispatchAsync(query);

            return Ok(result);
        }

        [Authorize]
        [HttpGet]
        [Route("{date}")]
        public async Task<IActionResult> GetTransactions(string date)
        {
            var query = new TransactionsByDateQuery(this.UserId, DateOnly.ParseExact(date, "yyyy-MM-dd", null));

            var result = await _applicationMediator.DispatchAsync(query);

            return Ok(result);
        }

        [Authorize]
        [HttpPost]
        [Route("download/request")]
        public async Task<IActionResult> TransactionsDownloadRequest()
        {
            var command = new TransactionDownloadCommand(this.UserId);

            await _applicationMediator.DispatchAsync(command);

            return Ok();
        }

        [ApiKey]
        [HttpGet]
        [Route("{userId}/all")]
        public async Task<IActionResult> GetAllTransactionsByUser(string userId)
        {
            var query = new TransactionsByUserQuery(userId);

            var result = await _applicationMediator.DispatchAsync(query);

            return Ok(result);
        }
    }
}
