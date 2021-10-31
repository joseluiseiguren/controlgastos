using System;

namespace Shared.Execptions
{
    public class BusinessException : Exception
    {
        public BusinessException(string message) : base(message) { }
    }
}
