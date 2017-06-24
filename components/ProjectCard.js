import styled from 'styled-components'
import chroma from 'chroma-js'

function getColor (color, index) {
  return chroma(color).darken((index + 1) * 0.2)
}

const ProjectCard = styled.a`
  background-color: ${props => getColor(props.backgroundColor, props.index)};
  color: #fff;
  font-family: 'Avenir Next', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, sans-serif;
  flex: 0 0 100%;
  padding: 1rem;
  text-decoration: none;
  width: 18rem;

  @media screen and (min-width: 54rem) {
    background-image: linear-gradient(
      to right,
      ${props => getColor(props.backgroundColor, props.index)},
      ${props => props.backgroundColor}
    );
    transition: transform 300ms ease-in-out;

    &:hover {
      transform: translateX(-1rem);
    }
  }
`
const Title = styled.h3`
  font-family: Monaco, monospace;
  font-size: 1rem;
  font-weight: normal;
  margin-bottom: 0.5em;
  margin-top: 0;

  @media screen and (min-width: 40rem) {
    font-size: 1.25rem;
  }
`

const Description = styled.p`
  font-size: 0.875rem;
  font-style: italic;
  line-height: 1.5em;
  margin-bottom: 0;
  margin-top: 0;
  opacity: 0.5;

  @media screen and (min-width: 40rem) {
    font-size: 1.125rem;
  }
`

export default ({
  backgroundColor,
  description,
  href,
  index,
  name
}) => (
  <ProjectCard
    backgroundColor={backgroundColor}
    href={href}
    index={index}
  >
    <Title>{name}</Title>
    <Description>{description}</Description>
  </ProjectCard>
)
