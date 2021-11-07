using Domain.Models;
using Microsoft.Azure.Cosmos;
using Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.CosmosDB
{
    public class TransactionRepository : CosmosRepositoryBase, ITransactionRepository
    {
        public TransactionRepository(string connectionString)
            : base(connectionString)
        { }

        public async Task<decimal> GetTotalAmmountByFilterAsync(DateTime dateFrom, DateTime dateTo, string conceptId)
        {
            var sqlQueryText = $"SELECT SUM(c.Ammount) as Total FROM c WHERE c.ConceptId = '{conceptId}' AND c.TransactionDate >= '{dateFrom.ToString("o")}' AND c.TransactionDate <= '{dateTo.ToString("o")}'";

            var queryDefinition = new QueryDefinition(sqlQueryText);

            var database = this._cosmosClient.GetDatabase(_databaseId);
            var container = database.GetContainer(_containerTransactions);
            var queryResultSetIterator = container.GetItemQueryIterator<dynamic>(queryDefinition);

            var currentResultSet = await queryResultSetIterator.ReadNextAsync();
            var totalAmmount = currentResultSet.First();

            return Convert.ToDecimal(totalAmmount.Total.ToString());
        }

        private Transaction CreateTransactionObjetcFromDynamic(dynamic transactionDB)
        {
            if (transactionDB == null)
            {
                return null;
            }

            return new Transaction(id: Guid.NewGuid().ToString(),
                                    transactionDate: DateTime.Parse(transactionDB.TransactionDate.ToString()),
                                    userId: transactionDB.UserId.ToString(),
                                    conceptId: transactionDB.ConceptId.ToString(),
                                    entryDate: DateTime.Parse(transactionDB.EntryDate.ToString()),
                                    ammount: Convert.ToDecimal(transactionDB.Ammount.ToString()));
        }
    }
}
