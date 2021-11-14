using Shared.Execptions;
using System;

namespace Domain.Models
{
    public abstract class ModelBase
    {
        public string id { get; protected set; }

        protected void UpdateId(string id)
        {
            if (string.IsNullOrEmpty(id) || 
                Guid.Empty.ToString() == id)
            {
                throw new BusinessException($"Id is invalid: {id}");
            }

            this.id = id;
        }
    }
}
