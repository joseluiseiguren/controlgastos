using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using SendGrid.Helpers.Mail;
using System;
using SendGrid;
using System.Threading.Tasks;
using Newtonsoft.Json;
using ForgotPasswordFunction.Dto;
using System.Globalization;

namespace ForgotPasswordFunction
{
    public class ForgotPasswordFunc
    {
        [FunctionName("ForgotPasswordFunc")]
        public async Task Run([QueueTrigger("forgotpasswordqueue", Connection = "AzureWebJobsStorage")]string myQueueItem, ILogger log, string id)
        {
            var user = JsonConvert.DeserializeObject<User>(myQueueItem);

            EnsureValidUser(user);

            log.LogInformation($"{id} - Sending email to: {user.Email}");

            var apiKey = Environment.GetEnvironmentVariable("SendGridKey");
            var client = new SendGridClient(apiKey);
            var from = new EmailAddress("josheneixe@gmail.com", "Money Guard");
            var subject = Resources.Resource.ResourceManager.GetString("PASSWORD_RECOVERY", CultureInfo.GetCultureInfo(user.Language));
            var to = new EmailAddress(user.Email, "Money Guard");

            const string FORGOT_PASSWORD_URL = "https://blue-desert-01e404210.azurestaticapps.net/forgotpassword/apply/";

            var htmlContent = string.Format(Resources.Resource.ResourceManager.GetString("HTML_HELLO", CultureInfo.GetCultureInfo(user.Language)), user.Name);
            htmlContent += string.Format(Resources.Resource.ResourceManager.GetString("HTML_USE_THIS_LINK", CultureInfo.GetCultureInfo(user.Language)), FORGOT_PASSWORD_URL + user.Token);
            var msg = MailHelper.CreateSingleEmail(from, to, subject, "", htmlContent);
            var response = await client.SendEmailAsync(msg);

            log.LogInformation($"{id} - Email sent status: {response.StatusCode}");
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
