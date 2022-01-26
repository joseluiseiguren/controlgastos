using Domain.Commands;

namespace Backend.Dto
{
    public class ForgotPasswordRequestDto
    {
        public string Email { get; set; }

        public string Language { get; set; }

        internal UserForgotPasswordRequestCommand ToCommand()
            => new(Email, Language);
    }
}
