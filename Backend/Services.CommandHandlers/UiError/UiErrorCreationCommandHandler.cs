using Cotecna.Domain.Core;
using Domain.Commands;
using Repository.Interfaces;
using System;
using System.Threading.Tasks;
using UiErrorModel = Domain.Model.UiErrorLog;

namespace Services.CommandHandlers.UiError
{
    public class UiErrorCreationCommandHandler : IAsyncCommandHandler<UiErrorCreationCommand>
    {
        private readonly IUiErrorRepository _uiErrorRepository;

        public UiErrorCreationCommandHandler(IUiErrorRepository uiErrorRepository)
        {
            _uiErrorRepository = uiErrorRepository;
        }

        public async Task HandleAsync(UiErrorCreationCommand command)
        {
            var errorToInsert = new UiErrorModel(id: Guid.NewGuid().ToString(),
                                                 message: command.Message,
                                                 entryDate: DateTime.UtcNow);

            await _uiErrorRepository.InsertUiErrorAsync(errorToInsert);
        }
    }
}
