import React from 'react';
import { MessageItem } from './MessageItem';
import { Message } from '../types';

interface MessageListProps {
    messages: Message[];
}

export const MessageList: React.FC<MessageListProps> = ({ messages }) => {
    return (
        <div className="message-list">
            {messages.map((msg) => <MessageItem key={msg.id} message={msg} />)}
        </div>
    );
};