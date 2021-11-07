using System;

namespace Domain.Queries.Outputs
{
    public class UserProfileOutput
    {
        public string Email { get; set; }

        public string Name { get; set; }

        public DateTime BornDate { get; set; }

        public int StatusId { get; set; }

        public string Currency { get; set; }

        public DateTime EntryDate { get; set; }
    }
}
