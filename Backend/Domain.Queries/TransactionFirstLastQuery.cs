using Domain.Queries.Outputs;

namespace Domain.Queries
{
    public class TransactionFirstLastQuery : QueryBase<TransactionFirstLastOutput>
    {
        public TransactionFirstLastQuery(string userId)
            : base(userId)
        {}
    }
}
