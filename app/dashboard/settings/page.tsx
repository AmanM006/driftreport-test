'use client';

export default function SettingsPage() {
  function handleSave() {
    // @ts-ignore
    window.pendo?.track('dashboard_settings_saved', {
      settingsChanged: true,
    });
    console.log('Settings saved');
  }

  return (
    <main>
      <h1>Settings</h1>
      <p>Manage your workspace preferences.</p>
      <button onClick={handleSave}>Save Changes</button>
    </main>
  );
}
