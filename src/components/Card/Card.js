import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import {addFavoriteStyle} from '../../redux/store';

const Card = props => {
  const dispatch = useDispatch();

  const chosenFavoriteCard = () => {
    dispatch(addFavoriteStyle(props.id));
  };

  return(
    <li className={styles.card}>
      {props.title}
      <button type='button' className={clsx(styles.cardButton, !props.isFavorite && styles.active)}
        onClick={chosenFavoriteCard} >
        <span className="fa fa-star-o"></span>
      </button>
    </li>
  )
};

export default Card;