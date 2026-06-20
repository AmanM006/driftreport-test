'use client';
import { useEffect } from 'react';

export default function SecurityPage() {
  useEffect(() => {
    // @ts-ignore
    window.pendo?.track('security_settings_viewed', {
      mfaEnabled: false,
    });
  }, []);

  function handleEnableMfa() {
    // @ts-ignore
    window.pendo?.track('mfa_enable_clicked', {});
  }

  function handlePasswordChange() {
    // @ts-ignore
    window.pendo?.track('password_change_initiated', {});
  }

  return (
    <main>
      <h1>Security</h1>
      <button onClick={handleEnableMfa}>Enable 2FA</button>
      <button onClick={handlePasswordChange}>Change Password</button>
    </main>
  );
}
