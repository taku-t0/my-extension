import React from 'react';
import { Message } from '../types';

interface MessageItemProps {
    message: Message;
}

export const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
    const isUser = message.sender === 'user';

    return (
        <div>
            {/* 🌟 12グリッドシステム: 各メッセージ行を12分割 */}
            <div className="message-row">
                {/* メッセージの最大幅を10カラム分(col-span-10)に制限。
                    ユーザー発言なら右寄せ(col-start-3)、AIなら左寄せ(col-start-1)にする。*/}
                <div className={`message-bubble-wrapper ${isUser ? 'user-align' : 'ai-align'}`}>
                    <div className={`message-bubble ${isUser ? 'user-bubble' : 'ai-bubble'}`}>
                        <div className="message-sender">{isUser ? 'You' : 'AI'}</div>
                        <p className="message-text">{message.text}</p>
                        <span className="message-timestamp">{message.timestamp}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};