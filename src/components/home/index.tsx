import { Container, Paragraph, Title } from "./styles"

export const HomeComponent: React.FC = () => {
  return (
    <Container>
      <Title>Toy Document Labeling</Title>
      <Paragraph>Tool that enables humans to create training sets for NLP-based machine learning models</Paragraph>
    </Container>
  )
}