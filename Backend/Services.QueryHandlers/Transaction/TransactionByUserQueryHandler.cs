using Cotecna.Domain.Core;
using Domain.Queries;
using Domain.Queries.Outputs;
using Repository.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Services.QueryHandlers.Transaction
{
    public class TransactionByUserQueryHandler : IAsyncQueryHandler<TransactionsByUserQuery, IReadOnlyList<TransactionsAllByUserOutput>>
    {
        private readonly ITransactionRepository _transactionRepository;
        private readonly IConceptRepository _conceptRepository;

        public TransactionByUserQueryHandler(ITransactionRepository transactionRepository, IConceptRepository conceptRepository)
        {
            _transactionRepository = transactionRepository;
            _conceptRepository = conceptRepository;
        }

        public async Task<IReadOnlyList<TransactionsAllByUserOutput>> HandleAsync(TransactionsByUserQuery query)
        {
            var result = new List<TransactionsAllByUserOutput>();

            var userConcepts = await _conceptRepository.GetConceptsByUser(query.UserId);
            var transaction = await _transactionRepository.GetTransactionsByUserAsync(query.UserId);

            foreach (var tr in transaction.OrderByDescending(x => x.TransactionDate))
            {
                var concept = userConcepts.First(x => x.id == tr.ConceptId);

                result.Add(new TransactionsAllByUserOutput()
                {
                    Description = concept.Description,
                    Ammount = tr.Ammount,
                    TransactionDate = tr.TransactionDate.ToString("yyyy-MM-dd")
                });
            }

            return result;
        }
    }
}
