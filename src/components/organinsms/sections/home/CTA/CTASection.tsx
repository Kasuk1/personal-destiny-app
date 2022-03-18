import { CityCard } from 'components/molecules';
import { cities } from 'utils/dummy';
import { CTASectionStyles } from './CTASectionStyles';

export const CTASection = () => (
  <CTASectionStyles>
    <div className="cta--headers">
      <h2 className="cta--title">
        Wherever you <span>always</span> wanted to be.
      </h2>
      <p className="cta--desc">With the most accurate information</p>
    </div>

    <div className="cta--cities">
      {cities.map((city) => (
        <CityCard key={city.id} {...city} />
      ))}
    </div>
  </CTASectionStyles>
);
