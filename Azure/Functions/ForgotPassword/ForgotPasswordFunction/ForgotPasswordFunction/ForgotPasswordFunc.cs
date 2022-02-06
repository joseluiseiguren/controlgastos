using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;
using Newtonsoft.Json;
using ForgotPasswordFunction.Dto;
using System.Globalization;
using System.Net.Mail;
using System.Net;

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

            var fromAddress = new MailAddress(Environment.GetEnvironmentVariable("email_sender"), "Money Guard");
            var fromPassword = Environment.GetEnvironmentVariable("email_password");

            var toAddress = new MailAddress(user.Email, user.Name);
            
            var subject = Resources.Resource.ResourceManager.GetString("PASSWORD_RECOVERY", CultureInfo.GetCultureInfo(user.Language));
            string body = CreateBody(user);

            var smtp = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(fromAddress.Address, fromPassword)
            };
            using (var message = new MailMessage(fromAddress, toAddress)
            {
                Subject = subject,
                Body = body,
                IsBodyHtml = true
            })
            {
                smtp.Send(message);
            }



            log.LogInformation($"{id} - Email sent OK");
        }

        private string CreateBody(User user)
        {
            const string FORGOT_PASSWORD_URL = "https://blue-desert-01e404210.azurestaticapps.net/#/users/forgotpassword/apply/";

            var htmlContent = string.Format(Resources.Resource.ResourceManager.GetString("HTML_HELLO", CultureInfo.GetCultureInfo(user.Language)), user.Name);
            htmlContent += string.Format(Resources.Resource.ResourceManager.GetString("HTML_USE_THIS_LINK", CultureInfo.GetCultureInfo(user.Language)), FORGOT_PASSWORD_URL + user.Token);

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
