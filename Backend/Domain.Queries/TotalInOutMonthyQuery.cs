using Domain.Queries.Outputs;

namespace Domain.Queries
{
    public class TotalInOutMonthyQuery : QueryBase<TotalInOutOutput>
    {
        public int Month { get; init; }

        public int Year { get; init; }

        public TotalInOutMonthyQuery(string userId, int month, int year)
            : base(userId)
        {
            this.Month = month;
            this.Year = year;
        }
    }
}
