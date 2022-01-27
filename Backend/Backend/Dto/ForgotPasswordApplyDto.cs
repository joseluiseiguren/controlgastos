using Domain.Commands;

namespace Backend.Dto
{
    public class ForgotPasswordApplyDto
    {
        public string Password { get; set; }

        internal UserForgotPasswordApplyCommand ToCommand(string userId)
            => new(userId, Password);
    }
}
