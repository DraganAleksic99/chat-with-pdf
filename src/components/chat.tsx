'use client';
import { scrollToBottom, initialMessages } from '@/lib/utils';
import { ChatLine } from './chat-line';
import { PromptSuggestion } from './prompt-suggestion';
import { useChat, Message } from 'ai/react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Spinner } from './ui/spinner';
import { useEffect, useRef, useState } from 'react';

export function Chat() {
  const [suggestions, setSuggestions] = useState([
    'Who authored this paper?',
    'What is this paper about?',
    'Explain transformer architecture',
    'What is attention mechanism?'
  ]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [enterKeyPressed, setEnterKeyPressed] = useState(false);

  const { messages, input, setInput, handleInputChange, handleSubmit, isLoading } = useChat({
    initialMessages,
    onFinish() {
      setShowSuggestions(true);
      setTimeout(() => scrollToBottom(containerRef), 100);
    }
  });

  useEffect(() => {
    setTimeout(() => scrollToBottom(containerRef), 100);
    setEnterKeyPressed(false);
  }, [messages]);

  useEffect(() => {
    document.getElementById('chat')?.addEventListener('keypress', e => {
      if (e.key === 'Enter') {
        setEnterKeyPressed(true);
      }
    });
  }, []);

  function handleSuggestionClick(text: string, index: number) {
    if (enterKeyPressed) {
      setTimeout(() => setShowSuggestions(false), 0);
      return;
    }
    setInput(text);
    setTimeout(() => {
      setShowSuggestions(false);
      const newSuggestions = suggestions.filter((_s, i) => i !== index);
      setSuggestions(newSuggestions);
    }, 0);
  }

  return (
    <div className="rounded-2xl border h-[75vh] flex flex-col justify-between">
      <div className="p-6 overflow-auto" ref={containerRef}>
        {messages.map(({ id, role, content }: Message) => (
          <ChatLine key={id} role={role} content={content} />
        ))}
        {(messages.length === 1 || showSuggestions) &&
          suggestions.map((s: string, i: number) => (
            <PromptSuggestion key={s} handleClick={handleSuggestionClick} text={s} index={i} />
          ))}
      </div>

      <form id="chat" onSubmit={handleSubmit} className="p-4 flex clear-both">
        <Input
          value={input}
          placeholder={'Type to chat with AI...'}
          onChange={handleInputChange}
          className="mr-2"
        />

        <Button type="submit" className="w-24">
          {isLoading ? <Spinner /> : 'Ask'}
        </Button>
      </form>
    </div>
  );
}
