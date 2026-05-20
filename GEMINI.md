# Shivansh International - Global Export Platform

This document provides a comprehensive overview of the "Shivansh International" project, a transformation of the "India Cash & Carry" grocery template into a premium e-commerce platform for global exports of handcrafted glass lamps and designer footwear.

## Architecture Overview

The project is a single-page application (SPA) built with **React 19** and **Vite**. It uses **TypeScript** for type safety and **Tailwind CSS 4** for styling.

### Core Technologies
- **Framework:** React 19
- **Build Tool:** Vite 6
- **Routing:** React Router 7
- **Styling:** Tailwind CSS 4 + Framer Motion (motion)
- **AI Integration:** Google Generative AI (Gemini) for the chatbot
- **State Management:** React Context API (Cart)

## Project Structure

```text
/
├── Client given info/    # Raw catalogs and profile PDFs from the client
├── extracted_assets/     # Raw images extracted from PDFs
├── labeled_assets/       # Images mapped to SKUs with JSON mapping files
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── cart/         # Cart-related components
│   │   ├── layout/       # Header, Footer (Branding targets)
│   │   └── ui/           # Generic UI components
│   ├── lib/              # Core logic and shared utilities
│   │   ├── cart-context.tsx 
│   │   ├── data.ts       # Main product data source (Phase 1 Target)
│   │   └── utils.ts      
│   ├── pages/            # Application pages/routes
│   │   ├── Home.tsx      # Landing page (Phase 3 Target)
│   │   ├── Shop.tsx      # Product listing
│   │   └── Recipes.tsx   # To be repurposed as "Services" (Phase 4 Target)
│   ├── App.tsx           
│   ├── index.css         
│   └── main.tsx          
├── extract_pdfs.py       # Python tool for asset extraction
└── labeling_agent.py     # Python tool for SKU-image spatial mapping
```

## Key Workflows

### Transformation Pipeline
The project follows a 4-phase systematic transformation:
1. **Phase 1: Data Migration** - Moving SKU data from catalogs to `src/lib/data.ts`.
2. **Phase 2: Navigation & Branding** - Updating Header/Footer and site identity.
3. **Phase 3: Homepage Repurposing** - Branding the landing experience.
4. **Phase 4: Services & Routing** - Transforming the "Recipes" page into a professional services portal.

### Development
1. Install dependencies: `npm install`
2. Configure Environment: `GEMINI_API_KEY` in `.env.local`.
3. Start development server: `npm run dev`.

## Technical Conventions

- **Data Integrity:** Use the SKU-mapping JSONs in `labeled_assets/` to ensure images match the correct products.
- **Styling:** Adhere to the existing Tailwind utility patterns while shifting colors/themes to a more premium export feel.
- **AI:** The `Chatbot` is trained on the Shivansh International company profile.
