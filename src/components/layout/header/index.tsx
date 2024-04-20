import { useLocation } from "react-router-dom"
import { Container, LinkContent, MultipleNavContainer, NavItem, Paragraph } from "./styles"

export const Header: React.FC = () => {
  const location = useLocation();
  const istransparent: string = location.pathname === '/' ? "home" : "extra";
  return (
    <Container istransparent={istransparent}>
      <LinkContent to = "/">
        <NavItem><Paragraph>Toy Document Labeling</Paragraph></NavItem>
      </LinkContent>
      <MultipleNavContainer>
        <LinkContent to="/">
          <NavItem><Paragraph>Home</Paragraph></NavItem>
        </LinkContent>
        <LinkContent to="/documents">
          <NavItem><Paragraph>Documents</Paragraph></NavItem>
        </LinkContent>
      </MultipleNavContainer>
    </Container>
  )
}