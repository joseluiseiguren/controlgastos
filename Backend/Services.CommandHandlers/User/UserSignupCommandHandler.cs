using Cotecna.Domain.Core;
using Domain.Commands;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.CommandHandlers.User
{
    public class UserSignupCommandHandler : IAsyncCommandHandler<UserSignupCommand>
    {
        public UserSignupCommandHandler()
        {

        }

        public Task HandleAsync(UserSignupCommand command)
        {
            throw new NotImplementedException();
        }
    }
}
