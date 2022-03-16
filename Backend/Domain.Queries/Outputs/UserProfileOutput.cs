using System;

namespace Domain.Queries.Outputs
{
    public class UserProfileOutput
    {
        public string Id { get; set; }

        public string Email { get; set; }

        public string Name { get; set; }

        public string BornDate { get; set; }

        public int StatusId { get; set; }

        public string Currency { get; set; }

        public string Language { get; set; }

        public DateTime EntryDate { get; set; }
    }
}
