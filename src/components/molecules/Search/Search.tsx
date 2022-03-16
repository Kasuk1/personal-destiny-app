import { BsSearch } from 'react-icons/bs';
import { SearchStyles } from './SearchStyles';

export const Search: React.FC = () => (
  <SearchStyles>
    <input
      className="search--input"
      type="text"
      placeholder="Search by location"
    />
    <BsSearch className="search--icon" />
  </SearchStyles>
);
