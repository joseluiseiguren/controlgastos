using System;

namespace Domain.Queries.Outputs
{
    public class TransactionFirstLastOutput
    {
        public DateOnly FirstTransaction { get; set; }

        public DateOnly LastTransaction { get; set; }
    }
}
