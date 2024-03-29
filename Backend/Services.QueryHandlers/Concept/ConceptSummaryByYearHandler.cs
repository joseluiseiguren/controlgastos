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
    public class ConceptSummaryByYearHandler : IAsyncQueryHandler<ConceptSummaryByYearQuery, IReadOnlyList<ConceptBalanceOutputByMonth>>
    {
        private readonly ITransactionRepository _transactionRepository;

        public ConceptSummaryByYearHandler(ITransactionRepository transactionRepository)
        {
            _transactionRepository = transactionRepository;
        }

        public async Task<IReadOnlyList<ConceptBalanceOutputByMonth>> HandleAsync(ConceptSummaryByYearQuery query)
        {
            var result = new List<ConceptBalanceOutputByMonth>();

            var dateFrom = DateOnly.ParseExact(query.Year + "0101", "yyyyMMdd", null);
            var dateTo = dateFrom.AddMonths(12).AddDays(-1);

            var transactions = await _transactionRepository.GetTransactionsByFilterAsync(dateFrom, dateTo, query.ConceptId);
            var transactionsGroupedByDate = transactions.GroupBy(x => SetGrouping(x.TransactionDate), x => x.Ammount).OrderBy(x => x.Key);

            foreach (var item in transactionsGroupedByDate)
            {
                result.Add(new ConceptBalanceOutputByMonth() { Month = item.Key.ToString(), Balance = item.Sum() });
            }

            return result;
        }

        private string SetGrouping(DateOnly transactionDate)
        {
            return $"{transactionDate.Month.ToString().PadLeft(2, '0')}{transactionDate.Year.ToString()}";
        }
    }
}
