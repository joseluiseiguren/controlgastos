namespace Queue.Interfaces
{
    public interface IQueueDownloadTransactionsEvents
    {
        Task DownloadTransactionsEvent(string userId);
    }
}
