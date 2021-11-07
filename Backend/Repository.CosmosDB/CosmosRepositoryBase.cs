using Microsoft.Azure.Cosmos;

namespace Repository.CosmosDB
{
    public abstract class CosmosRepositoryBase
    {
        protected readonly CosmosClient _cosmosClient;

        protected const string _databaseId = "controlgastos";
        protected const string _containerUsers = "users";
        protected const string _containerAudits = "audits";
        protected const string _containerConcepts = "concepts";
        protected const string _containerTransactions = "transactions";

        public CosmosRepositoryBase(string connectionString)
        {
            _cosmosClient = new CosmosClient(connectionString);
        }
    }
}
