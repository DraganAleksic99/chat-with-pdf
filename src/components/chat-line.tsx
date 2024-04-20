import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Message } from 'ai/react';

const formatContent = (text: string) =>
  text.split('\n').map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ));

export function ChatLine({ role = 'assistant', content }: Partial<Message>) {
  if (!content) {
    return null;
  }
  const formattedMessage = formatContent(content);

  return (
    <div>
      <Card className="mb-2">
        <CardHeader>
          <CardTitle
            className={
              role === 'assistant'
                ? 'text-blue-500 dark:text-blue-200'
                : 'text-amber-500 dark:text-amber-200'
            }
          >
            {role === 'assistant' ? 'AI' : 'You'}
          </CardTitle>
        </CardHeader>
        <CardContent>{formattedMessage}</CardContent>
      </Card>
    </div>
  );
}
