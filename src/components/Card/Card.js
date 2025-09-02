import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import {addFavoriteStyle, removeCard} from '../../redux/cardsRedux';

const Card = props => {
  const dispatch = useDispatch();

  const chosenFavoriteCard = () => {
    dispatch(addFavoriteStyle(props.id));
  };

  const chosenRemoveCard = () => {
    dispatch(removeCard(props.id))
  };

  return(
    <li className={styles.card}>
      {props.title}
      <div>
        <button type='button' className={clsx(styles.cardButton, !props.isFavorite && styles.active)}
          onClick={chosenFavoriteCard} >
          <span className="fa fa-star-o"></span>
        </button>
        <button type='button' className={styles.cardButton} onClick={chosenRemoveCard} >
          <span className="fa fa-trash"></span>
        </button>
      </div>
    </li>
  )
};

export default Card;