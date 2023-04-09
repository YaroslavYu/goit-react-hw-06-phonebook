import { StyledFilter } from './phonebook.styled';

import { addFilter } from './redux/filterSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getFilter } from './redux/selectors';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <label>
      Filter
      <StyledFilter
        type="text"
        name="filter"
        onChange={e => {
          dispatch(addFilter(e.target.value));
        }}
        // value={filter}
      />
    </label>
  );
}
