using ControlGastos.Models;
using Microsoft.Azure.Cosmos;
using Repository.Interfaces;
using System;
using System.Threading.Tasks;
using User = ControlGastos.Models.User;

namespace Repository.CosmosDB
{
    public class UserRepository : IUserRepository
    {
        private readonly CosmosClient _cosmosClient;

        public UserRepository(string connectionString)
        {
            _cosmosClient = new CosmosClient(connectionString);
        }

        public async Task<User> GetUserByEmailAsync(string email)
        {
            throw new NotImplementedException();
        }
    }
}
