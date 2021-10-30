using System;
using System.Threading.Tasks;
using System.Configuration;
using System.Collections.Generic;
using System.Net;
using Microsoft.Azure.Cosmos;
using System.IO;
using Newtonsoft.Json;
using System.Linq;
using CosmosGettingStartedTutorial.Extensions;

namespace CosmosGettingStartedTutorial
{
    class Program
    {
        // The Azure Cosmos DB endpoint for running this sample.
        private static readonly string EndpointUri = ConfigurationManager.AppSettings["EndPointUri"];

        // The primary key for the Azure Cosmos account.
        private static readonly string PrimaryKey = ConfigurationManager.AppSettings["PrimaryKey"];

        // The Cosmos client instance
        private CosmosClient cosmosClient;

        // The name of the database and container we will create
        private string _databaseId = "controlgastos";
        private string _containerUsers = "users";
        private string _containerAudits = "audits";
        private string _containerConceptos = "concepts";
        private string _containerMovimientos = "transactions";

        // <Main>
        public static async Task Main(string[] args)
        {
            try
            {
                Console.WriteLine("Beginning operations...\n");
                Program p = new Program();
                await p.GetStartedDemoAsync();

            }
            catch (CosmosException de)
            {
                Exception baseException = de.GetBaseException();
                Console.WriteLine("{0} error occurred: {1}", de.StatusCode, de);
            }
            catch (Exception e)
            {
                Console.WriteLine("Error: {0}", e);
            }
            finally
            {
                Console.WriteLine("End of demo, press any key to exit.");
                Console.ReadKey();
            }
        }
        // </Main>

        // <GetStartedDemoAsync>
        /// <summary>
        /// Entry point to call methods that operate on Azure Cosmos DB resources in this sample
        /// </summary>
        public async Task GetStartedDemoAsync()
        {
            // Create a new instance of the Cosmos Client
            this.cosmosClient = new CosmosClient(EndpointUri, PrimaryKey, new CosmosClientOptions() { ApplicationName = "CosmosDBDotnetQuickstart" });

            //await this.DeleteDatabaseAndCleanupAsync();

            await this.CreateDatabaseAsync();
            await this.CreateContainerAsync();
            await this.AddUsersAsync();
            await this.AddConceptosAsync();
            await this.AddMovimientosAsync();

            //await this.ScaleContainerAsync();
            //await this.AddItemsToContainerAsync();
            //await this.QueryItemsAsync();
            //await this.ReplaceFamilyItemAsync();
            //await this.DeleteFamilyItemAsync();

        }
        // </GetStartedDemoAsync>

        // <CreateDatabaseAsync>
        /// <summary>
        /// Create the database if it does not exist
        /// </summary>
        private async Task CreateDatabaseAsync()
        {
            // Create a new database
            var database = this.cosmosClient.GetDatabase(_databaseId);
            database = await this.cosmosClient.CreateDatabaseIfNotExistsAsync(_databaseId);
            Console.WriteLine("Created Database: {0}\n", database.Id);
        }
        // </CreateDatabaseAsync>

        // <CreateContainerAsync>
        /// <summary>
        /// Create the container if it does not exist. 
        /// Specifiy "/LastName" as the partition key since we're storing family information, to ensure good distribution of requests and storage.
        /// </summary>
        /// <returns></returns>
        private async Task CreateContainerAsync()
        {
            // Create a new container
            var database = this.cosmosClient.GetDatabase(_databaseId);

            var containerCreated = await database.CreateContainerIfNotExistsAsync(_containerUsers, "/Email", 400);
            Console.WriteLine("Created Container: {0}\n", containerCreated.Container.Id);
            containerCreated = await database.CreateContainerIfNotExistsAsync(_containerAudits, "/UserId", 400);
            Console.WriteLine("Created Container: {0}\n", containerCreated.Container.Id);
            containerCreated = await database.CreateContainerIfNotExistsAsync(_containerConceptos, "/Description", 400);
            Console.WriteLine("Created Container: {0}\n", containerCreated.Container.Id);
            containerCreated = await database.CreateContainerIfNotExistsAsync(_containerMovimientos, "/UserId", 400);
            Console.WriteLine("Created Container: {0}\n", containerCreated.Container.Id);
        }
        // </CreateContainerAsync>

        // <ScaleContainerAsync>
        /// <summary>
        /// Scale the throughput provisioned on an existing Container.
        /// You can scale the throughput (RU/s) of your container up and down to meet the needs of the workload. Learn more: https://aka.ms/cosmos-request-units
        /// </summary>
        /// <returns></returns>
        private async Task ScaleContainerAsync()
        {
            /*
            // Read the current throughput
            int? throughput = await this.container.ReadThroughputAsync();
            if (throughput.HasValue)
            {
                Console.WriteLine("Current provisioned throughput : {0}\n", throughput.Value);
                int newThroughput = throughput.Value + 100;
                // Update throughput
                await this.container.ReplaceThroughputAsync(newThroughput);
                Console.WriteLine("New provisioned throughput : {0}\n", newThroughput);
            }
            */
            
        }
        // </ScaleContainerAsync>

