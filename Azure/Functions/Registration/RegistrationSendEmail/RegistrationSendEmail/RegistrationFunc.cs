using System;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Logging;

namespace RegistrationSendEmail
{
    public class RegistrationFunc
    {
        [FunctionName("RegistrationFunc")]
        public void Run([QueueTrigger("regitrationqueue", Connection = "AzureWebJobsStorage")]string myQueueItem, ILogger log, string id)
        {
            log.LogInformation($"C# Queue trigger function processed: {myQueueItem}");
        }
    }
}
