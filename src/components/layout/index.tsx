import { Footer } from "./footer";
import { Header } from "./header";
import { ContentSection, LayoutContainer } from "./styles";

interface LayoutProps {
  children?: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {

  return (
    <LayoutContainer>
      <Header />
      <ContentSection>
        {children}
      </ContentSection>
      <Footer/>
    </LayoutContainer>
  )
}

// Higher Order Component 
export const WithLayout = (Component: React.FC) => () => {
  
  return (
    <LayoutComponent>
      <Component/>
    </LayoutComponent>
  )
}