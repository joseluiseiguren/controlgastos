using Domain.Queries.Outputs;
using System.Collections.Generic;

namespace Domain.Queries
{
    public class TotalInOutAnnualMonthQuery : QueryBase<IEnumerable<TotalInOutMonthOutput>>
    {
        public int Year { get; init; }

        public TotalInOutAnnualMonthQuery(string userId, int year)
            : base(userId)
        {
            this.Year = year;
        }
    }
}
