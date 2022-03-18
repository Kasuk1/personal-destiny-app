import parse from 'html-react-parser';
import { marked } from 'marked';
import { IEntitie } from 'interfaces/hotelsApi';
import { EntitieStyles } from './EntitieStyles';

export const Entitie: React.FC<IEntitie> = ({ name, type, caption }) => (
  <EntitieStyles>
    <div className="entitie--header">
      <h2 className="entitie--name">{name}</h2>
      <span className="entitie--type">{type}</span>
    </div>

    {parse(marked(caption))}
  </EntitieStyles>
);
