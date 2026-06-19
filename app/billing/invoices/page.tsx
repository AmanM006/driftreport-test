// Billing Invoices — completely untracked (no Pendo)
export default function InvoicesPage() {
  return (
    <main>
      <h1>Invoices</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2024-06-01</td>
            <td>$299</td>
            <td>Paid</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
