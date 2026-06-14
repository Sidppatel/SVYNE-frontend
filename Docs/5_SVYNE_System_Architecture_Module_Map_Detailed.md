# SVYNE. — System Architecture & Module Map

## Master Blueprint for Solo Development & Client Delivery

### Version: 1.0 | Author: Siddh Patel | Date: June 2026

---

## TABLE OF CONTENTS

1. [Philosophy & Constraints](#1-philosophy--constraints)
1. [System Architecture Overview](#2-system-architecture-overview)
1. [Core Module Library](#3-core-module-library)
1. [Specialized Modules](#4-specialized-modules)
1. [Client Extension Layer](#5-client-extension-layer)
1. [Pricing Model Integration](#6-pricing-model-integration)
1. [Development Roadmap](#7-development-roadmap)
1. [Client Onboarding Flow](#8-client-onboarding-flow)
1. [Technical Stack Decisions](#9-technical-stack-decisions)
1. [Risk Mitigation](#10-risk-mitigation)

---

## 1. Philosophy & Constraints

### The Solo Developer Constraint

You are ONE person. Every architectural decision must answer:

> "Can I build, deploy, and maintain this alone while also selling and supporting clients?"

If the answer is no, the feature waits.

### The "Client-First" Build Rule

> **Never build a module before you have a paying client who needs it.**

Build for the client in front of you. Extract the reusable parts. Sell the extracted module to the next client. This is how solo developers scale without a team.

### The Data Ownership Covenant

Every module must support:

- Client owns 100% of their data
- Full export capability (SQL/JSON)
- No data used by Svyne for any purpose
- Migration documentation if client leaves

### The Modular Promise

- Core modules are reusable across all clients
- Client extensions are isolated and don't touch core code
- Upgrading core never breaks client extensions
- New clients get faster delivery as module library grows

---

## 2. System Architecture Overview

### High-Level Architecture Diagram

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                              CLIENT LAYER                                    │
│  (What the business owner and their customers see)                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐              │
│  │  Client Admin   │  │  Public-Facing  │  │  Embedded       │              │
│  │  Dashboard      │  │  Booking/Ticket │  │  Widgets        │              │
│  │  (React SPA)    │  │  Portal         │  │  (iframe)       │              │
│  └────────┬────────┘  └────────┬────────┘  └────────┬────────┘              │
│           │                    │                    │                        │
│           └────────────────────┼────────────────────┘                        │
│                                │                                            │
│                                ▼                                            │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                         API GATEWAY (C# / .NET)                    │   │
│  │  • Authentication & Authorization (JWT)                          │   │
│  │  • Rate Limiting                                                   │   │
│  │  • Request Validation                                              │   │
│  │  • Tenant Isolation (multi-client)                                 │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                │                                            │
├────────────────────────────────┼────────────────────────────────────────────┤
│                              CORE LAYER                                      │
│  (What Siddh builds and maintains)                                        │
├────────────────────────────────┼────────────────────────────────────────────┤
│                                │                                            │
│                                ▼                                            │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                      CORE MODULE CONTROLLER                        │   │
│  │  • Module Registry (what modules are active per client)            │   │
│  │  • Feature Flags (enable/disable features)                          │   │
│  │  • Tenant Context (which client is requesting)                     │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                │                                            │
│           ┌────────────────────┼────────────────────┐                      │
│           │                    │                    │                      │
│           ▼                    ▼                    ▼                      │
│  ┌──────────────┐   ┌──────────────┐   ┌──────────────┐                │
│  │  CRM MODULE  │   │  SCHEDULING  │   │  FINANCIAL   │                │
│  │              │   │  MODULE      │   │  MODULE      │                │
│  │ • Leads      │   │              │   │              │                │
│  │ • Customers  │   │ • Calendar   │   │ • Estimates  │                │
│  │ • Contacts   │   │ • Appointments│  │ • Quotes     │                │
│  │ • Marketing  │   │ • Dispatch   │   │ • Invoices   │                │
│  │   Lists      │   │ • Resources  │   │ • Payments   │                │
│  └──────────────┘   └──────────────┘   └──────────────┘                │
│                                                                              │
│  ┌──────────────┐   ┌──────────────┐   ┌──────────────┐                │
│  │  OPERATIONS  │   │  INVENTORY   │   │  COMMUNICATION│               │
│  │  MODULE      │   │  MODULE      │   │  MODULE       │               │
│  │              │   │              │   │               │               │
│  │ • Work Orders│   │ • Stock      │   │ • SMS         │               │
│  │ • Projects   │   │ • Assets     │   │ • Email       │               │
│  │ • Tasks      │   │ • Suppliers  │   │ • Notifications│              │
│  │ • Kanban     │   │              │   │ • Reviews     │               │
│  └──────────────┘   └──────────────┘   └──────────────┘                │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │              SPECIALIZED MODULE: EVENT MANAGEMENT                  │   │
│  │                                                                      │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐             │   │
│  │  │  Ticketing   │  │  Seating     │  │  Attendee    │             │   │
│  │  │  & Sales     │  │  Chart       │  │  Management  │             │   │
│  │  └──────────────┘  └──────────────┘  └──────────────┘             │   │
│  │                                                                      │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐             │   │
│  │  │  Event       │  │  Widget      │  │  Check-in    │             │   │
│  │  │  Analytics   │  │  Embedder    │  │  & QR Codes  │             │   │
│  │  └──────────────┘  └──────────────┘  └──────────────┘             │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                         EXTENSION LAYER                                      │
│  (Client-specific customizations, isolated from core)                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                    CLIENT EXTENSION CONTAINER                      │   │
│  │                                                                      │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐             │   │
│  │  │  Client A    │  │  Client B    │  │  Client C    │             │   │
│  │  │  (Auto Shop) │  │  (Event      │  │  (Contractor)│             │   │
│  │  │              │  │   Venue)     │  │              │             │   │
│  │  │ • Custom     │  │ • Custom     │  │ • Custom     │             │   │
│  │  │   workflow   │  │   seating    │  │   dispatch   │             │   │
│  │  │ • Branded    │  │   rules      │  │   logic      │             │   │
│  │  │   dashboard  │  │ • Artist     │  │ • Job        │             │   │
│  │  │ • Specific   │  │   payouts    │  │   costing    │             │   │
│  │  │   reports    │  │              │  │              │             │   │
│  │  └──────────────┘  └──────────────┘  └──────────────┘             │   │
│  │                                                                      │   │
│  │  Each extension communicates with core ONLY through:               │   │
│  │  • Versioned API                                                   │   │
│  │  • React prop SDK                                                  │   │
│  │  • Strict contract (core upgrades never break extensions)          │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                         INFRASTRUCTURE LAYER                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │
│  │  PostgreSQL  │  │  Stripe      │  │  Cloud       │  │  CDN /       │   │
│  │  Database    │  │  Connect     │  │  Run (GCP)   │  │  Cloudflare  │   │
│  │              │  │              │  │              │  │              │   │
│  │ • JSONB for  │  │ • Payment    │  │ • Auto-scale │  │ • Static     │   │
│  │   flexible   │  │   processing │  │ • Serverless │  │   assets     │   │
│  │   schemas    │  │ • Payouts    │  │ • Cost-      │  │ • Edge       │   │
│  │ • Row-level  │  │ • Fee splits │  │   efficient  │  │   caching    │   │
│  │   security   │  │              │  │              │  │              │   │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Core Module Library

### 3.1 CRM Module

**Purpose:** Centralize all customer and lead information.

### Features

- Lead capture forms (embeddable on client websites)
- Lead scoring and status tracking (New → Contacted → Qualified → Converted → Lost)
- Customer profiles with full history
- Contact management (phone, email, address, preferences)
- Marketing list segmentation
- Automated follow-up sequences (SMS/email)
- Notes and activity timeline
- Document attachments

### Data Model

```text
leads
├── id (UUID)
├── tenant_id (FK)
├── source (website, facebook, referral, walk-in)
├── status (enum)
├── contact_info (JSONB)
├── notes (text)
├── assigned_to (user_id)
├── created_at, updated_at
└── custom_fields (JSONB)

customers
├── id (UUID)
├── tenant_id (FK)
├── lead_id (FK, nullable)
├── profile (JSONB)
├── lifetime_value (decimal)
├── last_contact_date
├── tags (array)
└── custom_fields (JSONB)
```

**Reusability:** 100% — every client needs CRM.

**Current Status:** 🔄 Needs to be built. Extract from event attendee logic.

---

### 3.2 Scheduling Module

**Purpose:** Manage appointments, resources, and calendars.

### Features (2)

- Calendar views (day, week, month, resource)
- Appointment booking with availability rules
- Resource allocation (rooms, equipment, staff)
- Drag-and-drop rescheduling
- Recurring appointments
- Buffer times between appointments
- Conflict detection
- Customer self-booking portal
- SMS/email reminders

### Data Model (2)

```text
appointments
├── id (UUID)
├── tenant_id (FK)
├── customer_id (FK)
├── resource_id (FK)
├── start_time, end_time
├── status (scheduled, confirmed, completed, cancelled, no-show)
├── service_type
├── notes
└── reminder_sent (boolean)

resources
├── id (UUID)
├── tenant_id (FK)
├── name
├── type (staff, room, equipment, vehicle)
├── availability_schedule (JSONB)
└── capacity
```

**Reusability:** 95% — most clients need scheduling. Event venues use it for event dates.

**Current Status:** 🔄 Needs to be built. Extract from event date management.

---

### 3.3 Financial Module

**Purpose:** Estimates, quotes, invoicing, and payments.

### Features (3)

- Estimate creation and approval workflow
- Quote generation with line items
- Invoice creation (manual or automated)
- Payment processing (Stripe integration)
- Text-to-pay (SMS with payment link)
- Payment status tracking
- Overdue reminders
- Revenue reporting
- Tax calculation

### Data Model (3)

```text
invoices
├── id (UUID)
├── tenant_id (FK)
├── customer_id (FK)
├── invoice_number
├── line_items (JSONB array)
├── subtotal, tax, total
├── status (draft, sent, viewed, paid, overdue, cancelled)
├── payment_method
├── stripe_payment_intent_id
├── sent_date, due_date, paid_date
└── notes

estimates
├── id (UUID)
├── tenant_id (FK)
├── customer_id (FK)
├── estimate_number
├── line_items (JSONB array)
├── total
├── status (draft, sent, approved, declined, converted)
└── expiry_date
```

**Reusability:** 90% — every client needs invoicing. Event clients need it for ticket revenue reconciliation.

**Current Status:** 🔄 Partially exists in Stripe Connect logic. Needs standalone extraction.

---

### 3.4 Operations Module

**Purpose:** Work orders, projects, task tracking, and dispatch.

### Features (4)

- Work order creation and assignment
- Project management with milestones
- Task tracking with priorities
- Kanban board view (drag-and-drop)
- Dispatch board for field teams
- Status updates with automated customer notifications
- Photo/document attachments
- Time tracking
- Completion signatures

### Data Model (4)

```text
work_orders
├── id (UUID)
├── tenant_id (FK)
├── customer_id (FK)
├── title, description
├── assigned_to (user_id)
├── status (pending, in-progress, on-hold, completed, cancelled)
├── priority (low, medium, high, urgent)
├── due_date, completed_date
├── photos (JSONB array of URLs)
└── notes

projects
├── id (UUID)
├── tenant_id (FK)
├── name, description
├── status (planning, active, on-hold, completed)
├── milestones (JSONB)
├── start_date, end_date
└── budget
```

**Reusability:** 80% — contractors and shops need this. Event venues don't.

**Current Status:** 🔄 Needs to be built. Start when you have a contractor client.

---

### 3.5 Inventory Module

**Purpose:** Stock tracking and asset management.

### Features (5)

- Product/service catalog
- Stock levels with low-stock alerts
- Purchase orders
- Supplier management
- Asset tracking (equipment, vehicles)
- Usage history
- Cost tracking

### Data Model (5)

```text
inventory_items
├── id (UUID)
├── tenant_id (FK)
├── sku, name, description
├── category
├── quantity_on_hand
├── reorder_point
├── unit_cost, unit_price
├── supplier_id (FK)
└── location

assets
├── id (UUID)
├── tenant_id (FK)
├── name, description
├── asset_type (equipment, vehicle, tool)
├── purchase_date, purchase_price
├── status (active, maintenance, retired)
└── maintenance_history (JSONB)
```

**Reusability:** 60% — only product-based businesses need this.

**Current Status:** ⏳ Do not build until you have a client who needs it.

---

### 3.6 Communication Module

**Purpose:** Centralized messaging, notifications, and reviews.

### Features (6)

- Two-way SMS (Twilio integration)
- Email templates and campaigns

n- In-app notifications

- Automated status updates to customers
- Review request automation (Google, Yelp)
- Message history per customer
- Broadcast messaging (promotions, updates)

### Data Model (6)

```text
messages
├── id (UUID)
├── tenant_id (FK)
├── customer_id (FK)
├── channel (sms, email, in-app)
├── direction (inbound, outbound)
├── content
├── status (sent, delivered, read, failed)
├── sent_at
└── automated (boolean)

templates
├── id (UUID)
├── tenant_id (FK)
├── name
├── channel (sms, email)
├── subject (email only)
├── body
├── variables (JSONB)
└── trigger (manual, automated, event-based)
```

**Reusability:** 100% — every client needs communication.

**Current Status:** 🔄 Needs to be built. Start with SMS auto-responder.

---

## 4. Specialized Modules

### 4.1 Event Management Module (The "L&A Studios" Module)

**Purpose:** Complete event ticketing, seating, and attendee management.

### Sub-Modules

#### 4.1.1 Ticketing & Sales

- Event creation and configuration
- Ticket tier management (General, VIP, Early Bird, Group)
- Promo codes and discounts
- Inventory management (tickets available)
- Sales tracking and reporting
- Revenue reconciliation

#### 4.1.2 Seating Chart Designer

- Blank grid allocation (rows/columns)
- Drag-and-drop table placement
- Table types (VIP Booth, Main Floor, High-Top, General)
- Seat capacity assignment per table
- Price assignment per table/section
- Save layout as JSONB
- Real-time availability display

#### 4.1.3 Attendee Management

- Attendee list with check-in status
- QR code generation per ticket
- Check-in via mobile scanner
- Walk-in registration
- Attendee notes and preferences
- Group/party management

#### 4.1.4 Widget Embedder

- iframe generation for client websites
- Responsive design
- Theme customization (colors, fonts, border radius)
- Data attributes for configuration
- Secure token passing
- Mobile-optimized

#### 4.1.5 Event Analytics

- Ticket sales velocity
- Revenue by ticket tier
- Attendee demographics
- Marketing source tracking
- No-show rates
- Repeat attendee tracking

### Data Model (7)

```text
events
├── id (UUID)
├── tenant_id (FK)
├── name, description
├── venue, address
├── start_time, end_time
├── status (draft, published, live, completed, cancelled)
├── ticketing_mode (seated, general_admission, hybrid)
├── layout_json (JSONB, for seated events)
└── settings (JSONB)

tickets
├── id (UUID)
├── tenant_id (FK)
├── event_id (FK)
├── customer_id (FK)
├── ticket_type
├── seat_assignment (JSONB, for seated)
├── price_paid
├── qr_code
├── status (active, used, refunded, cancelled)
└── purchase_date
```

**Reusability:** 40% — only event clients use this. But it's your differentiator.

**Current Status:** ✅ Mostly built. Needs modularization and widget extraction.

---

## 5. Client Extension Layer

### 5.1 Extension Architecture

Every client gets:

1. **Core modules** (standard, no customization)
1. **Configuration** (feature flags, settings, branding)
1. **Extensions** (custom code, isolated from core)

```text
Extension Container
├── client_id (UUID)
├── extension_manifest (JSONB)
│   ├── name
│   ├── version
│   ├── dependencies (core modules required)
│   └── api_version
├── custom_components (React components)
│   ├── DashboardWidgets/
│   ├── ReportViews/
│   └── FormFields/
├── custom_logic (C# handlers)
│   ├── WorkflowRules/
│   ├── Calculations/
│   └── Integrations/
└── database_views (SQL views for custom reporting)
```

### 5.2 API Contract

Extensions communicate with core through:

```csharp
// Core API Interface (versioned, stable)
public interface ICoreApi_v1
{
    Task<Customer> GetCustomerAsync(Guid customerId);
    Task<Invoice> CreateInvoiceAsync(InvoiceRequest request);
    Task SendNotificationAsync(NotificationRequest request);
    Task<AnalyticsData> GetAnalyticsAsync(AnalyticsQuery query);
    // ... stable, versioned methods
}

// Extension implements this interface
public class ClientExtension : ICoreApi_v1
{
    // Custom logic here, calling core through API only
}
```

### 5.3 Example: Love & Adventure Studios Extension

```text
L&A Studios Extension
├── Custom Seating Rules
│   └── Artist payout calculation per table
├── Custom Dashboard
│   └── Event profitability by artist
├── Custom Reports
│   └── Monthly artist performance summary
├── Custom Integration
│   └── The Frenchmen venue calendar sync
└── Custom Workflow
    └── Automatic artist payment after event completion
```

### 5.4 Example: Auto Shop Extension (Future)

```text
Auto Shop Extension
├── Custom Workflow
│   └── Vehicle intake → Inspection → Estimate → Approval → Work → Completion
├── Custom Dashboard
│   └── Bay utilization chart
├── Custom Reports
│   └── Technician efficiency by job type
├── Custom Integration
│   └── Parts supplier API for inventory
└── Custom Logic
    └── Automatic insurance estimate submission
```

---

## 6. Pricing Model Integration

### 6.1 How Pricing Maps to Modules

| Client Type | Primary Model | Active Modules | Revenue per Client |
| ------------- | -------------- | ---------------- | ------------------- |
| Event Venue | Model A (Transaction) | Event Mgmt + CRM + Comm | ~$200-400/mo |
| Artist/Performer | Model A (Transaction) | Event Mgmt + CRM + Comm | ~$100-300/mo |
| Auto Shop | Model B (Retainer) | CRM + Scheduling + Ops + Financial | ~$199-299/mo |
| Contractor | Model B (Retainer) | CRM + Scheduling + Ops + Financial | ~$199-299/mo |
| Salon/Spa | Model B (Retainer) | CRM + Scheduling + Comm | ~$99-199/mo |
| Restaurant | Hybrid (A + B) | Scheduling + CRM + Event Mgmt | ~$150-250/mo |
| Retail Shop | Model B (Retainer) | CRM + Inventory + Financial | ~$199-299/mo |

### 6.2 Module Activation by Tier

### Automation Starter ($99/mo)

- CRM (Leads only)
- Communication (SMS auto-responder)
- Basic Dashboard

### Full Operational Hub ($199-299/mo)

- CRM (Full)
- Scheduling
- Operations (Kanban)
- Financial (Invoicing)
- Communication (Full)
- Reporting

### Enterprise ($299-499/mo)

- Everything in Full Hub
- Inventory
- Custom Extensions
- Advanced Analytics
- Priority Support

### Event Management (Model A — per ticket)

- Event Mgmt Module (all sub-modules)
- CRM (Attendees)
- Communication (Event notifications)
- No monthly base fee

---

## 7. Development Roadmap

### 7.1 Priority Matrix

| Module | Client Need | Build Effort | Business Impact | Priority |
| -------- | ------------ | -------------- | ----------------- | ---------- |
| Event Mgmt (modularize) | ✅ L&A Studios | Medium | High | P1 — NOW |
| CRM (basic) | 🔄 All clients | Medium | High | P1 — NOW |
| Communication (SMS) | 🔄 All clients | Low | High | P1 — NOW |
| Scheduling | 🔄 Most clients | Medium | High | P2 — Q3 2026 |
| Financial (standalone) | 🔄 Most clients | Medium | Medium | P2 — Q3 2026 |
| Operations (Kanban) | ⏳ Contractor | High | Medium | P3 — Q4 2026 |
| Inventory | ⏳ Retail | High | Low | P4 — 2027 |
| Advanced Analytics | ⏳ Enterprise | Medium | Low | P4 — 2027 |

### 7.2 Build Sequence (Solo Developer Optimized)

### Phase 1: Foundation (June — August 2026)

1. Modularize Event Management (extract from L&A codebase)
1. Build basic CRM (leads, customers, contacts)
1. Build SMS auto-responder (Twilio integration)
1. Create widget embedder (iframe generation)
1. Close L&A Studios contract
1. Complete 3 case studies

### Phase 2: Core Expansion (September — December 2026)

1. Build Scheduling module (calendar, appointments)
1. Build Financial module (invoices, estimates)
1. Build Communication module (email, notifications)
1. Create industry playbooks (event, auto shop, contractor)
1. Target: 5-7 clients

### Phase 3: Operational Depth (January — June 2027)

1. Build Operations module (Kanban, work orders)
1. Build Dispatch board (for contractors)
1. Build Text-to-Pay (Stripe + SMS)
1. Build Google Reviews automation
1. Target: 10-12 clients

### Phase 4: Scale (July 2027 — 2028)

1. Inventory module (when needed)
1. Advanced analytics
1. Partner agency network
1. White-label offering
1. Target: 15-20 clients

### 7.3 The "One Client, One Module" Rule

For every new module:

1. Find a client who needs it
1. Build it for them (custom extension if needed)
1. Extract the reusable 80% into a core module
1. Document it in the playbook
1. Sell it to the next client

This ensures you never build without revenue attached.

---

## 8. Client Onboarding Flow

### 8.1 The 7-Day Onboarding

```text
Day 0: Operational Flow Audit (15 min, free)
        └─> Identify biggest bottleneck
        └─> Sketch current workflow
        └─> Determine module fit

Day 1-2: Build offline mockup
         └─> Use client's logo and colors
         └─> Show their actual workflow
         └─> Run on tablet/laptop at their location

Day 3: Present mockup and quote
       └─> Show, don't tell
       └─> Quote based on modules needed
       └─> Sign contract

Day 4-6: System assembly
         └─> Activate core modules
         └─> Configure settings
         └─> Build custom extension if needed
         └─> Import existing data (if available)

Day 7: Training and launch
        └─> 30-minute training session
        └─> Provide simple documentation
        └─> Go live
        └─> Schedule 30-day check-in
```

### 8.2 Data Migration Strategy

For clients coming from spreadsheets:

1. Client provides Excel/CSV export
1. Svyne provides import template
1. Client maps columns to Svyne fields
1. Svyne validates and imports
1. Client verifies accuracy

For clients coming from other software:

1. Export data from existing system
1. Svyne provides migration mapping document
1. Import into Svyne
1. Verify and reconcile

---

## 9. Technical Stack Decisions

### 9.1 Current Stack (Confirmed)

| Layer | Technology | Reason |
| ------- | ----------- | -------- |
| Backend | C# / .NET Core | Your expertise, enterprise-grade |
| Database | PostgreSQL | JSONB flexibility, row-level security |
| Frontend | React | Component-based, matches module architecture |
| Hosting | Google Cloud Run | Serverless, auto-scale, cost-efficient |
| CDN | Cloudflare | Edge caching, fast widget delivery |
| Payments | Stripe Connect | Platform payouts, fee splitting |
| SMS | Twilio | Reliable, programmable |
| Email | SendGrid / AWS SES | Transactional and marketing |

### 9.2 Module Communication Pattern

```text
Core Module A (CRM)
    │
    ├──> API Contract (REST/GraphQL)
    │
    ├──> Core Module B (Scheduling) — "Get customer appointments"
    │
    ├──> Core Module C (Financial) — "Get customer invoices"
    │
    ├──> Client Extension — "Custom customer report"
    │
    └──> External Integration — "Sync to Mailchimp"
```

### 9.3 Database Strategy

### Single Database, Logical Separation

- One PostgreSQL instance
- Row-level security via `tenant_id`
- JSONB for flexible schemas (event layouts, custom fields)
- Isolated schemas for client extensions if needed

### Why this works for solo

- One database to manage
- Lower hosting costs
- Simpler backups
- Easy to query across modules

### Risk mitigation

- Daily automated backups
- Point-in-time recovery enabled
- Test restore monthly
- Export client data on request

---

## 10. Risk Mitigation

### 10.1 Solo Developer Risks

| Risk | Likelihood | Impact | Mitigation |
| ------ | ----------- | -------- | ------------ |
| Burnout | High | Critical | Only build for paying clients. No speculative features. |
| Scope creep | High | High | Strict module activation. Say no to custom requests outside playbooks. |
| Client dependency | Medium | High | Document everything. Train clients on self-service. |
| Technical debt | Medium | High | Refactor quarterly. No shortcuts for "just this one client." |
| Revenue inconsistency | High | Medium | Mix Model A (transaction) and Model B (retainer) for cash flow stability. |
| Competition | Low | Medium | Local presence + custom service = moat. National players can't compete on relationship. |

### 10.2 The "What If I Get Sick" Plan

- Document every system (architecture, deployment, client configs)
- Use infrastructure as code (Terraform / Pulumi)
- Automated monitoring and alerts
- Emergency contact list for each client
- Simplified runbook for basic support
- Consider retainer with local developer for emergency coverage

### 10.3 The "Client Leaves" Plan

- Data export is guaranteed and automated
- No vendor lock-in messaging from day one
- Client owns their domain, email, social accounts
- Svyne only owns the code, not the data
- Offboarding process documented and tested

---

## APPENDIX A: Module Readiness Checklist

Before marking a module "production ready":

- [ ] Built for at least one paying client
- [ ] Extracted from client-specific code
- [ ] Documented API contract
- [ ] Unit tests for core logic
- [ ] Integration tests for API endpoints
- [ ] Basic UI components in component library
- [ ] Playbook entry with screenshots
- [ ] Pricing tier assigned
- [ ] Support documentation written
- [ ] Demo data available for mockups

---

## APPENDIX B: Client Discovery Questions

Use these during the Operational Flow Audit to identify module needs:

### CRM & Leads

- "How do new customers find you?"
- "Where do you write down contact information?"
- "How many leads did you lose last month because you forgot to follow up?"

### Scheduling

- "How do you currently schedule appointments?"
- "How many double-bookings or conflicts did you have this month?"
- "Do customers book online, or only by phone?"

### Financial

- "How do you create invoices?"
- "How long does it take to get paid after completing work?"
- "Do you know your outstanding receivables right now?"

### Operations

- "How do you track work in progress?"
- "How do you know if a job is on schedule?"
- "How do you communicate status updates to customers?"

### Events (if applicable)

- "How do you sell tickets?"
- "How do you track who's coming?"
- "Do you keep a list of attendees for future marketing?"

---

## APPENDIX C: The Honest Numbers

### Development Velocity (Solo Developer)

| Task Type | Estimated Hours | Realistic Calendar Time |
| ----------- | ---------------- | ------------------------ |
| New core module (from scratch) | 40-80 hours | 2-4 weeks |
| Client extension | 20-40 hours | 1-2 weeks |
| Mockup build | 8-16 hours | 2-3 days |
| Client onboarding | 8-12 hours | 1 week |
| Support per client (monthly) | 2-4 hours | Ongoing |
| Sales & marketing | 10-20 hours/week | Ongoing |

### Capacity Math

- Available hours per week: ~40 (assuming some part-time work elsewhere)
- Development hours per week: ~20 (after sales, support, admin)
- Modules per quarter: 1-2 (realistic)
- New clients per quarter: 1-2 (while building)
- Clients per quarter (after modules built): 2-3

### Revenue Timeline

| Quarter | Clients | Monthly Revenue | Status |
| --------- | --------- | ---------------- | -------- |
| Q3 2026 | 1-2 | $200-500 | Side project |
| Q4 2026 | 3-5 | $500-1,500 | Supplemental |
| Q1 2027 | 5-8 | $1,500-2,500 | Growing |
| Q2 2027 | 8-12 | $2,500-4,000 | Significant |
| Q3 2027 | 12-15 | $4,000-5,500 | Approaching main |
| Q4 2027 | 15-18 | $5,500-7,000 | Near main income |
| 2028 | 18-25 | $7,000-10,000 | Main income achieved |

---

*Document built for Siddh Patel, Svyne founder and solo developer.*
*Last updated: June 2026*
*Next review: September 2026 (after Phase 1 completion)*
