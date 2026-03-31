import type { Gif } from '../interfaces/gif.interface';
import { Stack, Card, Image, Text } from '@chakra-ui/react';

interface Props {
  renderGifs: Gif[];
}

export const GifList = ({ renderGifs }: Props) => {
  return (
    <Stack gap="4" direction="row" wrap="wrap" justify="center">
      {renderGifs.map(({ id, title, url, width, height }) => (
        <Card.Root width="320" key={id}>
          <Card.Body gap="2">
            <Image src={url} alt={title} maxW="260px" rounded="md" />
            <Card.Title>{title}</Card.Title>
            <Text>
              {width}x{height}
            </Text>
          </Card.Body>
        </Card.Root>
      ))}
    </Stack>
  );
};
