using Cotecna.Domain.Core;

namespace Domain.Commands
{
    public class UserLoginCommand : Command<string>
    {
        public string Email { get; init; }

        public string Password { get; init; }

        public UserLoginCommand(string email, string password)
        {
            this.Email = email;
            this.Password = password;
        }
    }
}
