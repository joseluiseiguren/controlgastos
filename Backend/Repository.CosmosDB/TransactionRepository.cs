using Domain.Model;
using Microsoft.Azure.Cosmos;
using Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Repository.CosmosDB
{
    public class TransactionRepository : CosmosRepositoryBase, ITransactionRepository
    {
        public TransactionRepository(string connectionString, string databaseId)
            : base(connectionString, databaseId)
        { }

        public async Task<decimal> GetTotalAmmountByFilterAsync(DateOnly dateFrom, DateOnly dateTo, string conceptId)
        {
            var sqlQueryText = $"SELECT SUM(c.Ammount) as Total FROM c WHERE c.ConceptId = '{conceptId}' " +
                $"AND c.TransactionDate.Year >= {dateFrom.Year} " +
                $"AND c.TransactionDate.Month >= {dateFrom.Month} " +
                $"AND c.TransactionDate.Day >= {dateFrom.Day} " +
                $"AND c.TransactionDate.Year <= {dateTo.Year} " +
                $"AND c.TransactionDate.Month <= {dateTo.Month} " +
                $"AND c.TransactionDate.Day <= {dateTo.Day} ";

            var queryDefinition = new QueryDefinition(sqlQueryText);

            var database = this._cosmosClient.GetDatabase(this.DatabaseId);
            var container = database.GetContainer(_containerTransactions);
            var queryResultSetIterator = container.GetItemQueryIterator<dynamic>(queryDefinition);

            var currentResultSet = await queryResultSetIterator.ReadNextAsync();
            var totalAmmount = currentResultSet.First();

            return Convert.ToDecimal(totalAmmount.Total.ToString());
        }

        public async Task<decimal> GetTotalAmmountByUserAsync(DateOnly dateFrom, DateOnly dateTo, string userId, bool? income)
        {
            var sqlQueryText = $"SELECT SUM(c.Ammount) as Total FROM c WHERE c.UserId = '{userId}' " +
                $"AND c.TransactionDate.Year >= {dateFrom.Year} " +
                $"AND c.TransactionDate.Month >= {dateFrom.Month} " +
                $"AND c.TransactionDate.Day >= {dateFrom.Day} " +
                $"AND c.TransactionDate.Year <= {dateTo.Year} " +
                $"AND c.TransactionDate.Month <= {dateTo.Month} " +
                $"AND c.TransactionDate.Day <= {dateTo.Day} ";

            if (income.HasValue)
            {
                if (income.Value)
                {
                    sqlQueryText += " AND c.Ammount > 0";
                }
                else
                {
                    sqlQueryText += " AND c.Ammount < 0";
                }
            }

            var queryDefinition = new QueryDefinition(sqlQueryText);

            var database = this._cosmosClient.GetDatabase(this.DatabaseId);
            var container = database.GetContainer(_containerTransactions);
            var queryResultSetIterator = container.GetItemQueryIterator<dynamic>(queryDefinition);

            var currentResultSet = await queryResultSetIterator.ReadNextAsync();
            var totalAmmount = currentResultSet.First();

            return Convert.ToDecimal(totalAmmount.Total.ToString());
        }

        public async Task<IReadOnlyList<Transaction>> GetTransactionsByFilterAsync(DateOnly dateFrom, DateOnly dateTo, string conceptId)
        {
            var sqlQueryText = $"SELECT * FROM c WHERE c.ConceptId = '{conceptId}' " +
                $"AND c.TransactionDate.Year >= {dateFrom.Year} " +
                $"AND c.TransactionDate.Month >= {dateFrom.Month} " +
                $"AND c.TransactionDate.Day >= {dateFrom.Day} " +
                $"AND c.TransactionDate.Year <= {dateTo.Year} " +
                $"AND c.TransactionDate.Month <= {dateTo.Month} " +
                $"AND c.TransactionDate.Day <= {dateTo.Day} ";

            var queryDefinition = new QueryDefinition(sqlQueryText);

            var database = this._cosmosClient.GetDatabase(this.DatabaseId);
            var container = database.GetContainer(_containerTransactions);
            var queryResultSetIterator = container.GetItemQueryIterator<dynamic>(queryDefinition);

            var result = new List<Transaction>();
            while (queryResultSetIterator.HasMoreResults)
            {
                FeedResponse<dynamic> currentResultSet = await queryResultSetIterator.ReadNextAsync();
                foreach (dynamic conceptCosmos in currentResultSet)
                {
                    result.Add(CreateTransactionObjetcFromDynamic(conceptCosmos));
                }
            }

            return result;
        }

        public async Task<IReadOnlyList<Transaction>> GetTransactionsByUserAsync(string userId)
        {
            var sqlQueryText = $"SELECT * FROM c WHERE c.UserId = '{userId}'";

            var queryDefinition = new QueryDefinition(sqlQueryText);

            var database = this._cosmosClient.GetDatabase(this.DatabaseId);
            var container = database.GetContainer(_containerTransactions);
            var queryResultSetIterator = container.GetItemQueryIterator<dynamic>(queryDefinition);

            var result = new List<Transaction>();
            while (queryResultSetIterator.HasMoreResults)
            {
                FeedResponse<dynamic> currentResultSet = await queryResultSetIterator.ReadNextAsync();
                foreach (dynamic conceptCosmos in currentResultSet)
                {
                    result.Add(CreateTransactionObjetcFromDynamic(conceptCosmos));
                }
            }

            return result;
        }

        public async Task<Transaction> GetTransactionByFilterAsync(DateOnly transactionDate, string conceptId)
        {
            var sqlQueryText = $"SELECT * FROM c WHERE c.ConceptId = '{conceptId}' " +
                $"AND c.TransactionDate.Year = {transactionDate.Year} " +
                $"AND c.TransactionDate.Month = {transactionDate.Month} " +
                $"AND c.TransactionDate.Day = {transactionDate.Day} ";

            var queryDefinition = new QueryDefinition(sqlQueryText);

            var database = this._cosmosClient.GetDatabase(this.DatabaseId);
            var container = database.GetContainer(_containerTransactions);
            var queryResultSetIterator = container.GetItemQueryIterator<dynamic>(queryDefinition);

            var currentResultSet = await queryResultSetIterator.ReadNextAsync();
            var transactionFound = currentResultSet.FirstOrDefault();

            return CreateTransactionObjetcFromDynamic(transactionFound);
        }

        public async Task<Transaction> GetFirstTransactionAsync(string userId)
        {
            var sqlQueryText = $"SELECT TOP 1 * FROM c WHERE c.UserId = '{userId}' order by c.TransactionDate.Year, c.TransactionDate.Month, c.TransactionDate.Day ";

            var queryDefinition = new QueryDefinition(sqlQueryText);

            var database = this._cosmosClient.GetDatabase(this.DatabaseId);
            var container = database.GetContainer(_containerTransactions);
            var queryResultSetIterator = container.GetItemQueryIterator<dynamic>(queryDefinition);

            var currentResultSet = await queryResultSetIterator.ReadNextAsync();
            var transactionFound = currentResultSet.FirstOrDefault();

            return CreateTransactionObjetcFromDynamic(transactionFound);
        }

        public async Task<Transaction> GetLastTransactionAsync(string userId)
        {
            var sqlQueryText = $"SELECT TOP 1 * FROM c WHERE c.UserId = '{userId}' order by c.TransactionDate.Year desc, c.TransactionDate.Month desc, c.TransactionDate.Day desc";

            var queryDefinition = new QueryDefinition(sqlQueryText);

            var database = this._cosmosClient.GetDatabase(this.DatabaseId);
            var container = database.GetContainer(_containerTransactions);
            var queryResultSetIterator = container.GetItemQueryIterator<dynamic>(queryDefinition);

            var currentResultSet = await queryResultSetIterator.ReadNextAsync();
            var transactionFound = currentResultSet.FirstOrDefault();

            return CreateTransactionObjetcFromDynamic(transactionFound);
        }

        private Transaction CreateTransactionObjetcFromDynamic(dynamic transactionDB)
        {
            if (transactionDB == null)
            {
                return null;
            }

            return new Transaction(id: transactionDB.id.ToString(),
                                   transactionDate: new DateOnly(Convert.ToInt32(transactionDB.TransactionDate.Year), Convert.ToInt32(transactionDB.TransactionDate.Month), Convert.ToInt32(transactionDB.TransactionDate.Day)),
                                   userId: transactionDB.UserId.ToString(),
                                   conceptId: transactionDB.ConceptId.ToString(),
                                   entryDate: DateTime.Parse(transactionDB.EntryDate.ToString()),
                                   ammount: Convert.ToDecimal(transactionDB.Ammount.ToString()));
        }

        public async Task InsertTransactionAsync(Transaction transaction)
        {
            var database = this._cosmosClient.GetDatabase(this.DatabaseId);
            var container = database.GetContainer(_containerTransactions);

            await container.CreateItemAsync<Transaction>(transaction);
        }

        public async Task UpdateTransactionAsync(Transaction transaction)
        {
            var database = this._cosmosClient.GetDatabase(this.DatabaseId);
            var container = database.GetContainer(_containerTransactions);

            await container.ReplaceItemAsync<Transaction>(transaction, transaction.id);
        }
    }
}
