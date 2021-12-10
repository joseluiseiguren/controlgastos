using Domain.Commands;
using System;

namespace Backend.Dto
{
    public class CreateTransactionDto
    {
        public string ConceptId { get; set; }

        public decimal Ammount { get; set; }

        public string TransactionDate { get; set; }

        internal TransactionCreationCommand ToCommand(string userId)
            => new(userId, ConceptId, Ammount, DateOnly.ParseExact(TransactionDate, "yyyyMMdd", null));
    }
}
