using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Shared.Execptions;
using System;
using System.Diagnostics;
using System.Net;
using System.Threading.Tasks;

namespace Backend.Middlewares
{
    public class ErrorMiddleware
    {
        private readonly RequestDelegate next;
        private readonly ILogger _logger;

        public ErrorMiddleware(RequestDelegate next, ILogger<ErrorMiddleware> logger)
        {
            this.next = next;
            _logger = logger;
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                Trace.CorrelationManager.ActivityId = Guid.NewGuid();

                await next(context);
            }
            catch (Exception ex)
            {
                await HandleExceptionAsync(context, ex);
            }
        }

        private Task HandleExceptionAsync(HttpContext context, Exception ex)
        {
            if (ex is BusinessException)
            {
                _logger.LogWarning(ex.Message);
                context.Response.StatusCode = (int)HttpStatusCode.BadRequest;
                context.Response.Headers.Add("Content-Type", "application/json; charset=utf-8");
                return context.Response.WriteAsync(JsonConvert.SerializeObject(new { message = ex.Message }));
            }

            _logger.LogCritical(ex, ex.Message);
            context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
            //context.Response.Headers.Add("Content-Type", "application/json; charset=utf-8");
            return context.Response.WriteAsync(JsonConvert.SerializeObject(new { ErrorTraceId = System.Diagnostics.Activity.Current.RootId.ToString() }));
        }
    }
}
