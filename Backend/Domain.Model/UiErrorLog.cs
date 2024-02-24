using Shared.Execptions;
using System;

namespace Domain.Model
{
    public class UiErrorLog : ModelBase
    {
        public string UserId { get; private set; }

        public string Message { get; private set; }

        public DateTime EntryDate { get; private set; }

        public DeviceInfo DeviceInfo { get; private set; }

        public UiErrorLog(string id,
                          string userId,
                          string message,
                          DeviceInfo deviceInfo,
                          DateTime entryDate)
        {
            UpdateId(id);
            UpdateUserId(userId);
            UpdateMessage(message);
            UpdateDeviceInfo(deviceInfo);
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

        public void UpdateUserId(string userId)
        {
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

        public void UpdateDeviceInfo(DeviceInfo deviceInfo)
        {
            if (deviceInfo == null)
            {
                throw new BusinessException($"Error Device Info is invalid");
            }

            this.DeviceInfo = deviceInfo;
        }
    }
}
