// Team Members page — completely untracked
export default function TeamPage() {
  function handleInvite() {
    // TODO: add pendo tracking
    console.log('invite sent');
  }

  function handleRemoveMember(id: string) {
    // TODO: add pendo tracking
    console.log('removing member', id);
  }

  return (
    <main>
      <h1>Team</h1>
      <button onClick={handleInvite}>Invite Member</button>
    </main>
  );
}
