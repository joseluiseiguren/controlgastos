using Newtonsoft.Json;
using SendTransactions.Dto;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace SendTransactions
{
    internal class Repository
    {
        public async Task<UserProfileDto> GetUserProfile(string userId)
        {
            string responseString = "";
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(Environment.GetEnvironmentVariable("BackendApi_Host"));
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                client.DefaultRequestHeaders.Add(Environment.GetEnvironmentVariable("BackendApi_User"), Environment.GetEnvironmentVariable("BackendApi_Pwd"));
                var response = await client.GetAsync("account/" + userId);
                if (response.IsSuccessStatusCode)
                {
                    responseString = await response.Content.ReadAsStringAsync();
                    var userProfile = JsonConvert.DeserializeObject<UserProfileDto>(responseString);
                    return userProfile;
                }
                throw new Exception(response.StatusCode.ToString());
            }
        }

        public async Task<IReadOnlyList<TransactionDto>> GetUserTransactions(string userId)
        {
            string responseString = "";
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(Environment.GetEnvironmentVariable("BackendApi_Host"));
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                client.DefaultRequestHeaders.Add(Environment.GetEnvironmentVariable("BackendApi_User"), Environment.GetEnvironmentVariable("BackendApi_Pwd"));
                var response = await client.GetAsync("transaction/" + userId + "/all");
                if (response.IsSuccessStatusCode)
                {
                    responseString = await response.Content.ReadAsStringAsync();
                    var userTransactions = JsonConvert.DeserializeObject<IReadOnlyList<TransactionDto>>(responseString);
                    return userTransactions;
                }
                throw new Exception(response.StatusCode.ToString());
            }
        }
    }
}
