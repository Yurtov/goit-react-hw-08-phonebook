import { Label, Input } from './Filter.styled';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setContactsFilter } from 'redux/filterReducer';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeInputValue = e => {
    dispatch(dispatch(setContactsFilter(e.target.value)));
  };

  return (
    <Label>
      <AiOutlineFileSearch size={35} />
      <Input
        placeholder="Find contacts by name"
        type="text"
        value={filter}
        onChange={changeInputValue}
      />
    </Label>  
  );
};
