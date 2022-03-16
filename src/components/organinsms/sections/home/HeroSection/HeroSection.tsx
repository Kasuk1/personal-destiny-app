import { Search } from 'components/molecules';
import { HeroStyles } from './HeroSectionStyles';

export const HeroSection = () => (
  <HeroStyles>
    <div className="hero">
      <h1 className="hero--title">
        The easiest way to find your next <span>destination</span>.
      </h1>
      <Search />
    </div>
  </HeroStyles>
);
