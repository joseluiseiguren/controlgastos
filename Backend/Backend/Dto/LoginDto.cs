using Domain.Commands;

namespace Backend.Dto
{
    public class LoginDto
    {
        public string Email { get; set; }

        public string Password { get; set; }

        internal UserLoginCommand ToCommand()
            => new(Email, Password);
    }
}
