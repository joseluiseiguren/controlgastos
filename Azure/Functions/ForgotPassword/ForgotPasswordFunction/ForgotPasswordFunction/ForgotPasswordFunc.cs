using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using SendGrid.Helpers.Mail;
using System.Net.Mail;
using System.Net.Http;
using System.Net.Mime;
using System;
using SendGrid;
using System.Threading.Tasks;
using Newtonsoft.Json;
using ForgotPasswordFunction.Dto;

namespace ForgotPasswordFunction
{
    public class ForgotPasswordFunc
    {
        [FunctionName("ForgotPasswordFunc")]
        public async Task Run([QueueTrigger("forgotpasswordqueue", Connection = "AzureWebJobsStorage")]string myQueueItem, ILogger log, string id)
        {
            var user = JsonConvert.DeserializeObject<User>(myQueueItem);

            log.LogInformation($"{id} - Sending email to: {user.Email}");

            //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
            var apiKey = Environment.GetEnvironmentVariable("SendGridKey");
            var client = new SendGridClient(apiKey);
            var from = new EmailAddress("josheneixe@gmail.com", "Example User");
            var subject = "Sending with SendGrid is Fun";
            var to = new EmailAddress(user.Email, "Example User");
            var plainTextContent = "and easy to do anywhere, even with C#";
            var htmlContent = "<strong>and easy to do anywhere, even with C#</strong>";
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
            var response = await client.SendEmailAsync(msg);

            log.LogInformation($"{id} - Email sent status: {response.StatusCode}");
        }
    }
}
