using Domain.Models;
using Microsoft.Azure.Cosmos;
using Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repository.CosmosDB
{
    public class ConceptRepository : CosmosRepositoryBase, IConceptRepository
    {
        public ConceptRepository(string connectionString)
            : base(connectionString)
        { }

        public async Task<IEnumerable<Concept>> GetConceptsByUser(string userId)
        {
            var sqlQueryText = $"SELECT * FROM c WHERE c.UserId = '{userId}'";

            var queryDefinition = new QueryDefinition(sqlQueryText);

            var database = this._cosmosClient.GetDatabase(_databaseId);
            var container = database.GetContainer(_containerConceptos);
            var queryResultSetIterator = container.GetItemQueryIterator<dynamic>(queryDefinition);

            var result = new List<Concept>();
            while (queryResultSetIterator.HasMoreResults)
            {
                FeedResponse<dynamic> currentResultSet = await queryResultSetIterator.ReadNextAsync();
                foreach (dynamic conceptCosmos in currentResultSet)
                {
                    result.Add(CreateConceptObjetcFromDynamic(conceptCosmos));
                }
            }

            return result;
        }

        private Concept CreateConceptObjetcFromDynamic(dynamic conceptDB)
        {
            if (conceptDB == null)
            {
                return null;
            }

            return new Concept(id: conceptDB.id.ToString(),
                                description: conceptDB.Description.ToString(),
                                userId: conceptDB.UserId.ToString(),
                                credit: Convert.ToBoolean(conceptDB.Credit.ToString()),
                                entryDate: DateTime.Parse(conceptDB.EntryDate.ToString()));
        }
    }
}
