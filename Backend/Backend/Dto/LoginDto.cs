using Domain.Commands;

namespace Backend.Dto
{
    public class LoginDto
    {
        public string Email { get; set; }

        public string Password { get; set; }

        public string Language { get; set; }

        public DeviceInfoDto DeviceInfo { get; set; }

        internal UserLoginCommand ToCommand()
            => new(Email, Password, Language, new Domain.Model.DeviceInfo(DeviceInfo.DeviceId, DeviceInfo.Name, DeviceInfo.Model, DeviceInfo.Platform, DeviceInfo.OpSystem, DeviceInfo.OsVersion, DeviceInfo.Manufacturer));
    }
}
