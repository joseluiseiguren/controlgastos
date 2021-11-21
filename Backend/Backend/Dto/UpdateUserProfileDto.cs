using Domain.Commands;
using System;

namespace Backend.Dto
{
    public class UpdateUserProfileDto
    {
        public string Password { get; set; }

        public string Email { get; set; }

        public string Nombre { get; set; }

        public string Fechanacimiento { get; set; }

        public string Moneda { get; set; }

        internal UserUpdateProfileCommand ToCommand(string userId)
            => new(userId, Password, Email, Nombre, DateTime.ParseExact(Fechanacimiento, "yyyyMMdd", null), Moneda);
    }
}
