using Domain.Queries.Outputs;

namespace Domain.Queries
{
    public class TotalInOutHistoricQuery : QueryBase<TotalInOutOutput>
    {
        public TotalInOutHistoricQuery(string userId)
            : base(userId)
        {}
    }
}