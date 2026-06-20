'use client';
import { useEffect, useState, useRef } from 'react';

const STEP_NAMES = ['account_setup', 'workspace_config', 'team_invite', 'preferences'];
const TOTAL_STEPS = STEP_NAMES.length;

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    // @ts-ignore
    window.pendo?.track('onboarding_started', {
      referralSource: document.referrer || 'direct',
    });
  }, []);

  function handleStepComplete() {
    // @ts-ignore
    window.pendo?.track('onboarding_step_completed', {
      stepNumber: currentStep,
      stepName: STEP_NAMES[currentStep - 1],
      totalSteps: TOTAL_STEPS,
    });

    if (currentStep >= TOTAL_STEPS) {
      const durationSeconds = Math.round((Date.now() - startTimeRef.current) / 1000);
      // @ts-ignore
      window.pendo?.track('onboarding_completed', {
        totalSteps: TOTAL_STEPS,
        durationSeconds,
      });
    } else {
      setCurrentStep((s) => s + 1);
    }
  }

  return (
    <main>
      <h1>Welcome! Let&apos;s get set up.</h1>
      <p>Step {currentStep} of {TOTAL_STEPS}</p>
      <button onClick={handleStepComplete}>
        {currentStep >= TOTAL_STEPS ? 'Finish' : 'Next Step'}
      </button>
    </main>
  );
}
