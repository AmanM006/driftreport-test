'use client';

// Home / Landing — fully instrumented
export default function HomePage() {
  function handleCTA() {
    // @ts-ignore
    window.pendo?.track('cta_clicked', {
      button: 'get_started',
      page: 'home',
    });
  }

  return (
    <main>
      <h1>Welcome to Acme</h1>
      <p>The platform built for modern teams.</p>
      <button onClick={handleCTA}>Get Started</button>
    </main>
  );
}
