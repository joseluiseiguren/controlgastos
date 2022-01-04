using Cotecna.Domain.Core;

namespace Domain.Commands
{
    public class UserLoginCommand : Command<string>
    {
        public string Email { get; init; }

        public string Password { get; init; }

        public string Language { get; set; }

        public UserLoginCommand(string email, string password, string language)
        {
            this.Email = email;
            this.Password = password;
            this.Language = language;
        }
    }
}
