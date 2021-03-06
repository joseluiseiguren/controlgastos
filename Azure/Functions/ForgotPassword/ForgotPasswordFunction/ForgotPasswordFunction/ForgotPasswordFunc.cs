using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;
using Newtonsoft.Json;
using ForgotPasswordFunction.Dto;
using System.Globalization;
using jle.lib.gmail.send;

namespace ForgotPasswordFunction
{
    public class ForgotPasswordFunc
    {
        [FunctionName("ForgotPasswordFunc")]
        public async Task Run([QueueTrigger("forgotpasswordqueue", Connection = "AzureWebJobsStorage")] string myQueueItem, ILogger log, string id)
        {
            var user = JsonConvert.DeserializeObject<User>(myQueueItem);

            EnsureValidUser(user); 

            log.LogInformation($"{id} - Sending email to: {user.Email}");

            var emailSender = new SendGmail(fromEmail: Environment.GetEnvironmentVariable("email_sender"),
                                            fromPassword: Environment.GetEnvironmentVariable("email_password"),
                                            displayName: "Money Guard");

            var subject = Resources.Resource.ResourceManager.GetString("PASSWORD_RECOVERY", CultureInfo.GetCultureInfo(user.Language));
            var body = CreateBody(user);

            await emailSender.SendAsync(toEmail: user.Email,
                                        subject: subject,
                                        htmlBody: body,
                                        toName: user.Name);

            log.LogInformation($"{id} - Email sent OK");
        }

        private string CreateBody(User user)
        {
            const string FORGOT_PASSWORD_URL = "https://blue-desert-01e404210.azurestaticapps.net/#/users/forgotpassword/apply/";

            var htmlContent = $"<h1>{string.Format(Resources.Resource.ResourceManager.GetString("HTML_HELLO", CultureInfo.GetCultureInfo(user.Language)), user.Name)}</h1>";
            htmlContent += $"<div><span style=\"font-family: Verdana, sans-serif; font-size: 1rem;\">{string.Format(Resources.Resource.ResourceManager.GetString("HTML_USE_THIS_LINK", CultureInfo.GetCultureInfo(user.Language)), FORGOT_PASSWORD_URL + user.Token)}</span></div>";

            htmlContent += $"<div style=\"margin-top: 2rem;\"><span style=\"font-family: Verdana, sans-serif; font-size: 0.8rem;\">{Resources.Resource.ResourceManager.GetString("CHEERS", CultureInfo.GetCultureInfo(user.Language))}</span></div>";
            htmlContent += $"<div><span style=\"font-family: Verdana, sans-serif; font-size: 0.8rem;\">{Resources.Resource.ResourceManager.GetString("TEAM", CultureInfo.GetCultureInfo(user.Language))}</span></div>";
            htmlContent += "<img src=\"https://blue-desert-01e404210.azurestaticapps.net/assets/icons/icon-52x52.png\" alt=\"\">";


            return htmlContent;
        }

        private void EnsureValidUser(User user)
        {
            if (string.IsNullOrEmpty(user.Token))
            {
                throw new Exception("Invalid user token");
            }

            if (string.IsNullOrEmpty(user.Name))
            {
                throw new Exception("Invalid user name");
            }

            if (string.IsNullOrEmpty(user.Email))
            {
                throw new Exception("Invalid user email");
            }
        }
    }
}
