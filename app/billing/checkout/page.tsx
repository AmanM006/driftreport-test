'use client';

// Billing Checkout — fully instrumented with Pendo
export default function CheckoutPage() {
  function handlePurchase() {
    // @ts-ignore
    window.pendo?.track('checkout_initiated', {
      plan: 'pro_annual',
      price: 299,
      currency: 'USD',
    });
  }

  function handleCouponApplied(code: string) {
    // @ts-ignore
    window.pendo?.track('coupon_applied', { code });
  }

  return (
    <main>
      <h1>Checkout</h1>
      <button onClick={handlePurchase}>Confirm Purchase</button>
    </main>
  );
}
