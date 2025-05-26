import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/auth');
}

// This ensures the page is not cached
export const dynamic = 'force-dynamic';
