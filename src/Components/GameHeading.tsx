import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ''} ${
    gameQuery.genre?.name || ''
  } 游戏`;
  return (
    <Heading as='h1' mb={5} fontSize='5xl' my={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
