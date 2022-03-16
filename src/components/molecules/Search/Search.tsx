import { BsSearch } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectUiState, setSearchInput } from 'store';
import { SearchStyles } from './SearchStyles';

export const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const { searchInput } = useAppSelector(selectUiState);

  return (
    <SearchStyles>
      <input
        className="search--input"
        type="text"
        value={searchInput}
        placeholder="Search by location"
        onChange={(e) => dispatch(setSearchInput(e.target.value))}
      />
      <BsSearch className="search--icon" />
    </SearchStyles>
  );
};
