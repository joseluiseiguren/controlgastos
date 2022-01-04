using Cotecna.Domain.Core;
using System;

namespace Domain.Commands
{
    public class UserSignupCommand : Command
    {
        public string Password { get; init; }

        public string Email { get; init; }

        public string Name { get; init; }

        public DateOnly BornDate { get; init; }

        public string Currency { get; init; }

        public string Language { get; set; }

        public UserSignupCommand(string password, string email, string name, DateOnly bornDate, string currency, string language)
        {
            this.Password = password;
            this.Email = email;
            this.Name = name;
            this.BornDate = bornDate;
            this.Currency = currency;
            this.Language = language;
        }
    }
}
