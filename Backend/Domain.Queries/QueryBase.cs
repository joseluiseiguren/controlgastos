using Cotecna.Domain.Core;

namespace Domain.Queries
{
    public abstract class QueryBase<T> : Query<T>
    {
        public string UserId { get; private set; }

        public QueryBase(string userId)
        {
            this.UserId = userId;
        }
    }
}
