using Domain.Model;
using System.Threading.Tasks;

namespace Repository.Interfaces
{
    public interface IAuditRepository
    {
        Task InsertAuditAsync(Audit audit);
    }
}
