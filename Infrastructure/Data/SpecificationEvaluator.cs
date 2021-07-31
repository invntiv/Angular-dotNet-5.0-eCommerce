using System.Linq;
using Core.Entities;
using Core.Specifications;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    ///
    public class SpecificationEvaluator<TEntity> where TEntity : BaseEntity
    {
        /// <summary>
        /// Returns an IQueryable of an entity filtered by the specification.
        /// </summary>
        /// <param name="inputQuery"></param>
        /// <param name="spec"></param>
        /// <returns></returns>
        public static IQueryable<TEntity> GetQuery(IQueryable<TEntity> inputQuery, ISpecification<TEntity> spec)
        {
            var query = inputQuery;

            if (spec.Criteria != null)
            {
                query = query.Where(spec.Criteria);
            }

            query = spec.Includes.Aggregate(query, (current, include) => current.Include(include));

            return query;
        }
    }
}