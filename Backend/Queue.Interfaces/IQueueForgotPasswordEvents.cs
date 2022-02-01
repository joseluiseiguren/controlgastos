using Domain.Model;

namespace Queue.Interfaces
{
    public interface IQueueForgotPasswordEvents
    {
        Task ForgotPasswordEvent(User user, string token);
    }
}
