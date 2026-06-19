'use client';
import { useEffect } from 'react';

// Dashboard home — partial coverage (pageLoad tracked, but feature events missing)
export default function DashboardPage() {
  useEffect(() => {
    // @ts-ignore
    window.pendo?.pageLoad();
  }, []);

  return (
    <main>
      <h1>Dashboard</h1>
      <p>Overview of your workspace.</p>
    </main>
  );
}
