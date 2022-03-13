using Microsoft.Azure.Cosmos;

namespace Repository.CosmosDB
{
    public abstract class CosmosRepositoryBase
    {
        protected readonly CosmosClient _cosmosClient;

        private readonly string _databaseId;
        protected const string _containerUsers = "users";
        protected const string _containerAudits = "audits";
        protected const string _containerConcepts = "concepts";
        protected const string _containerUiError = "uierror";
        protected const string _containerTransactions = "transactions";

        public CosmosRepositoryBase(string connectionString, string databaseId)
        {
            _cosmosClient = new CosmosClient(connectionString);
            _databaseId = databaseId;
        }

        protected string DatabaseId
        { 
            get 
            {
                return _databaseId; 
            } 
        }
    }
}
