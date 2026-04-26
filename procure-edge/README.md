# ProcurEdge
ProcurEdge is an intelligent B2B procurement platform that transforms static 2D engineering blueprints into interactive bidding workspaces. Featuring real-time WebSocket bidding and AI-driven vendor analysis, ProcurEdge automates the entire industrial handshake—from creating an initial Request for Quote (RFQ) to awarding a contract and generating a final PDF Purchase Order.

In traditional industrial procurement, Buyers manage "Requests for Quote" (RFQs) for complex assemblies (like a 500-part gearbox or a 50-component pump) using disconnected spreadsheets and hundreds of legacy 2D technical drawings in static PDF format. Buyers must manually extract component data, and vendors bid without context. A vendor might offer a slightly cheaper bearing, but if they have a history of late deliveries on that specific component type, that cheap part halts the entire assembly line, costing the company millions.

### The Solution

A centralized Next.js application that leverages visual intelligence to make engineering data actionable. Buyers upload standard 2D technical drawings, which are automatically parsed by Gemini Vision AI. Gemini extracts the Bill of Materials (BOM) table and identifies the geometric coordinates of callout balloons (like ①, ④, ⑩).

The platform transforms these coordinates into clickable visual hot spots. A buyer can click directly on the balloon ④ for a specific gear, instantly isolating all historical reliability and current bidding data for that exact component. Vendors submit bids in real-time, and an AI worker analyzes historical reliability against current pricing, recommending the optimal, highest-ROI vendor while mitigating supply chain risk.

### The Technical Architecture

- **Frontend UI & 3D:** React 18, Next.js (App Router), Material-UI (MUI) Data Grid.
- **State Management:** Zustand.
- **Backend API:** Next.js Server Actions (for secure, server-side data mutations).
- **Database & ORM:** PostgreSQL hosted on Supabase, queried via Prisma ORM.
- **Real-Time Sync:** Supabase Realtime (WebSocket wrapper).
- **Performance Optimization:** Native Web Workers API (Main-thread preservation).
- **AI/Logic Engine:** Google Gemini 2.5 Flash API (Strict JSON Structured Outputs) & Gemini Vision AI.