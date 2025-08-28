import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';

const ColumnForm = props => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addColumn({ title, icon }, props.listId));
    setTitle('');
    setIcon('');
  };

	return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <label>
        <span className={styles.columnFormSpan}>Title:</span>
        <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      <label>
        <span className={styles.columnFormSpan}>Icon:</span>
        <TextInput type="text" value={icon} onChange={e => setIcon(e.target.value)} />
      </label>
      <Button>ADD COLUMN</Button>
    </form>
	);
};

export default ColumnForm;