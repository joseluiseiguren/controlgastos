using Domain.Commands;

namespace Backend.Dto
{
    public class LoginDto
    {
        public string Email { get; set; }

        public string Password { get; set; }

        public string Language { get; set; }

        internal UserLoginCommand ToCommand()
            => new(Email, Password, Language);
    }
}
