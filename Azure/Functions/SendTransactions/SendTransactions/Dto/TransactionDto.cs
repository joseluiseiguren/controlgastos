namespace SendTransactions.Dto
{
    internal class TransactionDto
    {
        public string Description { get; set; }

        public decimal Ammount { get; set; }

        public string TransactionDate { get; set; } //YYYY-MM-DD
    }
}
