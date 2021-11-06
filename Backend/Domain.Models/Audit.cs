using Domain.Models;
using System;

namespace Domain.Models
{
    public class Audit : ModelBase
    {
        public string UserId { get; set; }

        public string Observation { get; set; }

        public string AditionalInfo { get; set; }

        public int OperationType { get; set; }

        public string Location { get; set; }

        public DateTime Date { get; set; }
    }
}
