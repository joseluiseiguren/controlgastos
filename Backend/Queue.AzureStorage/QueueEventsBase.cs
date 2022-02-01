using Azure.Storage.Queues;

namespace Queue.AzureStorage
{
    public abstract class QueueEventsBase
    {
        protected readonly QueueClient _queueClient;

        public QueueEventsBase(string queueConnectionString, string queueName)
        {
            var queueClientOptions = new QueueClientOptions { MessageEncoding = QueueMessageEncoding.Base64 };

            _queueClient = new QueueClient(queueConnectionString, queueName, queueClientOptions);
            _queueClient.CreateIfNotExists();
        }
    }
}
