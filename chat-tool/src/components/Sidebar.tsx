import React from 'react';
import { ChatHistory } from '../types';

interface SidebarProps {
  histories: ChatHistory[];
}

export const Sidebar: React.FC<SidebarProps> = ({ histories }) => {
  return (
    <div className="sidebar">
  <div>
    <button className="new-chat-btn">
      <span>新規チャット</span>
      <span className="plus-icon">+</span>
    </button>
    <div className="history-list">
      {histories.map((chat) => (
        <div key={chat.id} className="history-item">
          <span className="chat-icon">💬</span>
          <span className="history-title">{chat.title}</span>
        </div>
      ))}
    </div>
  </div>
  <div className="sidebar-footer">AI Assistant v1.0.0</div>
</div>
  );
};