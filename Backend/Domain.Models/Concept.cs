using Shared.Execptions;
using System;

namespace Domain.Models
{
    public class Concept : ModelBase
    {
        public string Description { get; private set; }

        public bool Credit { get; private set; }

        public string UserId { get; private set; }

        public DateTime EntryDate { get; private set; }

        public Concept(string id, 
                       string description, 
                       bool credit, 
                       string userId, 
                       DateTime entryDate)
        {
            UpdateId(id);
            UpdateDescription(description);
            UpdateCredit(credit);
            UpdateUserId(userId);
            UpdateEntryDate(entryDate);
        }

        public void UpdateDescription(string description)
        {
            if (string.IsNullOrEmpty(description))
            {
                throw new BusinessException($"Description is invalid: {description}");
            }

            this.Description = description;
        }

        public void UpdateCredit(bool credit)
        {
            this.Credit = credit;
        }

        public void UpdateUserId(string userId)
        {
            if (string.IsNullOrEmpty(userId))
            {
                throw new BusinessException($"UserId is invalid: {userId}");
            }

            this.UserId = userId;
        }

        public void UpdateEntryDate(DateTime entryDate)
        {
            if (entryDate == DateTime.MinValue || entryDate == DateTime.MaxValue)
            {
                throw new BusinessException($"EntryDate is invalid: {entryDate}");
            }

            this.EntryDate = entryDate;
        }
    }
}
