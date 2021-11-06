using Domain.Commands;
using System;

namespace Backend.Dto
{
    public class SignupDto
    {
        public string Password { get; set; }
        
        public string Email { get; set; }

        public string Nombre { get; set; }

        public string Fechanacimiento { get; set; }

        public string Moneda { get; set; }

        internal UserSignupCommand ToCommand()
            => new(Password, Email, Nombre, DateTime.ParseExact(Fechanacimiento, "yyyyMMdd", null), Moneda);

    }
}
