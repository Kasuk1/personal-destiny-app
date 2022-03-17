import { Entitie } from 'components/molecules';
import { ISuggestion } from 'interfaces/hotelsApi';

export const Group: React.FC<ISuggestion> = ({ group, entities }) => (
  <div>
    <h1>{group}</h1>
    {entities.map((entitie) => (
      <Entitie {...entitie} />
    ))}
  </div>
);
