using Domain.Commands;

namespace Backend.Dto
{
    public class UiErrorDto
    {
        public string? UserId { get; set; }

        public string Message { get; set; }

        public DeviceInfoDto DeviceInfo { get; set; }

        internal UiErrorCreationCommand ToCommand()
            => new(UserId, Message, new Domain.Model.DeviceInfo(DeviceInfo.DeviceId, DeviceInfo.Name, DeviceInfo.Model, DeviceInfo.Platform, DeviceInfo.OpSystem, DeviceInfo.OsVersion, DeviceInfo.Manufacturer));
    }
}
