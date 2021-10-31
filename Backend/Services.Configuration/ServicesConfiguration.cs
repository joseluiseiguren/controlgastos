using Microsoft.Extensions.DependencyInjection;
using Services.Implementation;
using Services.Interfaces;
using System;

namespace Services.Configuration
{
    public static class ServicesConfiguration
    {
        public static void ConfigureServices(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddTransient<IUserService, UserService>();
        }
    }
}
