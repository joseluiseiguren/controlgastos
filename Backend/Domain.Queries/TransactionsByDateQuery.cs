using Domain.Queries.Outputs;
using System;
using System.Collections.Generic;

namespace Domain.Queries
{
    public class TransactionsByDateQuery : QueryBase<IReadOnlyList<TransactionByDateOutput>>
    {
        public DateTime Date { get; set; }

        public TransactionsByDateQuery(string userId, DateTime date)
            : base(userId)
        {
            this.Date = date;
        }
    }
}
