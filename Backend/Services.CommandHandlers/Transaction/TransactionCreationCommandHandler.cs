using Cotecna.Domain.Core;
using Domain.Commands;
using Repository.Interfaces;
using Shared.Execptions;
using System;
using System.Threading.Tasks;
using TransactionModel = Domain.Model.Transaction;

namespace Services.CommandHandlers.Transaction
{
    public class TransactionCreationCommandHandler : IAsyncCommandHandler<TransactionCreationCommand>
    {
        private readonly ITransactionRepository _transactionRepository;
        private readonly IConceptRepository _conceptRepository;

        public TransactionCreationCommandHandler(ITransactionRepository transactionRepository, IConceptRepository conceptRepository)
        {
            _transactionRepository = transactionRepository;
            _conceptRepository = conceptRepository;
        }

        public async Task HandleAsync(TransactionCreationCommand command)
        {
            var concept = await _conceptRepository.GetConceptByUserAndConceptId(command.UserId, command.ConceptId);
            if (concept == null)
            {
                throw new BusinessException("El conepto no pertenece al usuario");
            }

            var transactionDB = await _transactionRepository.GetTransactionByFilterAsync(command.TransactionDate, command.ConceptId);
            if (transactionDB == null)
            {
                var transaction = new TransactionModel(id: Guid.NewGuid().ToString(), 
                                                       transactionDate: command.TransactionDate, 
                                                       userId: command.UserId, 
                                                       conceptId: command.ConceptId, 
                                                       entryDate: DateTime.UtcNow, 
                                                       ammount: command.Ammount);

                await _transactionRepository.InsertTransactionAsync(transaction);
            }
            else
            {
                transactionDB.UpdateAmmount(command.Ammount);
                transactionDB.UpdateTransactionDate(command.TransactionDate);
                await _transactionRepository.UpdateTransactionAsync(transactionDB);
            }
        }
    }
}
