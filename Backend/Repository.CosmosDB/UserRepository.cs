using Microsoft.Azure.Cosmos;
using Repository.Interfaces;
using System;
using System.Linq;
using System.Threading.Tasks;
using User = Domain.Model.User;

namespace Repository.CosmosDB
{
    public class UserRepository : CosmosRepositoryBase, IUserRepository
    {
        public UserRepository(string connectionString, string databaseId)
            : base(connectionString, databaseId)
        { }

        public async Task<User> GetUserByEmailAsync(string email)
        {
            var sqlQueryText = $"SELECT * FROM c WHERE c.Email = '{email}'";

            var queryDefinition = new QueryDefinition(sqlQueryText);

            var database = this._cosmosClient.GetDatabase(this.DatabaseId);
            var container = database.GetContainer(_containerUsers);
            var queryResultSetIterator = container.GetItemQueryIterator<dynamic>(queryDefinition);

            var currentResultSet = await queryResultSetIterator.ReadNextAsync();
            var userFound = currentResultSet.FirstOrDefault();

            return CreateUserObjetcFromDynamic(userFound);
        }

        public async Task<User> GetUserByIdAsync(string id)
        {
            var sqlQueryText = $"SELECT * FROM c WHERE c.id = '{id}'";

            var queryDefinition = new QueryDefinition(sqlQueryText);

            var database = this._cosmosClient.GetDatabase(this.DatabaseId);
            var container = database.GetContainer(_containerUsers);
            var queryResultSetIterator = container.GetItemQueryIterator<dynamic>(queryDefinition);

            var currentResultSet = await queryResultSetIterator.ReadNextAsync();
            var userFound = currentResultSet.FirstOrDefault();

            return CreateUserObjetcFromDynamic(userFound);
        }

        public async Task UpdateUserAsync(User user)
        {
            var database = this._cosmosClient.GetDatabase(this.DatabaseId);
            var container = database.GetContainer(_containerUsers);
            
            await container.ReplaceItemAsync<User>(user, user.id);
        }

        public async Task InsertUserAsync(User user)
        {
            var database = this._cosmosClient.GetDatabase(this.DatabaseId);
            var container = database.GetContainer(_containerUsers);

            await container.CreateItemAsync<User>(user);
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
                            bornDate: new DateOnly(Convert.ToInt32(userDB.BornDate.Year), Convert.ToInt32(userDB.BornDate.Month), Convert.ToInt32(userDB.BornDate.Day)),
                            statusId: Convert.ToInt32(userDB.StatusId),
                            currency: userDB.Currency.ToString(),
                            password: userDB.Password.ToString(),
                            entryDate: DateTime.Parse(userDB.EntryDate.ToString()));
        }
    }
}
