using System;
using System.Collections.Generic;
using System.Text;

namespace CosmosGettingStartedTutorial.Extensions
{
    public static class Extensions
    {
        public static UserCosmos ToUserCosmos(this UserMongo userMongo)
        {
            return new UserCosmos()
            {
                Email = userMongo.Email,
                EntryDate = new DateTime(1970, 1, 1).AddMilliseconds(userMongo.FechaAlta).ToUniversalTime(),
                BornDate = new DateTime(1970, 1, 1).AddMilliseconds(userMongo.FechaNacimiento).Date,
                id = userMongo.Id,
                StatusId = userMongo.IdEstado,
                InvalidLoginAttempts = userMongo.IntentosFallidosLogin,
                Currency = userMongo.Moneda,
                Name = userMongo.Nombre,
                Password = userMongo.Password
            };
        }

        public static ConceptoCosmos ToConceptoCosmos(this ConceptoMongo conceptoMongo)
        {
            return new ConceptoCosmos()
            {
                EntryDate = new DateTime(1970, 1, 1).AddMilliseconds(conceptoMongo.FechaAlta).ToUniversalTime(),
                id = conceptoMongo.Id,
                Credit = conceptoMongo.Credito,
                Description = conceptoMongo.Descripcion,
                UserId = conceptoMongo.User
            };
        }

        public static MovimientoCosmos ToMovimientoCosmos(this MovimientoMongo movimientoMongo)
        {
            return new MovimientoCosmos()
            {
                EntryDate = new DateTime(1970, 1, 1).AddMilliseconds(movimientoMongo.FechaAlta).ToUniversalTime(),
                id = movimientoMongo.Id,
                UserId = movimientoMongo.User,
                ConceptId = movimientoMongo.Concepto,
                TransactionDate = new DateTime(1970, 1, 1).AddMilliseconds(movimientoMongo.Fecha).ToUniversalTime(),
                Ammount = movimientoMongo.Importe,
                Tags = movimientoMongo.MovimTags
            };
        }
    }
}
