using Shared.Execptions;
using System;

namespace Domain.Model
{
    public class UiErrorLog : ModelBase
    {
        public string Message { get; private set; }

        public DateTime EntryDate { get; private set; }

        public UiErrorLog(string id,
                          string message,
                          DateTime entryDate)
        {
            UpdateId(id);
            UpdateMessage(message);
            UpdateEntryDate(entryDate);
        }

        public void UpdateMessage(string message)
        {
            if (string.IsNullOrEmpty(message))
            {
                throw new BusinessException($"Error Message is invalid");
            }

            this.Message = message;
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
