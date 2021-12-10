using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace CosmosGettingStartedTutorial
{
    public class UserCosmos
    {
        public UserCosmos()
        {

        }

        public string id { get; set; }

        public int InvalidLoginAttempts { get; set; }

        public string Email { get; set; }

        public string Name { get; set; }

        public DateOnly BornDate { get; set; }

        public int StatusId { get; set; }

        public string Currency { get; set; }

        public string Password { get; set; }

        public DateTime EntryDate { get; set; }
    }

    
}
