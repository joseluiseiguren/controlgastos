using Domain.Commands;
using System;

namespace Backend.Dto
{
    public class CreateTransactionDto
    {
        public string ConceptId { get; set; }

        public decimal Ammount { get; set; }

        public DateTime TransactionDate { get; set; }

        internal TransactionCreationCommand ToCommand(string userId)
            => new(userId, ConceptId, Ammount, TransactionDate);
    }
}
