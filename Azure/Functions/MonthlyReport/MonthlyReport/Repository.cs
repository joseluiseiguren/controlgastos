using MonthlyReport.Dto;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace MonthlyReport
{
    internal class Repository
    {
        public async Task<IReadOnlyList<UserProfileDto>> GetUsers()
        {
            string responseString = "";
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(Environment.GetEnvironmentVariable("BackendApi_Host"));
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                client.DefaultRequestHeaders.Add(Environment.GetEnvironmentVariable("BackendApi_User"), Environment.GetEnvironmentVariable("BackendApi_Pwd"));
                var response = await client.GetAsync("account/all");
                if (response.IsSuccessStatusCode)
                {
                    responseString = await response.Content.ReadAsStringAsync();
                    var userProfile = JsonConvert.DeserializeObject<IReadOnlyList<UserProfileDto>>(responseString);
                    return userProfile;
                }
                throw new Exception(response.StatusCode.ToString());
            }
        }

        public async Task<MonthSummaryDto> GetUserMonthSummary(string userId, int year, int month)
        {
            string responseString = "";
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(Environment.GetEnvironmentVariable("BackendApi_Host"));
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                client.DefaultRequestHeaders.Add(Environment.GetEnvironmentVariable("BackendApi_User"), Environment.GetEnvironmentVariable("BackendApi_Pwd"));
                var response = await client.GetAsync($"period/totalinout/{userId}/{year}/{month}");
                if (response.IsSuccessStatusCode)
                {
                    responseString = await response.Content.ReadAsStringAsync();
                    var userTransactions = JsonConvert.DeserializeObject<MonthSummaryDto>(responseString);
                    return userTransactions;
                }
                throw new Exception(response.StatusCode.ToString());
            }
        }
    }
}
