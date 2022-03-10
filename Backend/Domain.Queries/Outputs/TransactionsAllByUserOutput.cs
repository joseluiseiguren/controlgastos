namespace Domain.Queries.Outputs
{
    public class TransactionsAllByUserOutput
    {
        public string Description { get; set; }

        public decimal Ammount { get; set; }

        public string TransactionDate { get; set; } //YYYY-MM-DD
    }
}
