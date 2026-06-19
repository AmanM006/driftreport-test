// Dashboard Settings — NO Pendo instrumentation (telemetry gap / untracked)
export default function SettingsPage() {
  function handleSave() {
    // TODO: add pendo tracking here
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
