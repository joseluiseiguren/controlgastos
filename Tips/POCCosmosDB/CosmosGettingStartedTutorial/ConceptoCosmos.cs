using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace CosmosGettingStartedTutorial
{
    public class ConceptoCosmos
    {
        public string id { get; set; }

        public string Description { get; set; }

        public string Credit { get; set; }

        public string UserId { get; set; }

        public DateTime EntryDate { get; set; }
    }
}
