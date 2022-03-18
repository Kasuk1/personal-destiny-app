import { Link } from 'react-router-dom';
import { IoMdReturnLeft } from 'react-icons/io';
import { ReturnStyles } from './ReturnStyles';

interface IReturn {
  to: string;
}

export const Return: React.FC<IReturn> = ({ to }) => (
  <ReturnStyles>
    <Link to={to}>
      <IoMdReturnLeft /> Return
    </Link>
  </ReturnStyles>
);
