using Domain.Queries.Outputs;

namespace Domain.Queries
{
    public class TotalInOutAnnualQuery : QueryBase<TotalInOutOutput>
    {
        public int Year { get; init; }

        public TotalInOutAnnualQuery(string userId, int year)
            : base(userId)
        {
            this.Year = year;
        }
    }
}
