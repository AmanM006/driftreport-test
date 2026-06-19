'use client';
import { useEffect } from 'react';

// Profile — partial coverage: view tracked, edit events missing
export default function ProfilePage() {
  useEffect(() => {
    // @ts-ignore
    window.pendo?.track('profile_viewed', {
      visitorId: 'user_abc',
    });
    // Missing: profile_updated, avatar_changed events
  }, []);

  return (
    <main>
      <h1>Your Profile</h1>
      <p>Manage your personal information.</p>
    </main>
  );
}
