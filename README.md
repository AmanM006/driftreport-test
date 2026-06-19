# driftreport-test

A realistic Next.js 14 App Router codebase for testing [DriftReport](https://github.com/AmanM006/driftreport).

## Purpose

This repo is designed to simulate a **real SaaS application** with a mix of Pendo telemetry coverage:

| Route | Coverage |
|-------|----------|
| `/` | ✅ Covered |
| `/dashboard` | ⚠️ Partial |
| `/dashboard/analytics` | ✅ Covered |
| `/dashboard/settings` | ❌ Untracked |
| `/onboarding` | ⚠️ Partial |
| `/billing/checkout` | ✅ Covered |
| `/billing/invoices` | ❌ Untracked |
| `/profile` | ⚠️ Partial |
| `/profile/security` | ✅ Covered |
| `/team` | ❌ Untracked |
| `/settings/notifications` | ⚠️ Partial |

## How to Test

1. Go to [driftreport.vercel.app](https://driftreport.vercel.app)
2. Paste `github.com/AmanM006/driftreport-test` as the GitHub URL
3. Enter your Pendo integration key
4. Hit **Analyze**

## Structure

```
app/
  page.tsx                        # / — Home (covered)
  layout.tsx                      # Pendo snippet installed
  dashboard/
    page.tsx                      # /dashboard (partial)
    analytics/page.tsx            # /dashboard/analytics (covered)
    settings/page.tsx             # /dashboard/settings (untracked)
  onboarding/page.tsx             # /onboarding (partial)
  billing/
    checkout/page.tsx             # /billing/checkout (covered)
    invoices/page.tsx             # /billing/invoices (untracked)
  profile/
    page.tsx                      # /profile (partial)
    security/page.tsx             # /profile/security (covered)
  team/page.tsx                   # /team (untracked)
  settings/
    notifications/page.tsx        # /settings/notifications (partial)
```
