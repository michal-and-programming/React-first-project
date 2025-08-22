import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { searchString } from '../../redux/store';

const SearchForm = () => {
    const dispatch = useDispatch();
    const [newValue, setNewValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(searchString(newValue));
    }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." value={newValue} onChange={e => setNewValue(e.target.value)}/>
            <Button>
                <span className="fa fa-search"/>
            </Button>
        </form>
    );
  };

  export default SearchForm;