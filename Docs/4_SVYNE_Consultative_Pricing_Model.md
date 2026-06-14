# SVYNE. — Consultative Pricing Model

How to Communicate Price, Protect Margins, and Align Value.

---

## 1. The Core Philosophy: Why We Do NOT Sell "Off-The-Shelf"

To protect your margins and retain authority as an expert systems builder, you must never publish a single, rigid price list.

If you give a price immediately, you are viewed as a software vendor (an expense to be minimized). If you understand their problem first and then quote, you are viewed as a business partner (an investment that makes them money).

### The Pricing Rule

> "Every system I build is custom-fit. If I quote you a flat price now, I might charge you for features your team will never touch, or miss the exact bottleneck costing you thousands of dollars. Let's map your operational flow first, and then I will give you a quote tailored to what your business actually needs to grow."

---

## 2. The 3-Step Consultative Pricing Framework

When a client asks "What is the cost?", use this sequence:

1. **Acknowledge & Contextualize:** State clearly that you are a local custom builder, not a generic software corporation selling standard subscriptions.
2. **Define the Scope Window:** Let them know that you build modularly so they only pay for the features they actually use.
3. **The Operational Pivot:** Ask a diagnostic question to get them talking about their biggest operational headache or how they handle invoicing/lead capture currently.

---

## 3. Aligned Pricing Structures & Baselines

Because local businesses have different needs and revenue structures, you choose the pricing model that fits their operation:

### I. The Transaction / Revenue-Share Model (No-Risk Launch)

**Best Fit:** Transactional workflows, ticketing, or registration portals (e.g. local events, community sports, festivals, venues, artists). Ideal for tickets $20 and above. For lower‑priced tickets, contact us for a custom flat fee.

**The Deal:** $0 setup fee. You build and maintain the booking/ticketing system, and charge a small, per-ticket platform fee.

### How it works

- Client sets their ticket price (e.g., $45)
- Customer pays ticket price + platform fee (e.g., $49.66)
- Client receives their full ticket price guaranteed ($45)
- Svyne absorbs Stripe processing fees (e.g., $1.74 per ticket)
- Svyne keeps the platform fee difference (~$2.92 per ticket)
- Client owns all customer data

### SVYNE Fee Calculation (Transaction Model)

To protect profit margins while remaining highly competitive, SVYNE utilizes a **Continuous Softplus Blend** pricing engine to calculate the per-ticket platform fee. This blends a Stripe safety floor with a high-end service target, smoothing out the transition to prevent any abrupt pricing steps.

#### The Parameters

- **Stripe Processing Rate:** 2.9%
- **Stripe Fixed Fee:** $0.30
- **SVYNE Net Profit Floor:** $2.00
- **High-End Target Rate:** 6.45%
- **High-End Target Flat:** $1.75
- **Blending Smoothness ($k$):** 4.0

#### The Blended Formula

For any ticket price $P$, the fee is calculated as:
$$\text{Fee} = \max(\text{Fee}_{\text{softplus}}, \text{Fee}_{\text{floor}})$$

Where:

- **Safety Floor Fee:** $\text{Fee}_{\text{floor}} = \frac{2.00 + 0.029 \cdot P + 0.30}{1 - 0.029}$ (guarantees at least a $2.00 net profit after Stripe fees)
- **High-End Target Fee:** $\text{Fee}_{\text{target}} = 0.0645 \cdot P + 1.75$
- **Softplus Blended Fee:** $\text{Fee}_{\text{softplus}} = \frac{\ln\left( e^{4 \cdot \text{Fee}_{\text{target}}} + e^{4 \cdot \text{Fee}_{\text{floor}}} \right)}{4}$

---

### Price Comparison vs Eventbrite

Below is a comparison of SVYNE's transaction fees compared to Eventbrite:

| Ticket Price | SVYNE Fee (Blended) | Eventbrite Fee | Attendee Savings |
| :---: | :---: | :---: | :---: |
| **$25.00** | $3.44 | $3.44 | $0.00 |
| **$50.00** | $4.98 | $5.09 | $0.11 |
| **$100.00** | $8.20 | $8.39 | $0.19 |

*SVYNE fees calculated with $2.00 minimum net profit and 6.45% + $1.75 target. Eventbrite fees based on 2.9% + 3.7% + $1.79.*

---

**Why it works:** Total alignment. The client only pays when they make money, eliminating all upfront buying friction. No risk to try.

### Example Revenue

