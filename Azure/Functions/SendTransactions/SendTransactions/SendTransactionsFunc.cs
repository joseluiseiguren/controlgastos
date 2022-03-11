using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using jle.lib.gmail.send;
using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using SendTransactions.Dto;

namespace SendTransactions
{
    public class SendTransactionsFunc
    {
        [FunctionName("SendTransactionsFunc")]
        public async Task Run([QueueTrigger("downloadtransactionsqueue", Connection = "AzureWebJobsStorage")]string myQueueItem, ILogger log, string id)
        {
            var userDto = JsonConvert.DeserializeObject<UserDto>(myQueueItem);

            log.LogInformation($"{id} - Sending email to userId: {userDto.UserId}");

            var repository = new Repository();
            var taskUserProfile = repository.GetUserProfile(userDto.UserId);
            var taskUserTransactions = repository.GetUserTransactions(userDto.UserId);

            await Task.WhenAll(taskUserProfile, taskUserTransactions);

            var userProfile = taskUserProfile.Result;
            var userTransactions = taskUserTransactions.Result;

            await SendEmail(userProfile, userTransactions);

            log.LogInformation($"{id} - Email sent OK");
        }

        private async Task SendEmail(UserProfileDto userProfile, IReadOnlyList<TransactionDto> userTransactions)
        {
            var emailSender = new SendGmail(fromEmail: Environment.GetEnvironmentVariable("email_sender"),
                                            fromPassword: Environment.GetEnvironmentVariable("email_password"),
                                            displayName: "Money Guard");

            var subject = Resources.Resource.ResourceManager.GetString("SUBJECT", CultureInfo.GetCultureInfo(userProfile.Language));
            
            var transactionsList = userTransactions.Select(x => x.TransactionDate + "|" + x.Description + "|" + x.Ammount).ToList();
            transactionsList.Insert(0, Resources.Resource.ResourceManager.GetString("DATE", CultureInfo.GetCultureInfo(userProfile.Language)) + "|" +
                                       Resources.Resource.ResourceManager.GetString("CONCEPT", CultureInfo.GetCultureInfo(userProfile.Language)) + "|" +
                                       Resources.Resource.ResourceManager.GetString("AMOUNT", CultureInfo.GetCultureInfo(userProfile.Language))
);
            var transactionsCsv = String.Join(Environment.NewLine, transactionsList);

            var fileContent = GenerateStreamFromString(transactionsCsv);

            await emailSender.SendAsync(toEmail: userProfile.Email,
                                        subject: subject,
                                        htmlBody: CreateBody(userProfile),
                                        toName: userProfile.Name,
                                        attachmentFileName: "transactions.csv",
                                        attachementContentStream: fileContent);
        }

        private string CreateBody(UserProfileDto user)
        {
            var htmlContent = $"<h1>{string.Format(Resources.Resource.ResourceManager.GetString("HTML_HELLO", CultureInfo.GetCultureInfo(user.Language)), user.Name)}</h1>";
            htmlContent += $"<div><span style=\"font-family: Verdana, sans-serif; font-size: 1rem;\">{Resources.Resource.ResourceManager.GetString("HTML_DESCRIPTION", CultureInfo.GetCultureInfo(user.Language))}</span></div>";
            htmlContent += $"<div style=\"margin-top: 2rem;\"><span style=\"font-family: Verdana, sans-serif; font-size: 0.8rem;\">{Resources.Resource.ResourceManager.GetString("CHEERS", CultureInfo.GetCultureInfo(user.Language))}</span></div>";
            htmlContent += $"<div><span style=\"font-family: Verdana, sans-serif; font-size: 0.8rem;\">{Resources.Resource.ResourceManager.GetString("TEAM", CultureInfo.GetCultureInfo(user.Language))}</span></div>";
            htmlContent += "<img src=\"https://blue-desert-01e404210.azurestaticapps.net/assets/icons/icon-52x52.png\" alt=\"\">";

            return htmlContent;
        }

        private Stream GenerateStreamFromString(string s)
        {
            var stream = new MemoryStream();
            var writer = new StreamWriter(stream);
            writer.Write(s);
            writer.Flush();
            stream.Position = 0;
            return stream;
        }
    }
}
