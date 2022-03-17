using System;
using System.Globalization;
using System.Threading.Tasks;
using jle.lib.gmail.send;
using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using MonthlyReport.Dto;

namespace MonthlyReport
{
    public class MonthlyReportFunc
    {
        [FunctionName("MonthlyReportFunc")]
        public async Task Run([TimerTrigger(/*"0 * * * * *"*/ "0 0 0 1 * *")]TimerInfo myTimer, ILogger log)
        {
            log.LogInformation($"C# Timer trigger function executed at: {DateTime.Now}");

            var repository = new Repository();
            var users = await repository.GetUsers();

            var currentYear = DateTime.Now.AddMonths(-1).Year;
            var currentMonth = DateTime.Now.AddMonths(-1).Month;

            var prevYear = DateTime.Now.AddMonths(-2).Year;
            var prevMonth = DateTime.Now.AddMonths(-2).Month;

            foreach (var user in users)
            {
                var currentMonthSummary = await repository.GetUserMonthSummary(user.Id, currentYear, currentMonth);
                var prevMonthSummary = await repository.GetUserMonthSummary(user.Id, prevYear, prevMonth);

                await SendEmail(user, currentMonthSummary, prevMonthSummary, currentYear, currentMonth, prevYear, prevMonth);

                log.LogInformation($"Email sent for User: {user.Name} - {user.Email}");
            }
        }

        private async Task SendEmail(UserProfileDto userProfile, MonthSummaryDto currentMonthSummary, MonthSummaryDto prevMonthSummary, int currentYear, int currentMonth, int prevYear, int prevMonth)
        {
            var emailSender = new SendGmail(fromEmail: Environment.GetEnvironmentVariable("email_sender"),
                                            fromPassword: Environment.GetEnvironmentVariable("email_password"),
                                            displayName: "Money Guard");

            var subject = Resources.Resource.ResourceManager.GetString("SUBJECT", CultureInfo.GetCultureInfo(userProfile.Language));
            
            await emailSender.SendAsync(toEmail: userProfile.Email,
                                        subject: subject,
                                        htmlBody: CreateBody(userProfile, currentMonthSummary, prevMonthSummary, currentYear, currentMonth, prevYear, prevMonth),
                                        toName: userProfile.Name,
                                        attachmentFileName: null,
                                        attachementContentStream: null);
        }

        private string CreateBody(UserProfileDto user, MonthSummaryDto currentMonthSummary, MonthSummaryDto prevMonthSummary, int currentYear, int currentMonth, int prevYear, int prevMonth)
        {
            var incomeComp = currentMonthSummary.In >= prevMonthSummary.In ? currentMonthSummary.In - prevMonthSummary.In : prevMonthSummary.In - currentMonthSummary.In;
            var outcomeComp = currentMonthSummary.Out >= prevMonthSummary.Out ? currentMonthSummary.Out - prevMonthSummary.Out : prevMonthSummary.Out - currentMonthSummary.Out;

            var htmlContent = $"<h1>{string.Format(Resources.Resource.ResourceManager.GetString("HTML_HELLO", CultureInfo.GetCultureInfo(user.Language)), user.Name)}</h1>";
            htmlContent += $"<div style=\"margin-bottom: 1.5rem;\"><span style=\"font-family: Verdana, sans-serif; font-size: 1rem;\">{string.Format(Resources.Resource.ResourceManager.GetString("DATE", CultureInfo.GetCultureInfo(user.Language)), $"<div style=\"font-weight: bold; display: contents;\">{DateToMediumString(new DateOnly(currentYear, currentMonth, 1), user.Language)}</div>")}</span></div>";

            htmlContent += "<ul>";
            htmlContent += $"<li><div><span style=\"font-family: Verdana, sans-serif; font-size: 1rem; color: green;\">{string.Format(Resources.Resource.ResourceManager.GetString("INCOME", CultureInfo.GetCultureInfo(user.Language)), user.Currency, currentMonthSummary.In)}</span></div></li>";
            htmlContent += "<ul>";

            var strComparisonIncome = currentMonthSummary.In >= prevMonthSummary.In ?
                Resources.Resource.ResourceManager.GetString("COMPARISON_UP", CultureInfo.GetCultureInfo(user.Language)) :
                Resources.Resource.ResourceManager.GetString("COMPARISON_DOWN", CultureInfo.GetCultureInfo(user.Language));

            var strComparisonOutcome = currentMonthSummary.Out >= prevMonthSummary.Out ?
                Resources.Resource.ResourceManager.GetString("COMPARISON_UP", CultureInfo.GetCultureInfo(user.Language)) :
                Resources.Resource.ResourceManager.GetString("COMPARISON_DOWN", CultureInfo.GetCultureInfo(user.Language));

            htmlContent += $"<li><div><span style=\"font-family: Verdana, sans-serif; font-size: 0.7rem;\">{string.Format(strComparisonIncome, user.Currency, incomeComp, DateToMediumString(new DateOnly(prevYear, prevMonth, 1), user.Language))}</span></div></li>";
            htmlContent += "</ul>";
            htmlContent += $"<li style=\"margin-top: 1rem;\"><div><span style=\"font-family: Verdana, sans-serif; font-size: 1rem; color: red;\">{string.Format(Resources.Resource.ResourceManager.GetString("OUTCOME", CultureInfo.GetCultureInfo(user.Language)), user.Currency, currentMonthSummary.Out)}</span></div></li>";
            htmlContent += "<ul>";
            htmlContent += $"<li><div><span style=\"font-family: Verdana, sans-serif; font-size: 0.7rem;\">{string.Format(strComparisonOutcome, user.Currency, outcomeComp, DateToMediumString(new DateOnly(prevYear, prevMonth, 1), user.Language))}</span></div></li>";
            htmlContent += "</ul>";
            htmlContent += "</ul>";

            htmlContent += $"<div style=\"margin-top: 2rem;\"><span style=\"font-family: Verdana, sans-serif; font-size: 0.8rem;\">{Resources.Resource.ResourceManager.GetString("CHEERS", CultureInfo.GetCultureInfo(user.Language))}</span></div>";
            htmlContent += $"<div><span style=\"font-family: Verdana, sans-serif; font-size: 0.8rem;\">{Resources.Resource.ResourceManager.GetString("TEAM", CultureInfo.GetCultureInfo(user.Language))}</span></div>";
            htmlContent += "<img src=\"https://blue-desert-01e404210.azurestaticapps.net/assets/icons/icon-52x52.png\" alt=\"\">";

            return htmlContent;
        }

        private string DateToMediumString(DateOnly date, string language)
        {
            return date.ToString("MMMM yyyy", CultureInfo.GetCultureInfo(language));
        }
    }
}
