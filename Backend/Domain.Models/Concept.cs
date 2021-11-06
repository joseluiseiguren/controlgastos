using System;
using Domain.Models;

namespace Domain.Models
{
    public class Concept : ModelBase
    {
        public string Description { get; set; }

        public string Credit { get; set; }

        public string UserId { get; set; }

        public DateTime EntryDate { get; set; }
    }
}
