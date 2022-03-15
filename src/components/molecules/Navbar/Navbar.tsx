import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { AiFillHome } from 'react-icons/ai';
import { MdHotel, MdContactSupport } from 'react-icons/md';
import { SiAboutdotme } from 'react-icons/si';
import { Container } from 'components/atoms';
import { NavbarStyles } from './NavbarStyles';

export const Navbar: React.FC = () => {
  const isNotMobile = useMediaQuery({ query: '(min-width: 37.5em)' });

  return (
    <NavbarStyles>
      <Container>
        <div className="navbar">
          <span className="navbar--logo">Destiny</span>
          <ul className="navbar--list">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `navbar--item${isActive ? ' active' : ''}`
                }
                to="/"
              >
                {isNotMobile ? 'Home' : AiFillHome}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `navbar--item${isActive ? ' active' : ''}`
                }
                to="/hotels"
              >
                {isNotMobile ? 'Hotels' : MdHotel}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `navbar--item${isActive ? ' active' : ''}`
                }
                to="/about"
              >
                {isNotMobile ? 'About' : SiAboutdotme}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `navbar--item${isActive ? ' active' : ''}`
                }
                to="/contact"
              >
                {isNotMobile ? 'Contact' : MdContactSupport}
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </NavbarStyles>
  );
};
