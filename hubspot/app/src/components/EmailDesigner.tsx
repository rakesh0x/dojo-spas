import React, { useState, useEffect } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack, Text, Select, Flex } from '@chakra-ui/react';
import { useDojo } from '../dojo/useDojo';
import { type Email } from '../dojo/state';

const EmailDesigner: React.FC = () => {
  const { state, setState } = useDojo();
  const [selectedEmailId, setSelectedEmailId] = useState<string | undefined>(state.emails[0]?.id);
  const [formData, setFormData] = useState<Email | undefined>(undefined);

  const emailFromGlobalState = selectedEmailId
    ? state.emails.find(email => email.id === selectedEmailId)
    : undefined;

  useEffect(() => {
    setFormData(emailFromGlobalState || undefined);
  }, [emailFromGlobalState]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (formData) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSave = () => {
    if (formData) {
      setState(prevState => ({
        ...prevState,
        emails: prevState.emails.map(email =>
          email.id === formData.id ? { ...formData, revisions: [...email.revisions, `Saved at ${new Date().toLocaleString()}`] } : email
        ),
      }));
      alert('Email saved!');
    }
  };

  if (!formData) {
    return (
      <Box p={5}>
        <Text fontSize="2xl" fontWeight="bold">Email Designer</Text>
        <Text mt={2}>No email selected or available. Please create one.</Text>
      </Box>
    );
  }

  return (
    <Box p={5}>
      <Text fontSize="3xl" fontWeight="bold" mb={6}>Email Designer</Text>

      <FormControl mb={4}>
        <FormLabel>Select Email</FormLabel>
        <Select
          placeholder="Select an email"
          value={selectedEmailId}
          onChange={(e) => setSelectedEmailId(e.target.value)}
        >
          {state.emails.map((email) => (
            <option key={email.id} value={email.id}>
              {email.subject}
            </option>
          ))}
        </Select>
      </FormControl>

      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel>Subject</FormLabel>
          <Input name="subject" value={formData.subject} onChange={handleInputChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Content</FormLabel>
          <Textarea name="content" value={formData.content} onChange={handleInputChange} height="200px" />
        </FormControl>
        <FormControl>
          <FormLabel>Segmentation</FormLabel>
          <Input
            name="segmentation"
            value={formData.segmentation.join(', ')}
            onChange={(e) =>
              setFormData({
                ...formData,
                segmentation: e.target.value.split(',').map((s) => s.trim()),
              })
            }
            placeholder="Enter comma-separated segments"
          />
        </FormControl>

        <Button colorScheme="blue" onClick={handleSave}>Save Email</Button>

        <Box p={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Text fontSize="xl" fontWeight="semibold">Preview</Text>
          <Text mt={2} dangerouslySetInnerHTML={{ __html: formData.content }} />
        </Box>

        <Flex justifyContent="space-between" alignItems="center">
          <Text>Revisions: {formData.revisions.length}</Text>
          <Button size="sm">View Revisions</Button>
        </Flex>
      </VStack>
    </Box>
  );
};

export default EmailDesigner;
