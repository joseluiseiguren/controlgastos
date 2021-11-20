using Backend.Attributes;
using Backend.Dto;
using Cotecna.Domain.Core;
using Domain.Queries;
using Domain.Queries.Outputs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ConceptController : BaseController
    {
        private readonly ILogger<AccountController> _logger;
        private readonly IApplicationMediator _applicationMediator;

        public ConceptController(ILogger<AccountController> logger, IApplicationMediator applicationMediator)
        {
            _logger = logger;
            _applicationMediator = applicationMediator;
        }

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetConcepts()
        {
            var query = new ConceptsQuery(this.UserId);

            var result = await _applicationMediator.DispatchAsync(query);

            return Ok(result.Select(x => Map(x)));
        }

        [Authorize]
        [HttpGet]
        [Route("monthly/{month}/summary")]
        public async Task<IActionResult> GetSummaryByMonth(string month) //YYYYMM
        {
            var query = new ConceptMonthlyQuery(this.UserId, month);

            var result = await _applicationMediator.DispatchAsync(query);

            return Ok(result);
        }

        [Authorize]
        [HttpGet]
        [Route("{conceptId}/monthly/{month}/summary")]
        public async Task<IActionResult> GetMonthlyTransactionsByConcept(string month, string conceptId) //YYYYMM
        {
            var query = new ConceptSummaryByMonthQuery(this.UserId, month, conceptId);

            var result = await _applicationMediator.DispatchAsync(query);

            return Ok(result);
        }

        [Authorize]
        [HttpGet]
        [Route("annual/{year}/summary")]
        public async Task<IActionResult> GetSummaryByYear(int year)
        {
            var query = new ConceptAnnualQuery(this.UserId, year);

            var result = await _applicationMediator.DispatchAsync(query);

            return Ok(result);
        }

        [Authorize]
        [HttpGet]
        [Route("{conceptId}/annual/{year}/summary")]
        public async Task<IActionResult> GetAnnualTransactionsByConcept(int year, string conceptId)
        {
            var query = new ConceptSummaryByYearQuery(this.UserId, year, conceptId);

            var result = await _applicationMediator.DispatchAsync(query);

            return Ok(result);
        }

        [Authorize]
        [HttpGet]
        [Route("historic/summary")]
        public async Task<IActionResult> GetSummaryHistoric()
        {
            var query = new ConceptHistoricQuery(this.UserId);

            var result = await _applicationMediator.DispatchAsync(query);

            return Ok(result);
        }        

        [Authorize]
        [HttpGet]
        [Route("{conceptId}/historic/summary")]
        public async Task<IActionResult> GetHistoricTransactionsByConcept(string conceptId)
        {
            var query = new ConceptSummaryHistoricQuery(this.UserId, conceptId);

            var result = await _applicationMediator.DispatchAsync(query);

            return Ok(result);
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> CreateConcept([FromBody] CreateConceptDto createConceptDto)
        {
            var command = createConceptDto.ToCommand(this.UserId);

            await _applicationMediator.DispatchAsync(command);

            return Ok();
        }

        [Authorize]
        [HttpPut]
        public async Task<IActionResult> UpdateConcept([FromBody] UpdateConceptDto updateConceptDto)
        {
            var command = updateConceptDto.ToCommand(this.UserId);

            await _applicationMediator.DispatchAsync(command);

            return Ok();
        }

        private ConceptDto Map(ConceptOutput conceptOutput)
        {
            return new ConceptDto()
            {
                Credito = conceptOutput.Credit,
                Descripcion = conceptOutput.Description,
                Fechaalta = conceptOutput.EntryDate,
                Id = conceptOutput.Id,
                User = conceptOutput.User
            };
        }
    }
}
