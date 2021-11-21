using Cotecna.Domain.Core;
using System;

namespace Domain.Commands
{
    public class TransactionCreationCommand : CommandBase
    {
        public string ConceptId { get; set; }

        public decimal Ammount { get; set; }

        public DateTime TransactionDate { get; set; }

        public TransactionCreationCommand(string userId, string conceptId, decimal ammount, DateTime transactionDate)
            : base(userId)
        {
            this.ConceptId = conceptId;
            this.Ammount = ammount;
            this.TransactionDate = transactionDate;
        }
    }
}
