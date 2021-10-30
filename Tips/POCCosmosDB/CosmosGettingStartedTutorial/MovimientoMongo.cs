using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace CosmosGettingStartedTutorial
{
    public class MovimientoMongo
    {
        public string Id { get; set; }

        public long Fecha { get; set; }

        public string User { get; set; }

        public string Concepto { get; set; }

        public long FechaAlta { get; set; }

        public double Importe { get; set; }

        public IEnumerable<string> MovimTags { get; set; }
    }
}
