using Domain.Model;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repository.Interfaces
{
    public interface ITransactionRepository
    {
        Task<decimal> GetTotalAmmountByFilterAsync(DateTime dateFrom, DateTime dateTo, string conceptId);

        Task<decimal> GetTotalAmmountByUserAsync(DateTime dateFrom, DateTime dateTo, string userId, bool? income);

        Task<IReadOnlyList<Transaction>> GetTransactionsByFilterAsync(DateTime dateFrom, DateTime dateTo, string conceptId);
        
        Task<Transaction> GetTransactionByFilterAsync(DateTime transactionDate, string conceptId);

        Task InsertTransactionAsync(Transaction transaction);

        Task UpdateTransactionAsync(Transaction transaction);

        Task<Transaction> GetFirstTransactionAsync(string userId);

        Task<Transaction> GetLastTransactionAsync(string userId);
    }
}
