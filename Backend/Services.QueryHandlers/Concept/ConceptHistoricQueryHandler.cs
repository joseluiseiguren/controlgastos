﻿using Cotecna.Domain.Core;
using Domain.Queries;
using Domain.Queries.Outputs;
using Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Services.QueryHandlers.Concept
{
    public class ConceptHistoricQueryHandler : IAsyncQueryHandler<ConceptHistoricQuery, IReadOnlyList<ConceptPeriodOutput>>
    {
        private readonly IConceptRepository _conceptRepository;
        private readonly ITransactionRepository _transactionRepository;

        public ConceptHistoricQueryHandler(IConceptRepository conceptRepository, ITransactionRepository transactionRepository)
        {
            _conceptRepository = conceptRepository;
            _transactionRepository = transactionRepository;
        }

        public async Task<IReadOnlyList<ConceptPeriodOutput>> HandleAsync(ConceptHistoricQuery query)
        {
            var result = new List<ConceptPeriodOutput>();

            var dateFrom = DateOnly.MinValue;
            var dateTo = DateOnly.MaxValue;

            var userConcepts = await _conceptRepository.GetConceptsByUser(query.UserId);
            var totalAmmount = await _transactionRepository.GetTotalAmmountByFilterAsync(dateFrom, dateTo, userConcepts.Select(x => x.id));


            foreach (var userConcept in userConcepts.OrderBy(x => x.Description))
            {
                var total = totalAmmount.FirstOrDefault(x => x.ConceptId == userConcept.id);

                result.Add(new ConceptPeriodOutput() { ConceptId = userConcept.id, 
                                                       Description = userConcept.Description, 
                                                       Favorite = userConcept.Favorite,
                                                       Balance = Math.Round(total == null ? 0 : total.TotalAmount, 2) });
            }

            return result;
        }
    }
}
