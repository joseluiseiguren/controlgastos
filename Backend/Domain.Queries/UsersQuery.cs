using Cotecna.Domain.Core;
using Domain.Queries.Outputs;
using System.Collections.Generic;

namespace Domain.Queries
{
    public class UsersQuery : Query<IReadOnlyList<UserProfileOutput>>
    {
        public UsersQuery()
        {
        }
    }
}
