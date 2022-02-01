using Domain.Model;

namespace Queue.Interfaces
{
    public interface IQueueRegistrationEvents
    {
        Task RegistrationEvent(User user);
    }
}