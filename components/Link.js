import styled from 'styled-components'

const Link = styled.a`
  background-image: linear-gradient(
    180deg,
    transparent 50%,
    rgba(255, 255, 255, 0.6) 0
  );
  background-position: 0 1.025em;
  background-repeat: repeat-x;
  background-size: 2px 2px;
  color: #fff;
  text-decoration: none;

  &:hover {
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 255, 255, 0.6) 0
    );
  }
`

export default ({
  children,
  href,
  ...other
}) => (
  <Link href={href} {...other}>
    {children}
  </Link>
)
