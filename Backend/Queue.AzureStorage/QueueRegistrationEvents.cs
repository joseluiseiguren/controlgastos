using Azure.Storage.Queues;
using Domain.Model;
using Newtonsoft.Json;
using Queue.Interfaces;

namespace Queue.AzureStorage
{
    public class QueueRegistrationEvents : QueueEventsBase, IQueueRegistrationEvents
    {
        private const string QUEUE_REGISTRATION = "regitrationqueue";

        public QueueRegistrationEvents(string queueConnectionString)
            : base(queueConnectionString, QUEUE_REGISTRATION)
        {
        }

        public async Task RegistrationEvent(User user)
        {
            await _queueClient.SendMessageAsync(JsonConvert.SerializeObject(new { email = user.Email, name = user.Name, language = user.Language }));
        }
    }
}