import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';

const ColumnForm = props => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
    
  const handleSubmit = e => {
    e.preventDefault();
    props.action({ title: title, icon: icon });
    setTitle('');
    setIcon('');
  }

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