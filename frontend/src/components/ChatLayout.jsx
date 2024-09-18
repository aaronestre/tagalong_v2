import React from 'react';
import { Container, Paper, Title } from '@mantine/core';
import ChatInput from './ChatInput';


function ChatLayout() {
  return (
    <Container size="md" style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Paper padding="md" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
        <Title order={2} style={{ marginBottom: '1rem' }}>Tagalong</Title>
      </Paper>
      <ChatInput />
    </Container>
  );
}

export default ChatLayout;