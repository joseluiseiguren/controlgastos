using System;
using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;

namespace SendTransactions
{
    public class SendTransactionsFunc
    {
        [FunctionName("SendTransactionsFunc")]
        public void Run([QueueTrigger("downloadtransactionsqueue", Connection = "AzureWebJobsStorage")]string myQueueItem, ILogger log, string id)
        {
            log.LogInformation($"C# Queue trigger function processed: {myQueueItem}");
            log.LogInformation(Environment.GetEnvironmentVariable("BackendApi_Host"));
            log.LogInformation(Environment.GetEnvironmentVariable("BackendApi_User"));
            log.LogInformation(Environment.GetEnvironmentVariable("BackendApi_Pwd"));
        }
    }
}
