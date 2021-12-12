using Domain.Model;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repository.Interfaces
{
    public interface ITransactionRepository
    {
        Task<decimal> GetTotalAmmountByFilterAsync(DateOnly dateFrom, DateOnly dateTo, string conceptId);

        Task<decimal> GetTotalAmmountByUserAsync(DateOnly dateFrom, DateOnly dateTo, string userId, bool? income);

        Task<IReadOnlyList<Transaction>> GetTransactionsByFilterAsync(DateOnly dateFrom, DateOnly dateTo, string conceptId);
        
        Task<Transaction> GetTransactionByFilterAsync(DateOnly transactionDate, string conceptId);

        Task InsertTransactionAsync(Transaction transaction);

        Task UpdateTransactionAsync(Transaction transaction);

        Task<Transaction> GetFirstTransactionAsync(string userId);

        Task<Transaction> GetLastTransactionAsync(string userId);
    }
}
