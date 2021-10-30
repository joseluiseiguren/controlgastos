using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ControlGastos.Models
{
    public class Concept : ModelBase
    {
        public string Description { get; set; }

        public string Credit { get; set; }

        public string UserId { get; set; }

        public DateTime EntryDate { get; set; }
    }
}
