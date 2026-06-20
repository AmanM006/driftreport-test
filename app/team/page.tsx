'use client';

export default function TeamPage() {
  function handleInvite() {
    // @ts-ignore
    window.pendo?.track('team_member_invited', {
      inviteeRole: 'member',
    });
    console.log('invite sent');
  }

  function handleRemoveMember(id: string) {
    // @ts-ignore
    window.pendo?.track('team_member_removed', {
      memberId: id,
    });
    console.log('removing member', id);
  }

  return (
    <main>
      <h1>Team</h1>
      <button onClick={handleInvite}>Invite Member</button>
    </main>
  );
}
