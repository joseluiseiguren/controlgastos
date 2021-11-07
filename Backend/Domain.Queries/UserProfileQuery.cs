using Cotecna.Domain.Core;
using Domain.Queries.Outputs;

namespace Domain.Queries
{
    public class UserProfileQuery : Query<UserProfileOutput>
    {
        public string UserId { get; init; }

        public UserProfileQuery(string userId)
        {
            this.UserId = userId;
        }
    }
}
