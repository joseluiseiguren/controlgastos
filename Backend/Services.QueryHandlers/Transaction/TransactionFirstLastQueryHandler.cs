using Cotecna.Domain.Core;
using Domain.Queries;
using Domain.Queries.Outputs;
using Repository.Interfaces;
using System;
using System.Threading.Tasks;

namespace Services.QueryHandlers.Transaction
{
    public class TransactionFirstLastQueryHandler : IAsyncQueryHandler<TransactionFirstLastQuery, TransactionFirstLastOutput>
    {
        private readonly ITransactionRepository _transactionRepository;

        public TransactionFirstLastQueryHandler(ITransactionRepository transactionRepository)
        {
            _transactionRepository = transactionRepository;
        }

        public async Task<TransactionFirstLastOutput> HandleAsync(TransactionFirstLastQuery query)
        {
            var result = new TransactionFirstLastOutput();

            var firstTransaction = await _transactionRepository.GetFirstTransactionAsync(query.UserId);
            var lastTransaction = await _transactionRepository.GetLastTransactionAsync(query.UserId);

            result.FirstTransaction = firstTransaction == null ? DateOnly.MinValue : firstTransaction.TransactionDate;
            result.LastTransaction = lastTransaction == null ? DateOnly.MaxValue : lastTransaction.TransactionDate;

            return result;
        }
    }
}
