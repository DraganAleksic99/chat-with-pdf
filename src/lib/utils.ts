import { Message } from 'ai';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToBottom(containerRef: React.RefObject<HTMLElement>) {
  if (containerRef.current) {
    const lastMessage = containerRef.current.lastElementChild;

    if (lastMessage) {
      const scrollOptions: ScrollIntoViewOptions = {
        behavior: 'smooth'
      };
      lastMessage.scrollIntoView(scrollOptions);
    }
  }
}

// Default UI Message
export const initialMessages: Message[] = [
  {
    role: 'assistant',
    id: '0',
    content:
      'Hi! I am your assistant. I am happy to help with your questions about the paper Attention is All you Need'
  }
];
