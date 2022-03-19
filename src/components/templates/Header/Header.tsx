import parse from 'html-react-parser';
import { marked } from 'marked';
import { Search } from 'components/molecules';
import { HeaderStyles } from './HeaderStyles';

export interface IHeader {
  backgroundImageUrl: string;
  title: string;
}

export const Header: React.FC<IHeader> = ({ backgroundImageUrl, title }) => (
  <HeaderStyles backgroundImageUrl={backgroundImageUrl}>
    {parse(marked(title))}
    <Search />
  </HeaderStyles>
);
