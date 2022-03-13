using Domain.Model;
using Repository.Interfaces;
using System.Threading.Tasks;

namespace Repository.CosmosDB
{
    public class UiErrorRepository : CosmosRepositoryBase, IUiErrorRepository
    {
        public UiErrorRepository(string connectionString, string databaseId)
            : base(connectionString, databaseId)
        { }

        public async Task InsertUiErrorAsync(UiErrorLog error)
        {
            var database = this._cosmosClient.GetDatabase(this.DatabaseId);
            var container = database.GetContainer(_containerUiError);

            await container.CreateItemAsync<UiErrorLog>(error);
        }
    }
}
