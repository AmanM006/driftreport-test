'use client';
import { useEffect } from 'react';

// Security settings — fully instrumented
export default function SecurityPage() {
  useEffect(() => {
    // @ts-ignore
    window.pendo?.track('security_settings_viewed', {
      visitorId: 'user_abc',
      mfaEnabled: false,
    });
  }, []);

  function handleEnableMfa() {
    // @ts-ignore
    window.pendo?.track('mfa_enable_clicked', { visitorId: 'user_abc' });
  }

  function handlePasswordChange() {
    // @ts-ignore
    window.pendo?.track('password_change_initiated', { visitorId: 'user_abc' });
  }

  return (
    <main>
      <h1>Security</h1>
      <button onClick={handleEnableMfa}>Enable 2FA</button>
      <button onClick={handlePasswordChange}>Change Password</button>
    </main>
  );
}
