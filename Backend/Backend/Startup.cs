using Backend.Middlewares;
using Cotecna.Domain.Core;
using Domain.Commands;
using Domain.Queries;
using Domain.Queries.Outputs;
using Infrastructure.Configuration;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Services.CommandHandlers.Concept;
using Services.CommandHandlers.User;
using Services.Handlers.User;
using Services.QueryHandlers.Concept;
using Services.QueryHandlers.User;
using Shared.Settings;
using System.Collections.Generic;

namespace Backend
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMediator()
               .AddAsyncCommandHandler<UserLoginCommand, UserLoginCommandHandler, string>()
               .AddAsyncCommandHandler<UserSignupCommand, UserSignupCommandHandler>()
               .AddAsyncCommandHandler<UserUpdateProfileCommand, UserUpdateProfileCommandHandler>()
               .AddAsyncQueryHandler<ConceptsQuery, ConceptQueryHandler, IReadOnlyList<ConceptOutput>>()
               .AddAsyncQueryHandler<UserProfileQuery, UserProfileQueryHandler, UserProfileOutput>()
               .AddAsyncQueryHandler<ConceptMonthlyQuery, ConceptMonthlyQueryHandler, IReadOnlyList<ConceptPeriodOutput>>()
               .AddAsyncQueryHandler<ConceptAnnualQuery, ConceptAnnualQueryHandler, IReadOnlyList<ConceptPeriodOutput>>()
               .AddAsyncQueryHandler<ConceptHistoricQuery, ConceptHistoricQueryHandler, IReadOnlyList<ConceptPeriodOutput>>()
               .AddAsyncQueryHandler<ConceptSummaryByMonthQuery, ConceptSummaryByMonthHandler, IReadOnlyList<ConceptBalanceOutputByDate>>()
               .AddAsyncQueryHandler<ConceptSummaryByYearQuery, ConceptSummaryByYearHandler, IReadOnlyList<ConceptBalanceOutputByMonth>>()
               .AddAsyncQueryHandler<ConceptSummaryHistoricQuery, ConceptSummaryHistoricHandler, IReadOnlyList<ConceptBalanceOutputByYear>>()
               .AddAsyncCommandHandler<ConceptCreationCommand, ConceptCreationCommandHandler>()
               .AddAsyncCommandHandler<ConceptUpdateCommand, ConceptUpdateCommandHandler>();

            services.AddLogging(config =>
            {
                config.AddDebug();
                config.AddConsole();
            });

            services.AddApplicationInsightsTelemetry().AddLogging();

            services.AddSingleton<SecuritySettings>(x => new SecuritySettings(Configuration.GetValue(typeof(string), "AccessTokenSecret").ToString()));
            services.ConfigureRepository(Configuration.GetConnectionString("cosmosdb"));

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Backend", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Backend v1"));
            }
            
            app.UseMiddleware<JwtMiddleware>();
            app.UseMiddleware<ErrorMiddleware>();

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
