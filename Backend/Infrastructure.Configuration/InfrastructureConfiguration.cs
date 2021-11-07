using Microsoft.Extensions.DependencyInjection;
using Repository.CosmosDB;
using Repository.Interfaces;

namespace Infrastructure.Configuration
{
    public static class InfrastructureConfiguration
    {
        public static void ConfigureRepository(this IServiceCollection serviceCollection, string coreConnectionString)
        {
            serviceCollection.AddTransient<IUserRepository>(x => new UserRepository(coreConnectionString));
            serviceCollection.AddTransient<IConceptRepository>(x => new ConceptRepository(coreConnectionString));
            serviceCollection.AddTransient<ITransactionRepository>(x => new TransactionRepository(coreConnectionString));
        }
    }
}
