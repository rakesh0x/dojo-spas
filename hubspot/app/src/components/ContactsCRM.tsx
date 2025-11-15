import React, { useState } from 'react';
import {
  Box,
  Flex,
  Input,
  Button,
  VStack,
  Text,
  Badge,
  Spacer,
  Collapse,
  IconButton,
  useDisclosure,
  Heading,
  Select,
  Textarea,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon, EditIcon, CheckIcon } from '@chakra-ui/icons';
import { useDojo } from '../dojo/useDojo'; // Updated import path
import type { Contact } from '../dojo/state';

interface ContactCardProps {
  contact: Contact;
  onEdit: (contact: Contact) => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact, onEdit }) => {
  const { isOpen, onToggle } = useDisclosure();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContact, setEditedContact] = useState(contact);

  const handleSave = () => {
    onEdit(editedContact);
    setIsEditing(false);
  };

  return (
    <Box p={4} shadow="md" borderWidth="1px" borderRadius="lg" bg="white">
      <Flex align="center" onClick={onToggle} cursor="pointer">
        <Text fontSize="lg" fontWeight="semibold">
          {contact.name}
        </Text>
        <Badge ml={2} colorScheme={contact.lifecycleStage === 'Lead' ? 'purple' : contact.lifecycleStage === 'MQL' ? 'blue' : contact.lifecycleStage === 'SQL' ? 'orange' : 'green'}>
          {contact.lifecycleStage}
        </Badge>
        <Spacer />
        <IconButton
          aria-label={isOpen ? 'Collapse' : 'Expand'}
          icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          variant="ghost"
        />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <VStack align="stretch" mt={4} spacing={3}>
          <Text>Email: {contact.email}</Text>

          <Flex align="center">
            <Text mr={2}>Owner: </Text>
            {isEditing ? (
              <Input
                value={editedContact.owner}
                onChange={(e) => setEditedContact({ ...editedContact, owner: e.target.value })}
                size="sm"
                width="auto"
              />
            ) : (
              <Text>{contact.owner}</Text>
            )}
          </Flex>

          <Flex align="center">
            <Text mr={2}>Lifecycle Stage: </Text>
            {isEditing ? (
              <Select
                value={editedContact.lifecycleStage}
                onChange={(e) => setEditedContact({ ...editedContact, lifecycleStage: e.target.value as Contact['lifecycleStage'] })}
                size="sm"
                width="auto"
              >
                <option value="Lead">Lead</option>
                <option value="MQL">MQL</option>
                <option value="SQL">SQL</option>
                <option value="Customer">Customer</option>
              </Select>
            ) : (
              <Text>{contact.lifecycleStage}</Text>
            )}
          </Flex>

          <Text fontWeight="semibold">Activity Timeline:</Text>
          <VStack align="stretch" pl={4} borderLeft="2px solid gray.200">
            {contact.activityTimeline.map((activity, index) => (
              <Text key={index} fontSize="sm">
                {activity}
              </Text>
            ))}
          </VStack>

          <Text fontWeight="semibold">Notes:</Text>
          {isEditing ? (
            <Textarea
              value={editedContact.notes.join('\n')}
              onChange={(e) => setEditedContact({ ...editedContact, notes: e.target.value.split('\n') })}
              size="sm"
              height="80px"
            />
          ) : (
            <VStack align="stretch" pl={4} borderLeft="2px solid gray.200">
              {contact.notes.length > 0 ? (
                contact.notes.map((note, index) => <Text key={index} fontSize="sm">{note}</Text>)
              ) : (
                <Text fontSize="sm" color="gray.500">No notes</Text>
              )}
            </VStack>
          )}

          <Flex mt={3} justifyContent="flex-end">
            {isEditing ? (
              <Button leftIcon={<CheckIcon />} colorScheme="green" size="sm" onClick={handleSave}>
                Save
              </Button>
            ) : (
              <IconButton
                aria-label="Edit Contact"
                icon={<EditIcon />}
                size="sm"
                onClick={() => setIsEditing(true)}
              />
            )}
          </Flex>
        </VStack>
      </Collapse>
    </Box>
  );
};

const ContactsCRM: React.FC = () => {
  const { state, setState } = useDojo();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStage, setFilterStage] = useState('All');

  const filteredContacts = state.contacts.filter((contact) => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        contact.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStage = filterStage === 'All' || contact.lifecycleStage === filterStage;
    return matchesSearch && matchesStage;
  });

  const handleUpdateContact = (updatedContact: Contact) => {
    setState(prevState => ({
      ...prevState,
      contacts: prevState.contacts.map(contact =>
        contact.id === updatedContact.id ? updatedContact : contact
      ),
    }));
  };

  return (
    <Box p={5}>
      <Heading size="xl" mb={6}>Contacts CRM</Heading>
      <Flex mb={4}>
        <Input
          placeholder="Search contacts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          mr={4}
        />
        <Select
          placeholder="Filter by Stage"
          value={filterStage}
          onChange={(e) => setFilterStage(e.target.value)}
          width="200px"
        >
          <option value="All">All Stages</option>
          <option value="Lead">Lead</option>
          <option value="MQL">MQL</option>
          <option value="SQL">SQL</option>
          <option value="Customer">Customer</option>
        </Select>
      </Flex>
      <VStack spacing={4} align="stretch">
        {filteredContacts.length === 0 ? (
          <Text>No contacts found matching your criteria.</Text>
        ) : (
          filteredContacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} onEdit={handleUpdateContact} />
          ))
        )}
      </VStack>
    </Box>
  );
};

export default ContactsCRM;
