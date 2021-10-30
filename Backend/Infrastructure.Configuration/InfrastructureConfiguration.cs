using Microsoft.Extensions.DependencyInjection;
using Repository.CosmosDB;
using Repository.Interfaces;
using System;

namespace Infrastructure.Configuration
{
    public static class InfrastructureConfiguration
    {
        public static void ConfigureRepository(this IServiceCollection serviceCollection, string coreConnectionString)
        {
            serviceCollection.AddTransient<IUserRepository>(x => new UserRepository(coreConnectionString));
        }
    }
}
