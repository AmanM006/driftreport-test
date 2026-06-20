'use client';
import { useEffect } from 'react';

export default function NotificationsPage() {
  useEffect(() => {
    // @ts-ignore
    window.pendo?.track('notifications_preferences_viewed', {});
  }, []);

  function handlePreferenceChange(preferenceType: string, enabled: boolean, channel: string) {
    // @ts-ignore
    window.pendo?.track('notification_preferences_updated', {
      preferenceType,
      enabled,
      channel,
    });
  }

  return (
    <main>
      <h1>Notification Preferences</h1>
      <label>
        <input
          type="checkbox"
          defaultChecked
          onChange={(e) => handlePreferenceChange('email_digest', e.target.checked, 'email')}
        />{' '}
        Email digest
      </label>
      <label>
        <input
          type="checkbox"
          onChange={(e) => handlePreferenceChange('slack_alerts', e.target.checked, 'slack')}
        />{' '}
        Slack alerts
      </label>
    </main>
  );
}
