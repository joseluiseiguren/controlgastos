using Microsoft.Azure.Cosmos;
using Repository.Interfaces;
using System;
using System.Linq;
using System.Threading.Tasks;
using User = ControlGastos.Models.User;

namespace Repository.CosmosDB
{
    public class UserRepository : IUserRepository
    {
        private readonly CosmosClient _cosmosClient;

        private const string _databaseId = "controlgastos";
        private const string _containerUsers = "users";
        private const string _containerAudits = "audits";
        private const string _containerConceptos = "concepts";
        private const string _containerMovimientos = "transactions";

        public UserRepository(string connectionString)
        {
            _cosmosClient = new CosmosClient(connectionString);
        }

        public async Task<User> GetUserByEmailAsync(string email)
        {
            var sqlQueryText = $"SELECT * FROM c WHERE c.Email = '{email}'";

            var queryDefinition = new QueryDefinition(sqlQueryText);

            var database = this._cosmosClient.GetDatabase(_databaseId);
            var container = database.GetContainer(_containerUsers);
            var queryResultSetIterator = container.GetItemQueryIterator<User>(queryDefinition);

            var currentResultSet = await queryResultSetIterator.ReadNextAsync();
            var userFound = currentResultSet.FirstOrDefault();

            return userFound;
        }

        public async Task UpdateUserAsync(User user)
        {
            var database = this._cosmosClient.GetDatabase(_databaseId);
            var container = database.GetContainer(_containerUsers);
            var containerResponse = await container.ReadItemAsync<User>(user.id, new PartitionKey(user.Email));
            var userDB = containerResponse.Resource;

            userDB.BornDate = user.BornDate;
            userDB.Currency = user.Currency;
            userDB.InvalidLoginAttempts = user.InvalidLoginAttempts;
            userDB.Name = user.Name;
            userDB.Password = user.Password;
            userDB.StatusId = user.StatusId;

            await container.ReplaceItemAsync<User>(userDB, userDB.id, new PartitionKey(userDB.Email));
        }
    }
}
