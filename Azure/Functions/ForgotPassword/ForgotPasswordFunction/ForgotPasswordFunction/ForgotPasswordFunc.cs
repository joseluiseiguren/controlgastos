using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;

namespace ForgotPasswordFunction
{
    public class ForgotPasswordFunc
    {
        [FunctionName("ForgotPasswordFunc")]
        public void Run([QueueTrigger("forgotpasswordqueue", Connection = "AzureWebJobsStorage")]string myQueueItem, ILogger log)
        {
            log.LogInformation($"C# Queue trigger function processed yeah: {myQueueItem}");
        }
    }
}
