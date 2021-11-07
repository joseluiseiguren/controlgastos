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
    public class ConceptController : BaseController
    {
        private readonly ILogger<AccountController> _logger;
        private readonly IApplicationMediator _applicationMediator;

        public ConceptController(ILogger<AccountController> logger, IApplicationMediator applicationMediator)
        {
            _logger = logger;
            _applicationMediator = applicationMediator;
        }

        [Microsoft.AspNetCore.Authorization.AllowAnonymous]
        [HttpGet]
        [Route("usuarios/conceptos")]
        public async Task<IActionResult> GetConcepts()
        {
            var query = new ConceptsQuery(this.UserId);

            var result = await _applicationMediator.DispatchAsync(query);

            return Ok(result.Select(x => Map(x)));
        }

        [Microsoft.AspNetCore.Authorization.AllowAnonymous]
        [HttpGet]
        [Route("conceptos/mensual/{month}/sumary")]
        public async Task<IActionResult> GetMonthlyConcepts(string month) //YYYYMM
        {
            var query = new ConceptMonthlyQuery(this.UserId, month);

            var result = await _applicationMediator.DispatchAsync(query);

            return Ok(result);
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
