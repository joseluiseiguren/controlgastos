using System;

namespace Backend.Dto
{
    public class ConceptDto
    {
        public string Id { get; set; }
        
        public string Descripcion { get; set; }

        public bool Credito { get; set; }

        public string User { get; set; }

        public DateTime Fechaalta { get; set; }
    }
}
