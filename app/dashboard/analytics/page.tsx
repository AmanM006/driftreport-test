'use client';
import { useEffect } from 'react';

// Analytics sub-page — fully tracked with rich schema
export default function AnalyticsPage() {
  useEffect(() => {
    // @ts-ignore
    window.pendo?.track('analytics_viewed', {
      visitorId: 'user_abc',
      workspaceId: 'ws_123',
      plan: 'pro',
      dateRange: '30d',
    });
  }, []);

  function handleExport() {
    // @ts-ignore
    window.pendo?.track('analytics_export_clicked', {
      format: 'csv',
    });
  }

  return (
    <main>
      <h1>Analytics</h1>
      <button onClick={handleExport}>Export CSV</button>
    </main>
  );
}
