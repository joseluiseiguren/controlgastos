using Domain.Commands;
using System;

namespace Backend.Dto
{
    public class SignupDto
    {
        public string Password { get; set; }
        
        public string Email { get; set; }

        public string Name { get; set; }

        public string BornDate { get; set; }

        public string Currency { get; set; }

        public string Language { get; set; }

        internal UserSignupCommand ToCommand()
            => new(Password, Email, Name, DateOnly.ParseExact(BornDate, "yyyyMMdd", null), Currency, Language);

    }
}
