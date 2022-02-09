using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;
using Newtonsoft.Json;
using System.Globalization;
using RegistrationSendEmail.Dto;
using jle.lib.gmail.send;

namespace RegistrationSendEmail
{
    public class RegistrationFunc
    {
        [FunctionName("RegistrationFunc")]
        public async Task Run([QueueTrigger("regitrationqueue", Connection = "AzureWebJobsStorage")]string myQueueItem, ILogger log, string id)
        {
            var user = JsonConvert.DeserializeObject<User>(myQueueItem);

            log.LogInformation($"{id} - Sending email to: {user.Email}"); 

            var emailSender = new SendGmail(fromEmail: Environment.GetEnvironmentVariable("email_sender"),
                                            fromPassword: Environment.GetEnvironmentVariable("email_password"),
                                            displayName: "Money Guard");

            var subject = Resources.Resource.ResourceManager.GetString("SUBJECT", CultureInfo.GetCultureInfo(user.Language));
            var body = CreateBody(user);

            await emailSender.SendAsync(toEmail: user.Email,
                                        subject: subject,
                                        htmlBody: body,
                                        toName: user.Name);

            log.LogInformation($"{id} - Email sent OK");
        }

        private string CreateBody(User user)
        {
            const string MONEYGUARD_URL = "https://blue-desert-01e404210.azurestaticapps.net/";

            var htmlContent = string.Format(Resources.Resource.ResourceManager.GetString("HTML_HELLO", CultureInfo.GetCultureInfo(user.Language)), user.Name);
            htmlContent += string.Format(Resources.Resource.ResourceManager.GetString("LINK_WEB", CultureInfo.GetCultureInfo(user.Language)), MONEYGUARD_URL);

            return htmlContent;
        }
    }
}
