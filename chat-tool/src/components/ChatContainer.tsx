import React from 'react';
import { MessageList } from './MessageList';
import { ChatInput } from './ChatInput';
import { Message } from '../types';

interface ChatContainerProps {
    messages: Message[];
}

export const ChatContainer: React.FC<ChatContainerProps> = ({ messages }) => {
    return (
        <div className="chat-container">
            {/* ヘッダー */}
            <header className="chat-header">
                <h1 className="header-title">AI Assistant</h1>
            </header>

            {/* メッセージタイムライン */}
            <MessageList messages={messages} />

            {/* メッセージ入力エリア */}
            <ChatInput />
        </div>
    );
};