using Domain.Queries.Outputs;

namespace Domain.Queries
{
    public class UserProfileQuery : QueryBase<UserProfileOutput>
    {
        public UserProfileQuery(string userId)
            : base(userId)
        {
        }
    }
}
