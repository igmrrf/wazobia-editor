'use client';
import SlateEditor from '@/components/SlateEditor/Editor';
import { useState } from 'react';

export default function Home() {
  const [text, setText] = useState('');
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <SlateEditor />
    </main>
  );
}
