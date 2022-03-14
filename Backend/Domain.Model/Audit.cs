using Shared.Enums;
using Shared.Execptions;
using System;

namespace Domain.Model
{
    public class Audit : ModelBase
    {
        public string UserId { get; private set; }

        public DeviceInfo DeviceInfo { get; private set; }

        public int OperationType { get; private set; }

        public DateTime EntryDate { get; private set; }

        public Audit(string id,
                     string userId,
                     DeviceInfo deviceInfo,
                     int operationType,
                     DateTime entryDate)
        {
            UpdateDeviceInfo(deviceInfo);
            UpdateEntryDate(entryDate);
            UpdateId(id);
            UpdateOperationType(operationType);
            UpdateUserId(userId);
        }

        public void UpdateUserId(string userId)
        {
            if (string.IsNullOrEmpty(userId))
            {
                throw new BusinessException($"UserId is null");
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

        public void UpdateDeviceInfo(DeviceInfo deviceInfo)
        {
            if (deviceInfo == null)
            {
                throw new BusinessException($"Error Device Info is invalid");
            }

            this.DeviceInfo = deviceInfo;
        }

        public void UpdateOperationType(int operationType)
        {
            if (!Enum.IsDefined(typeof(OperationType), operationType))
            {
                throw new BusinessException($"Operation Type is invalid: {operationType}");
            } 
            
            this.OperationType = operationType;
        }
    }
}
