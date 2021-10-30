using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace CosmosGettingStartedTutorial
{
    public class ConceptoMongo
    {
        public string Id { get; set; }

        public string Descripcion { get; set; }

        public string Credito { get; set; }

        public string User { get; set; }

        public long FechaAlta { get; set; }
    }
}
