import { useState } from 'react';
import { Heading, Button, Input, VStack, HStack, Text, Box } from '@chakra-ui/react';

interface Player {
  name: string;
  buyIn: number;
  endAmount: number;
}

interface Transfer {
  from: string;
  to: string;
  amount: number;
}

const Poker = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  const addPlayerRow = () => {
    setPlayers([...players, { name: '', buyIn: 0, endAmount: 0 }]);
  };

  const updatePlayer = (index: number, field: keyof Player, value: string | number) => {
    const updatedPlayers = players.map((player, i) => (i === index ? { ...player, [field]: value } : player));
    setPlayers(updatedPlayers);
  };

  const logPlayers = () => {
    console.log(players);
    // const moneyTransfers = calculateMoneyTransfers(players);
    // console.log(moneyTransfers);
  };

  const calculateProfit = (player: Player) => {
    return player.endAmount - player.buyIn;
  };

  //   const calculateMoneyTransfers = (players: Player[]) => {
  //     let sortedPlayers = players;
  //     sortedPlayers = players.sort((a, b) => calculateProfit(a) - calculateProfit(b));
  //     for (let i = 0; i < sortedPlayers.length; i++) {
  //       if (calculateProfit(sortedPlayers[i]) < 0) {
  //         for (let j = sortedPlayers.length - 1; j > i; j--) {
  //           if (calculateProfit(sortedPlayers[j]) > 0) {
  //             const transferAmount = Math.min(-calculateProfit(sortedPlayers[i]), calculateProfit(sortedPlayers[j]));
  //             sortedPlayers[i].endAmount += transferAmount;
  //             sortedPlayers[j].endAmount -= transferAmount;
  //             console.log(`${sortedPlayers[j].name} pays ${sortedPlayers[i].name} $${transferAmount}`);
  //           }
  //         }
  //     }
  // }

  return (
    <Box p={6}>
      <Heading as="h2" size="2xl" mb={4}>
        Poker
      </Heading>

      {/* Column Titles */}
      <HStack spacing={4} fontWeight="bold" fontSize="lg">
        <Text width="30%">Name</Text>
        <Text width="30%">Buy-In Amount</Text>
        <Text width="30%">End Amount</Text>
      </HStack>

      <VStack spacing={4} align="stretch" mt={2}>
        {players.map((player, index) => (
          <HStack key={index} spacing={4} py={2}>
            <Input
              placeholder="Name"
              value={player.name}
              onChange={(e) => updatePlayer(index, 'name', e.target.value)}
              width="30%"
            />
            <Input
              placeholder="Buy-In Amount"
              type="number"
              value={player.buyIn}
              onChange={(e) => updatePlayer(index, 'buyIn', parseFloat(e.target.value))}
              width="30%"
            />
            <Input
              placeholder="End Amount"
              type="number"
              value={player.endAmount}
              onChange={(e) => updatePlayer(index, 'endAmount', parseFloat(e.target.value))}
              width="30%"
            />
            <Button colorScheme="red" onClick={() => setPlayers(players.filter((_, i) => i !== index))}>
              Delete
            </Button>
          </HStack>
        ))}

        <Button onClick={addPlayerRow} colorScheme="blue" mt={4}>
          Add Player
        </Button>
        <Button onClick={logPlayers} colorScheme="green" mt={2}>
          Log Players
        </Button>
      </VStack>
    </Box>
  );
};

export default Poker;
