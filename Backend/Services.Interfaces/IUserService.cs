using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface IUserService
    {
        Task<string> Login(string email, string password);
    }
}
