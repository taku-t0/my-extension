import React from 'react';
import { Sidebar } from './components/Sidebar';
import { ChatContainer } from './components/ChatContainer';
import { Message, ChatHistory } from './types';

// レイアウト確認用のダミーデータ
const DUMMY_HISTORIES: ChatHistory[] = [
  { id: '1', title: 'Reactのコンポーネント分割について' },
  { id: '2', title: 'TypeScriptの型定義のコツ' },
  { id: '3', title: '12グリッドシステムの使い方' },
];

const DUMMY_MESSAGES: Message[] = [
  { id: 'm1', sender: 'ai', text: 'こんにちは！どのようなお手伝いが必要ですか？', timestamp: '10:00' },
  { id: 'm2', sender: 'user', text: 'ReactとTypeScriptで12グリッドシステムを使ったUIを作りたいです。', timestamp: '10:01' },
  { id: 'm3', sender: 'ai', text: 'かしこまりました。拡張しやすいクリーンなレイアウトを作成しますね。', timestamp: '10:01' },
];

const App: React.FC = () => {
  return (
    <div>
      {/* 12グリッドシステム: 画面全体を12分割 */}
      <div className="app-container">
        {/* サイドバー: 3カラム分を使用 */}
        <Sidebar histories={DUMMY_HISTORIES} />

        {/* メインのチャットエリア: 9カラム分を使用 */}
        <ChatContainer messages={DUMMY_MESSAGES} />
      </div>
    </div>
  );
};

export default App;