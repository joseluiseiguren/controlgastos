using Domain.Commands;

namespace Backend.Dto
{
    public class UiErrorDto
    {
        public string Message { get; set; }

        internal UiErrorCreationCommand ToCommand()
            => new(Message);
    }
}
