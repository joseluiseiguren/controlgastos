using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared.Extensions
{
    public static class DateOnlyExtensions
    {
        public static DateTime ToDateTime(this DateOnly dateOnly)
        {
            return new DateTime(dateOnly.Year, dateOnly.Month, dateOnly.Day, 0, 0, 0);
        }
    }
}
