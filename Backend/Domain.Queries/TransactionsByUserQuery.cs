using Domain.Queries.Outputs;
using System.Collections.Generic;

namespace Domain.Queries
{
    public class TransactionsByUserQuery : QueryBase<IReadOnlyList<TransactionsAllByUserOutput>>
    {
        public TransactionsByUserQuery(string userId)
            : base(userId)
        {
        }
    }
}
