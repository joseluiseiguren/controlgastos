using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace CosmosGettingStartedTutorial
{
    public class UserMongo
    {
        public string Id { get; set; }

        public int IntentosFallidosLogin { get; set; }

        public string Email { get; set; }

        public string Nombre { get; set; }

        public long FechaNacimiento { get; set; }

        public int IdEstado { get; set; }

        public string Moneda { get; set; }

        public string Password { get; set; }

        public long FechaAlta { get; set; }
    }
}
