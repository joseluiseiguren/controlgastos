using Cotecna.Domain.Core;
using Domain.Model;

namespace Domain.Commands
{
    public class UserLoginCommand : Command<string>
    {
        public string Email { get; init; }

        public string Password { get; init; }

        public string Language { get; set; }

        public DeviceInfo DeviceInfo { get; private set; }

        public UserLoginCommand(string email, string password, string language, DeviceInfo DeviceInfo)
        {
            this.Email = email;
            this.Password = password;
            this.Language = language;
            this.DeviceInfo = DeviceInfo;
        }
    }
}
