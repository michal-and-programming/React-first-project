import styles from './List.module.scss';
import Columns from '../Columns/Columns';

const List = () => {
  return(
    <div className={styles.list}>
      <header className={styles.header}>
        <h1 className={styles.title}>Things to do<span>soon</span></h1>
      </header>
      <p className={styles.description}>Interesting things I want to check out</p>
      <div className={styles.columns}>
        <Columns text="Books" icon="book" />
        <Columns text="Movies" icon="film" />
        <Columns text="Games" icon="gamepad" />
      </div>
    </div>
  )
}

export default List;