
import PropTypes from 'prop-types';
import css from '../Statistics/statistics.module.css';

function StatisticList({ stats, title }) { 
    return (
        <section className={css.statistics}>
            {{ title } && <h2 className={css.title}>Upload stats</h2>}
               <ul className={css.stat_list}>
                
            {stats.map(({id, label, percentage}) => (
        <li className={css.item} key={id}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
        </li>                         
                    
 ))}
                
            </ul>
         </section>
    );
}
  
StatisticList.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
   percentage: PropTypes.number.isRequired,
   }))
}

export default StatisticList;