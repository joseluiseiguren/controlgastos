using Cotecna.Domain.Core;
using Domain.Commands;
using Repository.Interfaces;
using Shared.Execptions;
using System;
using System.Threading.Tasks;
using ConceptModel = Domain.Model.Concept;

namespace Services.CommandHandlers.Concept
{
    public class ConceptCreationCommandHandler : IAsyncCommandHandler<ConceptCreationCommand>
    {
        private readonly IConceptRepository _conceptRepository;

        public ConceptCreationCommandHandler(IConceptRepository conceptRepository)
        {
            _conceptRepository = conceptRepository;
        }

        public async Task HandleAsync(ConceptCreationCommand command)
        {
            var existingConcept = await _conceptRepository.GetConceptByUserAndDescription(command.UserId, command.Description);
            if (existingConcept != null)
            {
                throw new BusinessException("Ya existe concepto con el mismo nombre");
            }

            var conceptToInsert = new ConceptModel(id: Guid.NewGuid().ToString(), 
                                                   description: command.Description, 
                                                   credit: command.Credit,
                                                   userId: command.UserId, 
                                                   entryDate: DateTime.UtcNow);

            await _conceptRepository.InsertConceptAsync(conceptToInsert);
        }
    }
}
