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
            var transactions = await _transactionRepository.GetTransactionsByFilterAsync(dateFrom: query.Date, 
                                                                                         dateTo: query.Date, 
                                                                                         conceptsId: userConcepts.Select(x => x.id));

            foreach (var userConcept in userConcepts.OrderBy(x => x.Description))
            {
                var transaction = transactions.FirstOrDefault(x => x.ConceptId == userConcept.id);
                
                result.Add(new TransactionByDateOutput() 
                { 
                    Description = userConcept.Description,
                    ConceptId = userConcept.id,
                    TransactionDate = query.Date.ToString("yyyy-MM-dd"),
                    Credit = userConcept.Credit,
                    Favorite = userConcept.Favorite,
                    Ammount = transaction == null ? 0m : transaction.Ammount
                });
            }
            
            return result;
        }
    }
}
