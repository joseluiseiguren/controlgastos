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
            const string ANDROID_URL = "https://play.google.com/store/apps/details?id=com.moneyguard.mobile";

            var htmlContent = $"<h1>{string.Format(Resources.Resource.ResourceManager.GetString("HTML_HELLO", CultureInfo.GetCultureInfo(user.Language)), user.Name)}</h1>";
            htmlContent += $"<div><span style=\"font-family: Verdana, sans-serif; font-size: 1rem;\">{Resources.Resource.ResourceManager.GetString("DESCRIPTION", CultureInfo.GetCultureInfo(user.Language))}</span></div>";
            htmlContent += $"<div><a href=\"{ANDROID_URL}\">Android</a></div>";

            htmlContent += $"<div style=\"margin-top: 2rem;\"><span style=\"font-family: Verdana, sans-serif; font-size: 0.8rem;\">{Resources.Resource.ResourceManager.GetString("CHEERS", CultureInfo.GetCultureInfo(user.Language))}</span></div>";
            htmlContent += $"<div><span style=\"font-family: Verdana, sans-serif; font-size: 0.8rem;\">{Resources.Resource.ResourceManager.GetString("TEAM", CultureInfo.GetCultureInfo(user.Language))}</span></div>";
            htmlContent += "<img src=\"https://blue-desert-01e404210.azurestaticapps.net/assets/icons/icon-52x52.png\" alt=\"\">";

            return htmlContent;
        }
    }
}
