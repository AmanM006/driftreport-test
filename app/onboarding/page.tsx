'use client';
import { useEffect } from 'react';

// Onboarding flow — partial: page view tracked but step transitions not tracked
export default function OnboardingPage() {
  useEffect(() => {
    // @ts-ignore
    window.pendo?.track('onboarding_started', {
      visitorId: 'user_abc',
    });
    // Missing: step_completed, onboarding_finished events
  }, []);

  return (
    <main>
      <h1>Welcome! Let&apos;s get set up.</h1>
      <p>Step 1 of 4</p>
    </main>
  );
}
