using Newtonsoft.Json;
using Queue.Interfaces;

namespace Queue.AzureStorage
{
    public class QueueDownloadTransactionsEvent : QueueEventsBase, IQueueDownloadTransactionsEvents
    {
        private const string QUEUE_DOWNLOAD_TRANSACTIONS = "downloadtransactionsqueue";

        public QueueDownloadTransactionsEvent(string queueConnectionString)
            : base(queueConnectionString, QUEUE_DOWNLOAD_TRANSACTIONS)
        {
        }

        public async Task DownloadTransactionsEvent(string userId)
        {
            await _queueClient.SendMessageAsync(JsonConvert.SerializeObject(new { userId = userId }));
        }
    }
}
