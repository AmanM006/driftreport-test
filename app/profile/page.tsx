'use client';
import { useEffect } from 'react';

export default function ProfilePage() {
  useEffect(() => {
    // @ts-ignore
    window.pendo?.track('profile_viewed', {});
  }, []);

  function handleProfileUpdate() {
    // @ts-ignore
    window.pendo?.track('profile_updated', {
      fieldsUpdated: 'name,email',
      fieldCount: 2,
    });
  }

  function handleAvatarChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    // @ts-ignore
    window.pendo?.track('avatar_changed', {
      fileType: file.type,
      fileSize: file.size,
    });
  }

  return (
    <main>
      <h1>Your Profile</h1>
      <p>Manage your personal information.</p>
      <button onClick={handleProfileUpdate}>Save Profile</button>
      <input type="file" accept="image/*" onChange={handleAvatarChange} />
    </main>
  );
}
