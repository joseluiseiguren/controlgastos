using System;
using System.Threading.Tasks;

namespace Repository.Interfaces
{
    public interface ITransactionRepository
    {
        Task<decimal> GetTotalAmmountByFilterAsync(DateTime dateFrom, DateTime dateTo, string conceptId);
    }
}
