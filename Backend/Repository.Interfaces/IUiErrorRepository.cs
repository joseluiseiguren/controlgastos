using Domain.Model;
using System.Threading.Tasks;

namespace Repository.Interfaces
{
    public interface IUiErrorRepository
    {
        Task InsertUiErrorAsync(UiErrorLog error);
    }
}
