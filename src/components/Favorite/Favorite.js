import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';
import {favoriteCard} from '../../redux/cardsRedux';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';

const Favorite = () => {

  const favoriteCards = useSelector(favoriteCard);
  
  return(
    <div>
      <PageTitle title={"Favorite"} />
      <ul className={styles.favoriteList}>
        {favoriteCards.map(card => (
          <Card key={card.id} title={card.title} id={card.id}/>
        ))}
      </ul>
    </div>
  )
};

export default Favorite;