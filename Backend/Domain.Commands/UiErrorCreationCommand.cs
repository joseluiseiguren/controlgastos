using Cotecna.Domain.Core;
using Domain.Model;

namespace Domain.Commands
{
    public class UiErrorCreationCommand : Command
    {
        public string UserId { get; private set; }

        public string Message { get; private set; }

        public DeviceInfo DeviceInfo { get; private set; }

        public UiErrorCreationCommand(string userId, string message, DeviceInfo deviceInfo)
        {
            this.UserId = userId;
            this.Message = message;
            this.DeviceInfo = deviceInfo;
        }
    }
}
