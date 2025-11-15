import { Box, Text, VStack, Switch, Flex } from '@chakra-ui/react';
import { useDojo } from '../dojo/useDojo';
import type { Campaign } from '../dojo/state';

const CampaignManager: React.FC = () => {
  const { state, setState } = useDojo();

  const handleStatusToggle = (campaignId: string) => {
    setState(prevState => ({
      ...prevState,
      campaigns: prevState.campaigns.map(campaign =>
        campaign.id === campaignId ? { ...campaign, status: !campaign.status } : campaign
      ),
    }));
  };

  return (
    <Box p={5}>
      <Text fontSize="3xl" fontWeight="bold" mb={6}>Campaign Manager</Text>

      <VStack spacing={5} align="stretch">
        {state.campaigns.map((campaign: Campaign) => (
          <Box key={campaign.id} p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg="white">
            <Flex justifyContent="space-between" alignItems="center" mb={2}>
              <Text fontSize="xl" fontWeight="semibold">{campaign.name}</Text>
              <Switch
                isChecked={campaign.status}
                onChange={() => handleStatusToggle(campaign.id)}
                colorScheme="green"
              />
            </Flex>
            <Text>Stage: {campaign.stage}</Text>
            <Text>Schedule: {campaign.schedule}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default CampaignManager;
