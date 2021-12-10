using Domain.Queries.Outputs;
using System;
using System.Collections.Generic;

namespace Domain.Queries
{
    public class TransactionsByDateQuery : QueryBase<IReadOnlyList<TransactionByDateOutput>>
    {
        public DateOnly Date { get; set; }

        public TransactionsByDateQuery(string userId, DateOnly date)
            : base(userId)
        {
            this.Date = date;
        }
    }
}
