using Microsoft.AspNetCore.Http;
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

        public ErrorMiddleware(RequestDelegate next)
        {
            this.next = next;
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
                context.Response.StatusCode = (int)HttpStatusCode.BadRequest;
                context.Response.Headers.Add("Content-Type", "application/json; charset=utf-8");
                return context.Response.WriteAsync(JsonConvert.SerializeObject(new { message = ex.Message }));
            }
            
            context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
            context.Response.Headers.Add("Content-Type", "application/json; charset=utf-8");
            return context.Response.WriteAsync(JsonConvert.SerializeObject(new { ErrorTraceId = Trace.CorrelationManager.ActivityId.ToString() }));
        }
    }
}
