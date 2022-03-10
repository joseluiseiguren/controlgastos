namespace Domain.Commands
{
    public class TransactionDownloadCommand : CommandBase
    {
        public TransactionDownloadCommand(string userId)
            : base(userId)
        {}
    }
}
