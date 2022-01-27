namespace Domain.Commands
{
    public class UserForgotPasswordApplyCommand : CommandBase
    {
        public string Password { get; init; }

        public UserForgotPasswordApplyCommand(string userId, string password)
            : base(userId)
        {
            this.Password = password;

        }
    }
}
