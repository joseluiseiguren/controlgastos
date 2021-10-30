using System;

namespace ControlGastos.Models
{
    public class User : ModelBase
    {
        public int InvalidLoginAttempts { get; set; }

        public string Email { get; set; }

        public string Name { get; set; }

        public DateTime BornDate { get; set; }

        public int StatusId { get; set; }

        public string Currency { get; set; }

        public string Password { get; set; }

        public DateTime EntryDate { get; set; }
    }
}
