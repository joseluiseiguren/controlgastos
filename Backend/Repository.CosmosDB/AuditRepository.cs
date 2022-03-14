using Domain.Model;
using Repository.Interfaces;
using System.Threading.Tasks;

namespace Repository.CosmosDB
{
    public class AuditRepository : CosmosRepositoryBase, IAuditRepository
    {
        public AuditRepository(string connectionString, string databaseId)
           : base(connectionString, databaseId)
        { }

        public async Task InsertAuditAsync(Audit audit)
        {
            var database = this._cosmosClient.GetDatabase(this.DatabaseId);
            var container = database.GetContainer(_containerAudits);

            await container.CreateItemAsync<Audit>(audit);
        }
    }
}
