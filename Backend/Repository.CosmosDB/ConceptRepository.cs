﻿using Domain.Model;
using Microsoft.Azure.Cosmos;
using Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Repository.CosmosDB
{
    public class ConceptRepository : CosmosRepositoryBase, IConceptRepository
    {
        public ConceptRepository(string connectionString, string databaseId)
            : base(connectionString, databaseId)
        { }

        public async Task<IReadOnlyList<Concept>> GetConceptsByUser(string userId, bool? creditType = null)
        {
            var sqlQueryText = $"SELECT * FROM c WHERE c.UserId = '{userId}'";
            if (creditType.HasValue)
            {
                sqlQueryText += $" AND c.Credit = {creditType.Value.ToString()}";
            }

            var queryDefinition = new QueryDefinition(sqlQueryText);

            var database = this._cosmosClient.GetDatabase(this.DatabaseId);
            var container = database.GetContainer(_containerConcepts);
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

        public async Task<Concept> GetConceptByUserAndDescription(string userId, string description)
        {
            var sqlQueryText = $"SELECT * FROM c WHERE c.UserId = '{userId}' AND c.Description = '{description}'";

            var queryDefinition = new QueryDefinition(sqlQueryText);

            var database = this._cosmosClient.GetDatabase(this.DatabaseId);
            var container = database.GetContainer(_containerConcepts);
            var queryResultSetIterator = container.GetItemQueryIterator<dynamic>(queryDefinition);

            var currentResultSet = await queryResultSetIterator.ReadNextAsync();
            var conceptFound = currentResultSet.FirstOrDefault();

            return CreateConceptObjetcFromDynamic(conceptFound);
        }

        public async Task<Concept> GetConceptByUserAndConceptId(string userId, string conceptId)
        {
            var sqlQueryText = $"SELECT * FROM c WHERE c.UserId = '{userId}' AND c.id = '{conceptId}'";

            var queryDefinition = new QueryDefinition(sqlQueryText);

            var database = this._cosmosClient.GetDatabase(this.DatabaseId);
            var container = database.GetContainer(_containerConcepts);
            var queryResultSetIterator = container.GetItemQueryIterator<dynamic>(queryDefinition);

            var currentResultSet = await queryResultSetIterator.ReadNextAsync();
            var conceptFound = currentResultSet.FirstOrDefault();

            return CreateConceptObjetcFromDynamic(conceptFound);
        }

        public async Task InsertConceptAsync(Concept concept)
        {
            var database = this._cosmosClient.GetDatabase(this.DatabaseId);
            var container = database.GetContainer(_containerConcepts);

            await container.CreateItemAsync<Concept>(concept);
        }

        public async Task UpdateConceptAsync(Concept concept)
        {
            var database = this._cosmosClient.GetDatabase(this.DatabaseId);
            var container = database.GetContainer(_containerConcepts);

            await container.ReplaceItemAsync<Concept>(concept, concept.id);
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
                                favorite: conceptDB.Favorite == null ? false : Convert.ToBoolean(conceptDB.Favorite),
                                credit: Convert.ToBoolean(conceptDB.Credit.ToString()),
                                entryDate: DateTime.Parse(conceptDB.EntryDate.ToString()));
        }
    }
}