- 20 attendees × $45 ticket × 2 events/month = $1,800 client revenue
- Svyne earns ~$117/month from platform fees (based on $2.92 net profit per ticket)
- Scale: 10 clients = ~$1,170/month; 20 clients = ~$2,340/month

---

### II. The Operational Hub — Monthly Retainer (Subscription-Aligned)

**Best Fit:** Active local service and trade shops looking to replace clipboards, whiteboards, spreadsheets, and manual text alerts. (Auto shops, contractors, salons, restaurants, professional services.)

**The Deal:** Custom setup/mapping fee + monthly retainer.

### Tiers

### The "Automation Starter"

- Lead-capture forms
- Automatic 30-sec SMS responder
- Centralized lead list
- Basic dashboard
- **Setup:** $1,500 – $2,500
- **Monthly:** $99/mo

### The "Full Operational Hub"

- Custom Kanban dispatch pipeline
- Drag-and-drop crew/resource calendar
- Automated status texts to customers
- Text-to-pay invoicing
- Google reviews automation
- CRM with customer history
- Reporting dashboard
- **Setup:** $3,000 – $6,000+
- **Monthly:** $199 – $299/mo

### The "Enterprise Operations"

- Everything in Full Hub plus:
- Inventory tracking
- Multi-location support
- Advanced analytics
- Custom integrations
- Priority support
- **Setup:** $6,000 – $12,000+
- **Monthly:** $299 – $499/mo

---

### III. Simple Visual & Performance Fixes (One-Time Projects)

**Best Fit:** Upgrading a slow website to mobile-fast static pages, adding simple lead capture forms, or linking Facebook messages to a central inbox.

### The Deal

- Flat project fee: $750 – $1,500 based on scope
- Minor monthly fee: $29 – $49/mo for hosting and backups

---

### IV. The "Risk-Free" Case Study Offer (Early Local Strategy)

**Best Fit:** Your first 3 local portfolio-builders in Saraland/Chickasaw/Mobile.

### The Deal (2)

- Low, nominal setup fee: $250 – $500 (covers basic deployment and API costs)
- Monthly: $99/mo
- *Note: Transaction model clients pay no monthly fee – only the per-ticket transaction fee.*

### In Exchange

- The client commits to a video testimonial
- A written Google review
- Introducing you to two other local business owners

**Why it works:** You build proof, they get a deal, and you get referrals in a tight-knit community.

**Hard cutoff:** After 3 case studies, full pricing resumes. No exceptions.

---

## 4. How to Choose the Right Model for Each Client

| Client Type | Recommended Model | Why |
| ------------- | ------------------- | ----- |
| Event venue, artist, festival | Transaction/Revenue-Share | They make money per ticket. You align with their success. |
| Auto shop, contractor, salon | Operational Hub — Starter or Full | They need daily workflow management, not per-transaction fees. |
| Restaurant with reservations | Hybrid: Transaction for reservations + Operational Hub for CRM | Dual revenue stream from one client. |
| Professional service (lawyer, accountant) | Operational Hub — Starter | Lead capture and appointment scheduling. |
| Retail shop | Operational Hub — Full | Inventory + CRM + scheduling. |
| Any business needing website fix | Simple Visual Fix | Quick win, entry point for upsell later. |

---

## 5. How to Handle Price Objections Live

If they push hard for a ballpark figure on the phone or over chat, use this script:

> "For a typical local shop in our area, a baseline setup ranges from $1,500 to $3,000 for a fully automated client-update and lead system, plus about $99/month for active backups and system maintenance. For event systems, I often charge nothing upfront and instead take a small fee per ticket sold.
>
> However, before we talk numbers, I want to make sure I'm not overbuilding or charging you for tools your team won't use. Let's do a free 15-minute workflow audit. I'll map out your current steps, and then I'll give you a quote tailored to your exact business."

---

## 6. The Value Conversation (Not the Price Conversation)

Never lead with price. Lead with the operational leak.

### Questions to ask during the audit

- "How many leads did you lose last month because you forgot to follow up?"
- "How much time does your team spend re-entering customer information?"
- "How many double bookings or scheduling conflicts did you have this month?"
- "Do you know who your top 20 customers are and when they last visited?"
- "How much revenue do you think walks out the door because you don't have a system?"

When they answer, the price becomes irrelevant. The cost of doing nothing becomes the real conversation.

---

## 7. Svyne Pricing Promise

- No hidden fees. Ever.
- No long-term contracts. Cancel anytime with 30 days notice.
- No customer data lock-in. Your data is yours, always.
- Modular pricing. Pay only for what you use.
- Value-aligned. If you don't make money, we don't make money (on transaction models).
