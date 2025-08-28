import styles from './PageTitle.module.scss'

const PageTitle = props => {
  return(
    <div>
      <h2 className={styles.title}>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  )
};

export default PageTitle;