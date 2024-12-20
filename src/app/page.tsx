import { ModeToggle } from '@/components/mode-toggle';
import { Chat } from '@/components/chat';

export default function Home() {
  return (
    <main className="relative max-w-screen-lg m-auto flex min-h-screen flex-col">
      <div className=" p-4 flex h-14 items-center justify-between supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <span className="font-bold">Chat with: Attention is All you Need</span>
        <ModeToggle />
      </div>
      <div className="flex flex-1 py-4">
        <div className="w-full">
          <Chat />
        </div>
      </div>
    </main>
  );
}
