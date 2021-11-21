using System;
using System.Collections.Generic;
using Shared.Execptions;

namespace Domain.Models
{
    public class Transaction : ModelBase
    {
        public DateTime TransactionDate { get; private set; }

        public string UserId { get; private set; }

        public string ConceptId { get; private set; }

        public DateTime EntryDate { get; private set; }

        public decimal Ammount { get; private set; }

        public IEnumerable<string> Tags { get; private set; }

        public Transaction(string id, 
                            DateTime transactionDate, 
                            string userId,
                            string conceptId,
                            DateTime entryDate,
                            decimal ammount)
        {
            UpdateId(id);
            UpdateAmmount(ammount);
            UpdateConceptId(conceptId);
            UpdateEntryDate(entryDate);
            UpdateTransactionDate(transactionDate);
            UpdateUserId(userId);
        }

        public void UpdateEntryDate(DateTime entryDate)
        {
            if (entryDate == DateTime.MinValue || entryDate == DateTime.MaxValue)
            {
                throw new BusinessException($"EntryDate is invalid: {entryDate}");
            }

            this.EntryDate = entryDate;
        }

        public void UpdateTransactionDate(DateTime transactionDate)
        {
            if (transactionDate == DateTime.MinValue || transactionDate == DateTime.MaxValue)
            {
                throw new BusinessException($"TransactionDate is invalid: {transactionDate}");
            }

            this.TransactionDate = transactionDate;
        }

        public void UpdateUserId(string userId)
        {
            if (string.IsNullOrEmpty(userId))
            {
                throw new BusinessException($"UserId is invalid: {userId}");
            }

            this.UserId = userId;
        }

        public void UpdateConceptId(string conceptId)
        {
            if (string.IsNullOrEmpty(conceptId))
            {
                throw new BusinessException($"ConceptId is invalid: {conceptId}");
            }

            this.ConceptId = conceptId;
        }

        public void UpdateAmmount(decimal ammount)
        {
            this.Ammount = ammount;
        }


    }
}
