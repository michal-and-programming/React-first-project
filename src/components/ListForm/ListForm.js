import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import styles from '../ColumnForm/ColumnForm.module.scss';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addList } from "../../redux/listsRedux";

const ListForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList(title, description));
    setTitle('');
    setDescription('');
  };

  return(
   <form className={styles.columnForm} onSubmit={handleSubmit}>
      <label>
        <span className={styles.columnFormSpan}>Title:</span>
        <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      <label>
        <span className={styles.columnFormSpan}>Description:</span>
        <TextInput type="text" value={description} onChange={e => setDescription(e.target.value)} />
      </label>
      <Button>ADD LIST</Button>
    </form>
  )
};

export default ListForm;