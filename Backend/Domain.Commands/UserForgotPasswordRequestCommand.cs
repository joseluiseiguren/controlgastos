using Cotecna.Domain.Core;

namespace Domain.Commands
{
    public class UserForgotPasswordRequestCommand : Command
    {
        public string Email { get; init; }

        public string Language { get; set; }

        public UserForgotPasswordRequestCommand(string email, string language)
        {
            this.Email = email;
            this.Language = language;
        }
    }
}