        private async Task AddUsersAsync()
        {
            var usersToInsert = GetUsersFromInitialData();

            var database = this.cosmosClient.GetDatabase(_databaseId);
            var userContainer = database.GetContainer(this._containerUsers);

            foreach (var userToInsert in usersToInsert)
            {
                try
                {
                    // Read the item to see if it exists.  
                    ItemResponse<UserCosmos> userResponse = await userContainer.ReadItemAsync<UserCosmos>(userToInsert.Id, new PartitionKey(userToInsert.Email));
                    Console.WriteLine("Item in database with id: {0} already exists\n", userResponse.Resource.id);
                }
                catch (CosmosException ex) when (ex.StatusCode == HttpStatusCode.NotFound)
                {
                    // Create an item in the container representing the Andersen family. Note we provide the value of the partition key for this item, which is "Andersen"
                    ItemResponse<UserCosmos> userResponse = await userContainer.CreateItemAsync<UserCosmos>(userToInsert.ToUserCosmos(), new PartitionKey(userToInsert.Email));

                    // Note that after creating the item, we can access the body of the item with the Resource property off the ItemResponse. We can also access the RequestCharge property to see the amount of RUs consumed on this request.
                    Console.WriteLine("Created user in database with id: {0} Operation consumed {1} RUs.\n", userResponse.Resource.id, userResponse.RequestCharge);
                }                
            }
        }
        // </AddItemsToContainerAsync>

        private async Task AddConceptosAsync()
        {
            var conceptosToInsert = GetConceptosFromInitialData();

            var database = this.cosmosClient.GetDatabase(_databaseId);
            var conceptoContainer = database.GetContainer(this._containerConceptos);

            foreach (var conceptoToInsert in conceptosToInsert)
            {
                var conceptoCosmos = conceptoToInsert.ToConceptoCosmos();

                try
                {
                    // Read the item to see if it exists.                      
                    ItemResponse<ConceptoCosmos> conceptoResponse = await conceptoContainer.ReadItemAsync<ConceptoCosmos>(conceptoCosmos.id, new PartitionKey(conceptoCosmos.Description));
                    Console.WriteLine("Item in database with id: {0} already exists\n", conceptoResponse.Resource.id);
                }
                catch (CosmosException ex) when (ex.StatusCode == HttpStatusCode.NotFound)
                {
                    // Create an item in the container representing the Andersen family. Note we provide the value of the partition key for this item, which is "Andersen"
                    ItemResponse<ConceptoCosmos> conceptoResponse = await conceptoContainer.CreateItemAsync<ConceptoCosmos>(conceptoCosmos, new PartitionKey(conceptoCosmos.Description));

                    // Note that after creating the item, we can access the body of the item with the Resource property off the ItemResponse. We can also access the RequestCharge property to see the amount of RUs consumed on this request.
                    Console.WriteLine("Created concepto in database with id: {0} Operation consumed {1} RUs.\n", conceptoResponse.Resource.id, conceptoResponse.RequestCharge);
                }
                catch (Exception ex)
                {
                    throw;
                }

            }
        }

        private async Task AddMovimientosAsync()
        {
            var moviminetosToInsert = GetMovimientosFromInitialData();

            var database = this.cosmosClient.GetDatabase(_databaseId);
            var movimientoContainer = database.GetContainer(this._containerMovimientos);

            foreach (var movToInsert in moviminetosToInsert)
            {
                var movCosmos = movToInsert.ToMovimientoCosmos();

                try
                {
                    // Read the item to see if it exists.                      
                    ItemResponse<MovimientoCosmos> response = await movimientoContainer.ReadItemAsync<MovimientoCosmos>(movCosmos.id, new PartitionKey(movCosmos.UserId));
                    Console.WriteLine("Item in database with id: {0} already exists\n", response.Resource.id);
                }
                catch (CosmosException ex) when (ex.StatusCode == HttpStatusCode.NotFound)
                {
                    // Create an item in the container representing the Andersen family. Note we provide the value of the partition key for this item, which is "Andersen"
                    ItemResponse<MovimientoCosmos> response = await movimientoContainer.CreateItemAsync<MovimientoCosmos>(movCosmos, new PartitionKey(movCosmos.UserId));

                    // Note that after creating the item, we can access the body of the item with the Resource property off the ItemResponse. We can also access the RequestCharge property to see the amount of RUs consumed on this request.
                    Console.WriteLine("Created movimiento in database with id: {0} Operation consumed {1} RUs.\n", response.Resource.id, response.RequestCharge);
                }
                catch (Exception ex)
                {
                    throw;
                }
            }
        }

        private IEnumerable<UserMongo> GetUsersFromInitialData()
        {
            var result = new List<UserMongo>();
            using (StreamReader sw = new StreamReader("InitialData/users.txt"))
            {
                var line = string.Empty;
                while((line = sw.ReadLine()) != null)
                {
                    var user = JsonConvert.DeserializeObject<UserMongo>(line);
                    result.Add(user);
                }
            }

            return result;
        }

