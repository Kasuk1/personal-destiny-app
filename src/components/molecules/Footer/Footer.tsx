import { Container } from 'components/atoms';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FooterStyles } from './FooterStyles';

export const Footer = () => (
  <FooterStyles>
    <Container>
      <div className="footer">
        <div className="footer--headers">
          <span className="footer--logo">Destiny</span>
          <p className="footer--desc">
            ©Developed by{' '}
            <a
              className="footer--portfolio"
              href="https://kasuk1.github.io/personal-portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              @Igor
            </a>
          </p>
        </div>

        <div>
          <ul className="footer--list">
            <li className="footer--item">
              <a
                className="footer--link"
                href="https://www.linkedin.com/in/igorcf/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="footer--item">
              <a
                className="footer--link"
                href="https://github.com/Kasuk1"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li className="footer--item">
              <a
                className="footer--link"
                href="https://www.facebook.com/IgorPRI1/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
            <li className="footer--item">
              <a
                className="footer--link"
                href="https://www.instagram.com/yesimigori/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  </FooterStyles>
);
