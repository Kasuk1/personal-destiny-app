import { BsSearch } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectUiState, setSearchInput } from 'store';
import { useNavigate } from 'react-router-dom';
import { SearchStyles } from './SearchStyles';

export const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { searchInput } = useAppSelector(selectUiState);

  const navigateToHotelsInfo = () => navigate(`/locations/${searchInput}`);

  return (
    <SearchStyles>
      <input
        className="search--input"
        type="text"
        value={searchInput}
        placeholder="Search by location"
        onChange={(e) => dispatch(setSearchInput(e.target.value))}
        onKeyUp={(e) => e.key === 'Enter' && navigateToHotelsInfo()}
      />
      <BsSearch className="search--icon" onClick={navigateToHotelsInfo} />
    </SearchStyles>
  );
};
