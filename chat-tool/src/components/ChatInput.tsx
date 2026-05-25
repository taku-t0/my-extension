import React from 'react';

export const ChatInput: React.FC = () => {
    return (
        <div className="input-area-container">
            {/* 🌟 12グリッドシステム: 入力幅のコントロール */}
            <div className="input-grid">
                {/* 入力欄: 10カラム分を使用 */}
                <div className="input-field-wrapper">
                    <input type="text" placeholder="メッセージを入力..." className="chat-input" />
                </div>

                {/* ボタン: 2カラム分を使用 */}
                <div className="submit-btn-wrapper">
                    <button className="submit-btn">送信</button>
                </div>
            </div>
        </div>
    );
};