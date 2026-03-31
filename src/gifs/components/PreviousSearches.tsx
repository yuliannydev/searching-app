import { Heading, Container, HStack, Button } from '@chakra-ui/react';

interface Props {
  searches: string[];
  handlePreviousSearchClicked: (term: string) => void;
}

export const PreviousSearches = ({
  searches,
  handlePreviousSearchClicked,
}: Props) => {
  return (
    <Container centerContent marginTop="6" gap="2">
      <Heading size="lg">Previous search</Heading>
      <HStack gap="4" wrap="wrap" marginBottom="8">
        {searches.map(term => (
          <Button key={term} onClick={() => handlePreviousSearchClicked(term)}>
            {term}
          </Button>
        ))}
      </HStack>
    </Container>
  );
};
