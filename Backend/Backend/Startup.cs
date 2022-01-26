using Backend.Converters;
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
using Services.CommandHandlers.Transaction;
using Services.CommandHandlers.User;
using Services.Handlers.User;
using Services.QueryHandlers.Concept;
using Services.QueryHandlers.Period;
using Services.QueryHandlers.Transaction;
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
            services.AddCors(options =>
            {
                options.AddPolicy(name: "ControlGastosAllowedOrigins",
                                  builder =>
                                  {
                                      builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                                  });
            });

            services.AddMediator()
               .AddAsyncCommandHandler<UserLoginCommand, UserLoginCommandHandler, string>()
               .AddAsyncCommandHandler<UserSignupCommand, UserSignupCommandHandler>()
               .AddAsyncCommandHandler<UserForgotPasswordRequestCommand, UserForgotPasswordRequestCommandHandler>()
               .AddAsyncCommandHandler<TransactionCreationCommand, TransactionCreationCommandHandler>()
               .AddAsyncCommandHandler<UserUpdateProfileCommand, UserUpdateProfileCommandHandler>()
               .AddAsyncQueryHandler<ConceptsQuery, ConceptQueryHandler, IReadOnlyList<ConceptOutput>>()
               .AddAsyncQueryHandler<UserProfileQuery, UserProfileQueryHandler, UserProfileOutput>()
               .AddAsyncQueryHandler<TotalInOutMonthyQuery, TotalInOutMonthyQueryHandler, TotalInOutOutput>()
               .AddAsyncQueryHandler<TotalInOutAnnualQuery, TotalInOutAnnualQueryHandler, TotalInOutOutput>()
               .AddAsyncQueryHandler<TotalInOutHistoricQuery, TotalInOutHistoricQueryHandler, TotalInOutOutput>()
               .AddAsyncQueryHandler<ConceptMonthlyQuery, ConceptMonthlyQueryHandler, IReadOnlyList<ConceptPeriodOutput>>()
               .AddAsyncQueryHandler<ConceptAnnualQuery, ConceptAnnualQueryHandler, IReadOnlyList<ConceptPeriodOutput>>()
               .AddAsyncQueryHandler<ConceptHistoricQuery, ConceptHistoricQueryHandler, IReadOnlyList<ConceptPeriodOutput>>()
               .AddAsyncQueryHandler<ConceptSummaryByMonthQuery, ConceptSummaryByMonthHandler, IReadOnlyList<ConceptBalanceOutputByDate>>()
               .AddAsyncQueryHandler<ConceptSummaryByYearQuery, ConceptSummaryByYearHandler, IReadOnlyList<ConceptBalanceOutputByMonth>>()
               .AddAsyncQueryHandler<ConceptSummaryHistoricQuery, ConceptSummaryHistoricHandler, IReadOnlyList<ConceptBalanceOutputByYear>>()
               .AddAsyncQueryHandler<TransactionsByDateQuery, TransactionByDateQueryHandler, IReadOnlyList<TransactionByDateOutput>>()
               .AddAsyncQueryHandler<TransactionFirstLastQuery, TransactionFirstLastQueryHandler, TransactionFirstLastOutput>()
               .AddAsyncCommandHandler<ConceptCreationCommand, ConceptCreationCommandHandler>()
               .AddAsyncCommandHandler<ConceptUpdateCommand, ConceptUpdateCommandHandler>();

            services.AddLogging(config =>
            {
                config.AddDebug();
                config.AddConsole();
            });

            services.AddApplicationInsightsTelemetry().AddLogging();

            services.AddSingleton<SecuritySettings>(x => new SecuritySettings(Configuration.GetValue(typeof(string), "AccessTokenSecret").ToString()));
            services.ConfigureRepository(Configuration.GetConnectionString("cosmosdb"), (Configuration.GetValue(typeof(string), "DatabaseId").ToString()));

            services.AddControllers().AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.Converters.Add(new DateTimeConverter());
            });

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
                app.UseSwaggerUI(c => c.SwaggerEndpoint("../swagger/v1/swagger.json", "Backend v1"));
            }

            app.UseCors("ControlGastosAllowedOrigins");

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
