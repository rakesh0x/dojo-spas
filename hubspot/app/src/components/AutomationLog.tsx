import React from 'react';
import { Box, VStack, Text, Heading, Flex } from '@chakra-ui/react';
import { useDojo } from '../dojo/useDojo';
import type { AutomationLogEntry } from '../dojo/state';

const AutomationLog: React.FC = () => {
  const { state } = useDojo();

  return (
    <Box p={5}>
      <Heading size="xl" mb={6}>Automation Log</Heading>
      <VStack spacing={4} align="stretch">
        {state.automationLog.length === 0 ? (
          <Text>No automation events recorded yet.</Text>
        ) : (
          state.automationLog.map((entry: AutomationLogEntry) => (
            <Box key={entry.id} p={4} shadow="sm" borderWidth="1px" borderRadius="md" bg="white">
              <Flex justifyContent="space-between" alignItems="center" mb={1}>
                <Text fontWeight="semibold">{entry.event}</Text>
                <Text fontSize="sm" color="gray.500">{new Date(entry.timestamp).toLocaleString()}</Text>
              </Flex>
              <Text fontSize="sm">{entry.details}</Text>
            </Box>
          ))
        )}
      </VStack>
    </Box>
  );
};

export default AutomationLog;
