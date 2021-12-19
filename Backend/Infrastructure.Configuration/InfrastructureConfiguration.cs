using Microsoft.Extensions.DependencyInjection;
using Repository.CosmosDB;
using Repository.Interfaces;

namespace Infrastructure.Configuration
{
    public static class InfrastructureConfiguration
    {
        public static void ConfigureRepository(this IServiceCollection serviceCollection, string coreConnectionString, string databaseId)
        {
            serviceCollection.AddTransient<IUserRepository>(x => new UserRepository(coreConnectionString, databaseId));
            serviceCollection.AddTransient<IConceptRepository>(x => new ConceptRepository(coreConnectionString, databaseId));
            serviceCollection.AddTransient<ITransactionRepository>(x => new TransactionRepository(coreConnectionString, databaseId));
        }
    }
}
