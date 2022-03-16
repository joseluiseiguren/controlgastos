using Backend.Attributes;
using Cotecna.Domain.Core;
using Domain.Queries;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PeriodController : BaseController
    {
        private readonly ILogger<PeriodController> _logger;
        private readonly IApplicationMediator _applicationMediator;

        public PeriodController(ILogger<PeriodController> logger, IApplicationMediator applicationMediator)
        {
            _logger = logger;
            _applicationMediator = applicationMediator;
        }

        [Authorize]
        [HttpGet]
        [Route("totalinout/{year}/{month}")]
        public async Task<IActionResult> GetTotalInOutByMonth(int year, int month)
        {
            var query = new TotalInOutMonthyQuery(this.UserId, month, year);

            var result = await _applicationMediator.DispatchAsync(query);

            return Ok(result);
        }

        [ApiKey]
        [HttpGet]
        [Route("totalinout/{userId}/{year}/{month}")]
        public async Task<IActionResult> GetTotalInOutByMonth(string userId, int year, int month)
        {
            var query = new TotalInOutMonthyQuery(userId, month, year);

            var result = await _applicationMediator.DispatchAsync(query);

            return Ok(result);
        }

        [Authorize]
        [HttpGet]
        [Route("totalinout/{year}")]
        public async Task<IActionResult> GetTotalInOutByYear(int year)
        {
            var query = new TotalInOutAnnualQuery(this.UserId, year);

            var result = await _applicationMediator.DispatchAsync(query);

            return Ok(result);
        }

        [Authorize]
        [HttpGet]
        [Route("totalinout/{year}/splittedByMonth")]
        public async Task<IActionResult> GetTotalInOutByYearSplittedByMonth(int year)
        {
            var query = new TotalInOutAnnualMonthQuery(this.UserId, year);

            var result = await _applicationMediator.DispatchAsync(query);

            return Ok(result);
        }

        [Authorize]
        [HttpGet]
        [Route("totalinout")]
        public async Task<IActionResult> GetTotalInOutHistoric()
        {
            var query = new TotalInOutHistoricQuery(this.UserId);

            var result = await _applicationMediator.DispatchAsync(query);

            return Ok(result);
        }
    }
}
