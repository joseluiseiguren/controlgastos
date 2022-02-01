using Domain.Model;
using Newtonsoft.Json;
using Queue.Interfaces;

namespace Queue.AzureStorage
{
    public class QueueForgotPasswordEvent : QueueEventsBase, IQueueForgotPasswordEvents
    {
        private const string QUEUE_FORGOT_PASSWORD = "forgotpasswordqueue";

        public QueueForgotPasswordEvent(string queueConnectionString)
            : base(queueConnectionString, QUEUE_FORGOT_PASSWORD)
        {
        }

        public async Task ForgotPasswordEvent(User user, string token)
        {
            await _queueClient.SendMessageAsync(JsonConvert.SerializeObject(new { email = user.Email, name = user.Name, language = user.Language, token = token }));
        }
    }
}
