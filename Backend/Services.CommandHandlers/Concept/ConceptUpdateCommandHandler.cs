using Cotecna.Domain.Core;
using Domain.Commands;
using Repository.Interfaces;
using Shared.Execptions;
using System.Threading.Tasks;

namespace Services.CommandHandlers.Concept
{
    public class ConceptUpdateCommandHandler : IAsyncCommandHandler<ConceptUpdateCommand>
    {
        private readonly IConceptRepository _conceptRepository;

        public ConceptUpdateCommandHandler(IConceptRepository conceptRepository)
        {
            _conceptRepository = conceptRepository;
        }

        public async Task HandleAsync(ConceptUpdateCommand command)
        {
            var conceptToUpdate = await _conceptRepository.GetConceptByUserAndConceptId(command.UserId, command.ConceptId);
            if (conceptToUpdate == null)
            {
                throw new BusinessException("El concepto no pertenece al usuario");
            }

            var conceptByDescripton = await _conceptRepository.GetConceptByUserAndDescription(command.UserId, command.Description);
            if (conceptByDescripton != null && conceptByDescripton.id != conceptToUpdate.id)
            {
                throw new BusinessException("Ya existe otro concepto con el mismo nombre");
            }

            conceptToUpdate.UpdateDescription(command.Description);
            conceptToUpdate.UpdateCredit(command.Credit);
            await _conceptRepository.UpdateConceptAsync(conceptToUpdate);
        }
    }
}
