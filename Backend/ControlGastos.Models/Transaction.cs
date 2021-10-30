using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ControlGastos.Models
{
    public class Transaction : ModelBase
    {
        public DateTime TransactionDate { get; set; }

        public string UserId { get; set; }

        public string ConceptId { get; set; }

        public DateTime EntryDate { get; set; }

        public double Ammount { get; set; }

        public IEnumerable<string> Tags { get; set; }
    }
}
