using Microsoft.Extensions.DependencyInjection;
using Queue.AzureStorage;
using Queue.Interfaces;
using Repository.CosmosDB;
using Repository.Interfaces;

namespace Infrastructure.Configuration
{
    public static class InfrastructureConfiguration
    {
        public static void ConfigureRepository(this IServiceCollection serviceCollection, string coreConnectionString, string databaseId, string queueConnectionString)
        {
            serviceCollection.AddTransient<IUserRepository>(x => new UserRepository(coreConnectionString, databaseId));
            serviceCollection.AddTransient<IConceptRepository>(x => new ConceptRepository(coreConnectionString, databaseId));
            serviceCollection.AddTransient<ITransactionRepository>(x => new TransactionRepository(coreConnectionString, databaseId));
            serviceCollection.AddTransient<IUiErrorRepository>(x => new UiErrorRepository(coreConnectionString, databaseId));
            serviceCollection.AddTransient<IQueueRegistrationEvents>(x => new QueueRegistrationEvents(queueConnectionString));
            serviceCollection.AddTransient<IQueueForgotPasswordEvents>(x => new QueueForgotPasswordEvent(queueConnectionString));
            serviceCollection.AddTransient<IQueueDownloadTransactionsEvents>(x => new QueueDownloadTransactionsEvent(queueConnectionString));
        }
    }
}
