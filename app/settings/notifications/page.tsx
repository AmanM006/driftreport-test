'use client';
import { useEffect } from 'react';

// Notifications preferences — partial: viewed tracked, toggle events missing
export default function NotificationsPage() {
  useEffect(() => {
    // @ts-ignore
    window.pendo?.track('notifications_preferences_viewed', {
      visitorId: 'user_abc',
    });
  }, []);

  return (
    <main>
      <h1>Notification Preferences</h1>
      <label>
        <input type="checkbox" defaultChecked /> Email digest
      </label>
      <label>
        <input type="checkbox" /> Slack alerts
      </label>
    </main>
  );
}
