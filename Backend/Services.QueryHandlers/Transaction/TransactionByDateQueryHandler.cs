using Cotecna.Domain.Core;
using Domain.Queries;
using Domain.Queries.Outputs;
using Repository.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Services.QueryHandlers.Transaction
{
    public class TransactionByDateQueryHandler : IAsyncQueryHandler<TransactionsByDateQuery, IReadOnlyList<TransactionByDateOutput>>
    {
        private readonly ITransactionRepository _transactionRepository;
        private readonly IConceptRepository _conceptRepository;

        public TransactionByDateQueryHandler(ITransactionRepository transactionRepository, IConceptRepository conceptRepository)
        {
            _transactionRepository = transactionRepository;
            _conceptRepository = conceptRepository;
        }

        public async Task<IReadOnlyList<TransactionByDateOutput>> HandleAsync(TransactionsByDateQuery query)
        {
            var result = new List<TransactionByDateOutput>();

            var userConcepts = await _conceptRepository.GetConceptsByUser(query.UserId);
            foreach (var userConcept in userConcepts.OrderBy(x => x.Description))
            {
                var dateFrom = query.Date;
                var dateTo = dateFrom.AddDays(1).AddSeconds(-1);
                var transaction = await _transactionRepository.GetTransactionsByFilterAsync(dateFrom, dateTo, userConcept.id);
                
                result.Add(new TransactionByDateOutput() 
                { 
                    Description = userConcept.Description,
                    ConceptId = userConcept.id,
                    TransactionDate = query.Date,
                    Credit = userConcept.Credit,
                    Ammount = transaction.Count == 0 ? 0m : transaction.First().Ammount
                });
            }
            
            return result;
        }
    }
}
