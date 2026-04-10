export default function ProfilePage() {
  return (
    <section className="stack-lg fade-up">
      <div className="section-header">
        <h1>Profile</h1>
        <p>Manage your premium membership, orders, and personal preferences.</p>
      </div>
      <div className="profile-card">
        <h3>Welcome back, Alex</h3>
        <p>Member status: <strong>Verde Reserve</strong></p>
        <p>Next refill reminder: April 20</p>
      </div>
      <div className="profile-card">
        <h3>Preferences</h3>
        <ul>
          <li>Preferred category: Oils</li>
          <li>Communication: Email + SMS</li>
          <li>Auto-restock: Enabled</li>
        </ul>
      </div>
    </section>
  );
}