        private IEnumerable<ConceptoMongo> GetConceptosFromInitialData()
        {
            var result = new List<ConceptoMongo>();
            using (StreamReader sw = new StreamReader("InitialData/conceptos.txt"))
            {
                var line = string.Empty;
                while ((line = sw.ReadLine()) != null)
                {
                    var concepto = JsonConvert.DeserializeObject<ConceptoMongo>(line);
                    result.Add(concepto);
                }
            }

            return result;
        }

        private IEnumerable<MovimientoMongo> GetMovimientosFromInitialData()
        {
            var result = new List<MovimientoMongo>();
            using (StreamReader sw = new StreamReader("InitialData/movimientos.txt"))
            {
                var line = string.Empty;
                while ((line = sw.ReadLine()) != null)
                {
                    try
                    {
                        var mov = JsonConvert.DeserializeObject<MovimientoMongo>(line);
                        result.Add(mov);
                    }
                    catch(Exception ex)
                    {
                        throw;
                    }
                    
                    
                }
            }

            return result;
        }

        // <QueryItemsAsync>
        /// <summary>
        /// Run a query (using Azure Cosmos DB SQL syntax) against the container
        /// Including the partition key value of lastName in the WHERE filter results in a more efficient query
        /// </summary>
        private async Task QueryItemsAsync()
        {
            var sqlQueryText = "SELECT * FROM c WHERE c.email = 'flopyglorias@gmail.com'";

            Console.WriteLine("Running query: {0}\n", sqlQueryText);

            QueryDefinition queryDefinition = new QueryDefinition(sqlQueryText);

            var database = this.cosmosClient.GetDatabase(_databaseId);
            var container = database.GetContainer(_containerUsers);
            FeedIterator<UserMongo> queryResultSetIterator = container.GetItemQueryIterator<UserMongo>(queryDefinition);
            List<UserMongo> families = new List<UserMongo>();

            while (queryResultSetIterator.HasMoreResults)
            {
                FeedResponse<UserMongo> currentResultSet = await queryResultSetIterator.ReadNextAsync();
                foreach (UserMongo user in currentResultSet)
                {
                    families.Add(user);
                    Console.WriteLine("\tRead {0}\n", user);
                }
            }

            /*
            FeedIterator<Family> queryResultSetIterator = this.container.GetItemQueryIterator<Family>(queryDefinition);

            List<Family> families = new List<Family>();

            while (queryResultSetIterator.HasMoreResults)
            {
                FeedResponse<Family> currentResultSet = await queryResultSetIterator.ReadNextAsync();
                foreach (Family family in currentResultSet)
                {
                    families.Add(family);
                    Console.WriteLine("\tRead {0}\n", family);
                }
            }
            */
        }
        // </QueryItemsAsync>

        // <ReplaceFamilyItemAsync>
        /// <summary>
        /// Replace an item in the container
        /// </summary>
        private async Task ReplaceFamilyItemAsync()
        {
            /*
            ItemResponse<Family> wakefieldFamilyResponse = await this.container.ReadItemAsync<Family>("Wakefield.7", new PartitionKey("Wakefield"));
            var itemBody = wakefieldFamilyResponse.Resource;
            
            // update registration status from false to true
            itemBody.IsRegistered = true;
            // update grade of child
            itemBody.Children[0].Grade = 6;

            // replace the item with the updated content
            wakefieldFamilyResponse = await this.container.ReplaceItemAsync<Family>(itemBody, itemBody.Id, new PartitionKey(itemBody.LastName));
            Console.WriteLine("Updated Family [{0},{1}].\n \tBody is now: {2}\n", itemBody.LastName, itemBody.Id, wakefieldFamilyResponse.Resource);
            */
        }
        // </ReplaceFamilyItemAsync>

        // <DeleteFamilyItemAsync>
        /// <summary>
        /// Delete an item in the container
        /// </summary>
        private async Task DeleteFamilyItemAsync()
        {
            /*
            var partitionKeyValue = "Wakefield";
            var familyId = "Wakefield.7";

            // Delete an item. Note we must provide the partition key value and id of the item to delete
            ItemResponse<Family> wakefieldFamilyResponse = await this.container.DeleteItemAsync<Family>(familyId,new PartitionKey(partitionKeyValue));
            Console.WriteLine("Deleted Family [{0},{1}]\n", partitionKeyValue, familyId);
            */
        }
        // </DeleteFamilyItemAsync>

        // <DeleteDatabaseAndCleanupAsync>
        /// <summary>
        /// Delete the database and dispose of the Cosmos Client instance
        /// </summary>
        private async Task DeleteDatabaseAndCleanupAsync()
        {
            var database = this.cosmosClient.GetDatabase(_databaseId);
            
            DatabaseResponse databaseResourceResponse = await database.DeleteAsync();
            // Also valid: await this.cosmosClient.Databases["FamilyDatabase"].DeleteAsync();

            Console.WriteLine("Deleted Database: {0}\n", this._databaseId);

            //Dispose of CosmosClient
            this.cosmosClient.Dispose();
        }
        // </DeleteDatabaseAndCleanupAsync>
    }
}
