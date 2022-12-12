import Statistic from '../statistics/statistic'
import PropTypes from 'prop-types';
import css from '../statistics/statistics.module.css';

function StatisticList({ items, title }) { 
    return (
        <section className={css.statistics}>
            {{ title } && <h2 className={css.title}>Upload stats</h2>}
            
            
            <ul className={css.stat_list}  >
                
            {items.map(item => (
               
                    <Statistic key={item.id}
                        label={item.label}
                        percentage={item.percentage}
                />
            ))}
                
            </ul>
         </section>
    );
}
  
StatisticList.propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
     id: PropTypes.string.isRequired,
   }))


}

export default StatisticList;