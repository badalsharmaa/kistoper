# Contact & Trust System Decisions - June 12, 2026

## 1. Unified Email Address Migration
- **Decision:** Replaced all developer/legacy emails (`export@shivanshinternational.com`, `info@shivanshinternational.com`, `info@kistoper.com`, and `shivanshinternationalagra@gmail.com`) with a single official address: `shivanshinternationalindia@gmail.com`.
- **Rationale:** Ensures all contact forms, direct email links, and automated responses target the correct mailbox, avoiding inbox fragmentation.

## 2. Multi-Phone Display (Primary & Secondary)
- **Decision:** Integrated both `+91 90584 39992` (Primary) and `+91 70373 94791` (Secondary) in the contact sidebar, footer, and chatbot response flows.
- **Rationale:** The prompt requested both numbers. Displaying both primary and secondary contact channels increases client reaching options and reinforces reliability. Text styling was adjusted to `text-base` for responsive layout safety to avoid wrapping on mobile viewports.

## 3. Services Page Trust Signal Integration
- **Decision:** Added a premium "Government Registered & Certified" trust section containing the Import Export Code (`IEC NO. BHQPG5702D`) with a monospace font and select-all capability, styled with background ambient blur (glassmorphism) and the official brand gradients (`brand-900` to `brand-950`).
- **Rationale:** Highlighting credentials visually in a structured container rather than inline text significantly elevates visual appeal, matches the B2B design guidelines, and immediately instills trust in global purchasers.

## 4. WebKit Rounded Corner Clipping Bug Fix
- **Decision:** Added `isolate transform translate-z-0` styles to the Services page Trust & Certification card container.
- **Rationale:** Solves a known rendering bug in WebKit-based browsers (e.g. Safari, Chrome on iOS) where rounded borders with a gradient background fail to clip properly when containing absolute blurred children.

## 5. Privacy Policy & Terms of Service Pages Creation
- **Decision:** Created professional B2B Privacy Policy (`/privacy`) and Terms of Service (`/terms`) pages and routed them under the main `Layout` component in `App.tsx`.
- **Rationale:** The client's footer already contained links to these pages. Fulfilling this completes the legal framework of the B2B portal, covering essential regulatory components like India's Customs clearance policies, DGFT/IEC licensing responsibility, and TT/LC B2B payment terms.
