using System;

namespace Domain.Commands
{
    public class UserUpdateProfileCommand : CommandBase
    {
        public string Password { get; init; }

        public string Email { get; init; }

        public string Name { get; init; }

        public DateTime BornDate { get; init; }

        public string Currency { get; init; }

        public UserUpdateProfileCommand(string userId, string password, string email, string name, DateTime bornDate, string currency)
            : base(userId)
        {
            this.Password = password;
            this.Email = email;
            this.Name = name;
            this.BornDate = bornDate;
            this.Currency = currency;
        }
    }
}
