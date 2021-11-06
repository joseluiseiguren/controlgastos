using Cotecna.Domain.Core;
using System;

namespace Domain.Commands
{
    public class UserSignupCommand : Command
    {
        public string Password { get; init; }

        public string Email { get; init; }

        public string Name { get; init; }

        public DateTime BornDate { get; init; }

        public string Currency { get; init; }

        public UserSignupCommand(string password, string email, string name, DateTime bornDate, string currency)
        {
            this.Password = password;
            this.Email = email;
            this.Name = name;
            this.BornDate = bornDate;
            this.Currency = currency;
        }
    }
}
