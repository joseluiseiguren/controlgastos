using Cotecna.Domain.Core;
using Domain.Commands;
using Queue.Interfaces;
using System.Threading.Tasks;

namespace Services.CommandHandlers.Transaction
{
    public class TransactionDownloadCommandHandler : IAsyncCommandHandler<TransactionDownloadCommand>
    {
        private readonly IQueueDownloadTransactionsEvents _queueDownloadTransactionsEvents;

        public TransactionDownloadCommandHandler(IQueueDownloadTransactionsEvents queueDownloadTransactionsEvents)
        {
            _queueDownloadTransactionsEvents = queueDownloadTransactionsEvents;
        }

        public async Task HandleAsync(TransactionDownloadCommand command)
        {
            await _queueDownloadTransactionsEvents.DownloadTransactionsEvent(command.UserId);
        }
    }
}
