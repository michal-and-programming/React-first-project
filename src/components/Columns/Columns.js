import styles from './Columns.module.scss';

const Columns = props => {
  return(
      <article className={styles.column}>
        <h2 className={styles.title}>
          <span className={styles.icon + ' fa fa-' + props.icon}></span>
          {props.text}
        </h2>
      </article>
  )
}

export default Columns;
