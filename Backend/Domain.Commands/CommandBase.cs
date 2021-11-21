using Cotecna.Domain.Core;

namespace Domain.Commands
{
    public abstract class CommandBase : Command
    {
        public string UserId { get; private set; }

        public CommandBase(string userId)
        {
            this.UserId = userId;
        }
    }
}
