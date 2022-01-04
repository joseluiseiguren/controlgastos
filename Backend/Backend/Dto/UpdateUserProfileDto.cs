using Domain.Commands;
using System;

namespace Backend.Dto
{
    public class UpdateUserProfileDto
    {
        public string Password { get; set; }

        public string Email { get; set; }

        public string Name { get; set; }

        public string BornDate { get; set; }

        public string Currency { get; set; }

        public string Language { get; set; }

        internal UserUpdateProfileCommand ToCommand(string userId)
            => new(userId, Password, Email, Name, DateOnly.ParseExact(BornDate, "yyyyMMdd", null), Currency, Language);
    }
}
