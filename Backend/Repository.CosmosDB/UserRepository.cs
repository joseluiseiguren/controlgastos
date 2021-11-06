using Microsoft.Azure.Cosmos;
using Repository.Interfaces;
using System;
using System.Linq;
using System.Threading.Tasks;
using User = Domain.Models.User;

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
            var queryResultSetIterator = container.GetItemQueryIterator<dynamic>(queryDefinition);

            var currentResultSet = await queryResultSetIterator.ReadNextAsync();
            var userFound = currentResultSet.FirstOrDefault();

            return CreateUserObjetcFromDynamic(userFound);
        }

        public async Task UpdateUserAsync(User user)
        {
            var database = this._cosmosClient.GetDatabase(_databaseId);
            var container = database.GetContainer(_containerUsers);
            var containerResponse = await container.ReadItemAsync<dynamic>(user.id, new PartitionKey(user.Email));
            User userDB = CreateUserObjetcFromDynamic(containerResponse.Resource);

            userDB.UpdateBornDate(user.BornDate);
            userDB.UpdateCurrecny(user.Currency);
            userDB.UpdateInvalidLoginAttempts(user.InvalidLoginAttempts);
            userDB.UpdateName(user.Name);
            userDB.UpdatePassword(user.Password);
            userDB.UpdateStatus(user.StatusId);

            await container.ReplaceItemAsync<User>(userDB, userDB.id, new PartitionKey(userDB.Email));
        }

        private User CreateUserObjetcFromDynamic(dynamic userDB)
        {
            if (userDB == null)
            {
                return null;
            }

            return new User(id: userDB.id.ToString(),
                            invalidLoginAttempts: Convert.ToInt32(userDB.InvalidLoginAttempts),
                            email: userDB.Email.ToString(),
                            name: userDB.Name.ToString(),
                            bornDate: DateTime.Parse(userDB.BornDate.ToString()),
                            statusId: Convert.ToInt32(userDB.StatusId),
                            currency: userDB.Currency.ToString(),
                            password: userDB.Password.ToString(),
                            entryDate: DateTime.Parse(userDB.EntryDate.ToString()));
        }
    }
}
