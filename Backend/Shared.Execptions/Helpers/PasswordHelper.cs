using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared.Helpers
{
    public static class PasswordHelper
    {
        public static string HashPassword(string password)
        {
            return Convert.ToBase64String(System.Security.Cryptography.SHA1.Create().ComputeHash(Encoding.ASCII.GetBytes(password)));
        }
    }
}
