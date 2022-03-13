using Cotecna.Domain.Core;

namespace Domain.Commands
{
    public class UiErrorCreationCommand : Command
    {
        public string Message { get; private set; }

        public UiErrorCreationCommand(string message)
        {
            this.Message = message;
        }
    }
}
