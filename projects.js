/* =====================================================================
   PROJECTS DATA  —  single source of truth for every case study.
   To add a future project: copy one block below, change the key
   ("thinkproject") and the fields, drop its images in /case-images,
   then link to it with  case.html?id=YOUR-KEY
   ===================================================================== */
window.PROJECTS = {

  "ai-stylist-checkout": {
    "eyebrow": "Case 01 / Luxury Fashion · 2026",
    "title": "An AI stylist that helps luxury shoppers decide what to buy — then compresses checkout into a 10-second review.",
    "role": "Product Designer",
    "year": "2026",
    "team": "Myself",
    "tags": ["AI-assisted UX", "Luxury e-commerce", "Working prototype", "Design system"],

    "brief": [
      "A self-initiated, end-to-end redesign of a luxury fashion shopping app, built to answer one question: where should AI actually live in a shopping journey? My answer is <strong>up-funnel</strong>. The AI stylist earns its keep helping the customer decide <em>what</em> to buy — proposing complete looks with reasons attached — so that by the time money changes hands, checkout is a single confident review. Everything below is working code, mirrored 1:1 in Figma.",
      "Four principles hold the flow together: <strong>AI proposes, never imposes</strong> — every AI action is visible, explained and reversible in one tap. <strong>Decide earlier, pay faster</strong> — decision support lives up-funnel so checkout becomes a 10-second review. <strong>Luxury tone preserved</strong> — the assistant speaks like a personal shopper; gold is the AI's voice, terracotta is commerce, and they never mix. <strong>Trust at the money step</strong> — details are pre-filled from saved data with clear provenance, and nothing is charged without explicit confirmation."
    ],

    "impact": {
      "before": "Browse alone, re-type at checkout",
      "after": "Styled, decided, 10-second review",
      "delta": "AI effort moved up-funnel — decision support, not checkout pressure",
      "note": "Self-initiated exploration — figures describe the designed flow, not measured production data.",
      "points": [
        "The stylist proposes complete looks with a visible reason for every recommendation, so accepting or swapping an item is one tap — never a black box.",
        "The bag works for the customer: the assistant surfaces savings and applicable offers before the customer goes hunting for them.",
        "Checkout is an express review — address, delivery and payment pre-filled from saved data with clear provenance; paying is one confirmation, not a form.",
        "Post-purchase, the stylist stays useful — care guidance and pairing suggestions instead of a dead-end receipt."
      ]
    },

    "sections": [
      {
        "title": "Watch the flow",
        "intro": "Seven screens from entry to confirmation, played as an animated walkthrough — the same interaction logic as the working prototype. Use the controls inside the frame to play, pause or replay.",
        "embed": {
          "src": "ai-stylist/demo.html",
          "title": "Animated walkthrough — AI-assisted shopping and checkout",
          "height": "1020px",
          "caption": "Animated walkthrough — entry → intent → looks → selection → bag → express checkout → confirmation."
        }
      },
      {
        "title": "Seven decisions, annotated",
        "intro": "The flow board walks every screen with its design rationale — the AI's role, the data it uses, why it converts, and the guardrails at the money step. 01 Entry: one quiet stylist entry point on the home screen. 02 Intent: the customer tells the stylist the occasion. 03 Decision support: AI-generated looks, with reasons. 04 Product selection with AI advice. 05 Bag: the assistant finds the savings. 06 Express review: the 10-second checkout. 07 Post-purchase: the stylist stays useful.",
        "embed": {
          "src": "ai-stylist/index.html",
          "title": "Annotated end-to-end flow board",
          "height": "760px",
          "caption": "The annotated flow board — scroll inside the frame, or open it full screen."
        }
      },
      {
        "title": "The system underneath",
        "intro": "The visual language runs on a three-tier token architecture — core primitives, semantic roles, component assignments — implemented twice: as the CSS custom properties rendering these live pages, and as Figma variable collections. Gold and terracotta are semantic roles, not decoration: gold marks the AI's voice, terracotta marks commerce, and the tiers keep them from ever mixing.",
        "embed": {
          "src": "ai-stylist/designsystem.html",
          "title": "Live design system — tokens, typography, components",
          "height": "760px",
          "caption": "The live design system — every colour, type style and component on this page is tokenised and interactive."
        }
      }
    ],

    "resource": {
      "eyebrow": "/ live pages",
      "title": "Explore it live",
      "intro": "Nothing above is a static mockup — the demo, the annotated flow board and the design system are all built in code, and the same system exists in Figma as variables, text styles and variant components. Open any of them full screen.",
      "links": [
        { "label": "Annotated flow board", "href": "ai-stylist/index.html", "icon": "ti-layout-board" },
        { "label": "Animated demo", "href": "ai-stylist/demo.html", "icon": "ti-player-play" },
        { "label": "Design system", "href": "ai-stylist/designsystem.html", "icon": "ti-color-swatch" },
        { "label": "Figma file", "href": "https://www.figma.com/design/0IGYyGO4Yr2Kc0yqQ5Wh54/AI-Assisted-Flow?node-id=0-1&t=NBr7anMolZmNhfzv-1", "icon": "ti-brand-figma" }
      ]
    },

    "next": { "label": "Microsoft · Azure AI", "href": "microsoft.html" }
  },

  "thinkproject": {
    "eyebrow": "Case 03 / Thinkproject · 2025",
    "title": "A Report Issue module that lets site engineers flag a fault without leaving the 3D model.",
    "role": "Product Designer",
    "year": "2025",
    "team": "4 designers · 3 developers",
    "tags": ["VDC", "Report Issue module", "Design system", "WCAG 2.2"],
    "cover": "case-images/01-portfolio-vdc.png",
    "coverCaption": "Thinkproject's Built Asset platform. My focus: Virtual Design & Construction (highlighted in yellow).",

    "brief": [
      "At Thinkproject I worked as a Product Designer in a team of four designers and three developers, split across two tracks: creating new components for the company's design system, and designing a new Report Issue module for VDC — Virtual Design & Construction, the part of the platform where site teams run quality checks against a building's 3D model.",
      "When an engineer runs model checks and finds a fault — a misaligned window, an incomplete seal — flagging it used to mean leaving the model entirely: screenshotting it, re-typing the element and its location into a separate tool, annotating the photo somewhere else, then chasing the right person to fix it. Issues got lost, duplicated, or logged against the wrong location. My job was to make reporting a fault almost as fast as spotting one."
    ],

    "impact": {
      "before": "~10 min",
      "after": "~2 min",
      "delta": "~80% faster per fault report",
      "note": "Based on one-to-one interviews with ~20 site users and the redesigned flow.",
      "points": [
        "Faults are reported in-context — element ID, floor and fault type carry over automatically instead of being re-typed into another tool.",
        "Photo capture and annotation happen inside the module, removing the jump to a separate image editor.",
        "Every issue is prioritized (Low / Medium / High), assigned, and tracked through to Resolved — so nothing gets lost or duplicated."
      ]
    },

    "sections": [
      {
        "title": "Who I designed for",
        "intro": "I ran one-to-one interviews with ~20 people working on site, then mapped the two who'd actually use this — the engineer running checks and the worker who fixes the fault — to pinpoint where reporting breaks down today.",
        "link": {
          "text": "See the questions I asked site engineers",
          "modalTitle": "Site Engineer — interview script",
          "modalIntro": "A short contextual-inquiry guide I used in one-to-one sessions. The goal was to learn how engineers report faults today — what they capture, who they tell, and where it breaks down — not to validate a solution.",
          "questions": [
            "Walk me through the last time you found a fault while checking a model on site — what did you do first?",
            "Once you spot a problem with an element, how do you record it right now, and who do you pass it to?",
            "What details about a fault have to be captured for it to actually get fixed without back-and-forth?",
            "Where in reporting an issue do you usually lose the most time or get frustrated?",
            "How do you tie something you see on site back to the exact element and floor in the 3D model?",
            "When do you take photos of an issue, and what happens to those photos afterwards?",
            "How do you decide whether an issue is low, medium or high urgency — and does that change how you report it?",
            "After you've reported an issue, how do you find out whether it's been picked up or resolved?",
            "Which apps or tools do you switch between to report one issue and follow it through?",
            "If reporting a fault took ten seconds, what would you do differently during a site check?"
          ]
        },
        "images": [
          { "src": "case-images/02-personas.png", "caption": "User personas — the site engineer and the worker on the floor." },
          { "src": "case-images/03-empathy.png", "caption": "Empathy map — what they see, do and get frustrated by today." },
          { "src": "case-images/04-journey-map.png", "caption": "Journey map — where reporting a fault currently falls apart." }
        ]
      },
      {
        "title": "From login to the faulty element",
        "intro": "The engineer logs in, opens the CDE, selects the assets, loads the model, and filters down to a single floor before running the checks — so by the time an issue appears, the context is already narrow and specific.",
        "images": [
          { "src": "case-images/05-login.png", "caption": "Login — the site engineer signs in." },
          { "src": "case-images/06-assets-selection.png", "caption": "Asset selection — choosing what to load into the model." },
          { "src": "case-images/07-model-filtering-l3.png", "caption": "Model filtered down to Level 3, ready for checks." }
        ]
      },
      {
        "title": "Reporting an issue without leaving the model",
        "intro": "This is the module I designed. A failed check highlights the faulty window in red inside the 3D view. The engineer clicks it and the Report Issue panel opens with the element, floor and fault type already filled in — no manual re-entry. They add a description, attach and mark up a site photo, set a priority, and assign it.",
        "images": [
          { "src": "case-images/08-model-checks-report-issue.png", "caption": "Click the red element — Window W-07, 3rd Floor, Fault — and the panel pre-fills the context." },
          { "src": "case-images/09-annotate-photo.png", "caption": "Attach a site photo and annotate the problem inline — no separate editor." }
        ]
      },
      {
        "title": "Tracking, not just reporting",
        "intro": "Once sent, the issue lands in a live, prioritized list for the floor — New, Open, In Progress, Resolved — so the whole team can see what is outstanding and nothing slips through the cracks.",
        "images": [
          { "src": "case-images/10-report-sent-tracking.png", "caption": "The issue is logged, assigned and tracked by priority — visible to everyone on the floor." }
        ]
      }
    ],

    "next": { "label": "Design system · Single-file upload", "href": "case.html?id=design-system-upload" }
  },

  "design-system-upload": {
    "eyebrow": "Case 04 / Design System · 2026",
    "title": "A single-file upload component — and the scalable design system underneath it, built on variables and 3-tier tokens.",
    "role": "Design System Specialist",
    "year": "2026",
    "team": "Myself",
    "tags": ["Design System", "Variables", "Tokens", "Scalable", "Theming"],
    "cover": "case-images/ds-00-cover.png",
    "coverCaption": "The documented single-file upload — one variant set, five states, every value tokenized. The component is the surface; the system is the point.",

    "brief": [
      "I treat a design system as a product with two user groups — designers and developers — and my job is to make the right thing the easy thing for both, then make that scale across products and a future rebrand without the system breaking. This case uses one component to show how I do that.",
      "On the surface it's a single-file upload: a dropzone for sensitive documents like identity or financial files that accepts one file at a time, validates type and size, and gives clear feedback through every state — empty, hover, uploading, success, error. Underneath, it's a demonstration of a <strong>three-tier token architecture</strong>, <strong>variables driving theming through modes</strong>, and components <strong>composed from primitives</strong> so the library stays small as it grows."
    ],

    "impact": {
      "before": "12 variants",
      "after": "3 variants",
      "delta": "−75% on one nested component, with no loss of capability",
      "note": "Outcome of separating structure from data, and a design-system review I reworked the file against.",
      "points": [
        "Three tiers of tokens — Core → Semantic → Component, linked by aliasing — so a new theme or brand is a data change, not a component change.",
        "Theming runs through variable modes: toggling the semantic mode reskins the entire component to dark with zero edits to the component layer — the same mechanism a rebrand would use.",
        "The component is composed from shared primitives (File-Thumb, Progress-bar, Buttons, Icons), so fixes happen once and propagate everywhere.",
        "Tokens are named by raw families and roles rather than brand, so the foundation survives a new brand colour or a rebrand without restructuring.",
        "Documented for adoption — anatomy, states, properties and Do's & Don'ts — so product teams use it correctly without booking time with me."
      ]
    },

    "sections": [
      {
        "title": "A system with two users",
        "intro": "Before any pixels, the framing: a design system serves designers and developers at once, and tokens are the shared contract between them. Everything below — the tiers, the modes, the composition — exists to keep one source of truth as more teams and platforms consume it. The upload component is simply the clearest way to make that visible.",
        "images": [
          { "src": "case-images/ds-01-overview.png", "caption": "The component documentation page — anatomy, states, properties and usage in one place." }
        ]
      },
      {
        "title": "Three tiers of tokens",
        "intro": "Variables hold one decision each, and they're organised in three layers. Core holds raw, brand-agnostic primitives — type scale (e.g. Typography/Font-size/20) and spacing (Spacing/Size/sm·md·lg = 8·16·32) with no meaning attached. Semantic gives those values intent and carries the Light and Dark modes (e.g. body/lg, body/md). Component-scoped tokens at the bottom (File-upload/Dropzone/Background, File-upload/Dropzone/Border) alias the layers above. Each tier references the one beneath it through aliasing — that chain is what makes the whole thing themeable and rebrand-ready.",
        "images": [
          { "src": "case-images/ds-02-token-tiers.png", "caption": "Core → Semantic → Component. Aliasing links each tier to the one beneath it." },
          { "src": "case-images/ds-03-variables.png", "caption": "The variables behind the dropzone — raw families and roles, never brand names." }
        ]
      },
      {
        "title": "One component, five states",
        "intro": "The upload ships as a single variant set with one meaningful 'State' property — Default, Hover, Progress, Success, Error — rather than five separate components. State is structural; everything else (file name, size, progress percentage, thumbnail) is content or data flowing through slots. That distinction keeps the component count low and the API legible.",
        "images": [
          { "src": "case-images/ds-04-states.png", "caption": "Five states, one variant set: Default · Hover · Progress · Success · Error." }
        ]
      },
      {
        "title": "Composed, not duplicated",
        "intro": "The upload is assembled from shared primitives — File-Thumb, Progress-bar, Buttons, Icons — so the system stays small and a fix in one place propagates everywhere. The clearest proof is File-Thumb itself: it started as 12 variants (Image / Document × 1%, 20%, 50%, 80%, 100%, loaded). The insight was that progress percentage isn't a structural variant — it's data driven by the progress bar. Rebuilt around the three real structural differences — Loading, Image-loaded, Document-loaded — 12 variants became 3 with no loss of capability.",
        "images": [
          { "src": "case-images/ds-05-nested-components.png", "caption": "Shared primitives the upload is composed from: File-Thumb, Progress-bar, Buttons, Icons." },
          { "src": "case-images/ds-06-filethumb-12.png", "caption": "File-Thumb v1 — 12 variants, with progress baked in as structure." },
          { "src": "case-images/ds-07-filethumb-3.png", "caption": "File-Thumb v2 — 3 variants after separating data from structure." }
        ]
      },
      {
        "title": "Theming that scales to a rebrand",
        "intro": "Because the dark theme lives entirely in the semantic mode, the whole component reskins end-to-end by toggling one mode — no component edits. That's the variables payoff in a single move, and it's exactly the mechanism a multi-brand setup or a future rebrand would use: add new Core values plus a new semantic mode and every component re-themes automatically.",
        "images": [
          { "src": "case-images/ds-08-light.png", "caption": "Light mode." },
          { "src": "case-images/ds-09-dark.png", "caption": "Dark mode — same component, one mode toggle, zero component edits." }
        ]
      },
      {
        "title": "Documented for adoption",
        "intro": "A system only scales if people can adopt it without asking me. The component is documented end-to-end — anatomy on a consistent 4px spacing rhythm with every value tokenized (radius/xl, space/32, space/16, nothing a magic number), a properties table, content slots, and explicit Do's & Don'ts so product teams use it correctly and accessibly.",
        "images": [
          { "src": "case-images/ds-10-anatomy.png", "caption": "Anatomy — tokenized radius, border, padding and gap on a 4px rhythm." },
          { "src": "case-images/ds-11-usage.png", "caption": "Usage — Do's & Don'ts for the teams adopting it." }
        ]
      }
    ],

    "resource": {
      "eyebrow": "/ live file",
      "title": "Explore the real file",
      "intro": "This isn't a mockup of a case study — the full component is published on Figma Community. Open it to inspect the three token tiers and their aliasing, toggle the light/dark modes, walk the five states, and read the documentation. Duplicate it to see exactly how the system is wired.",
      "label": "Open on Figma Community",
      "href": "https://www.figma.com/community/file/1650747534674926005/single-file-upload-component-scalable-design-system"
    },

    "next": { "label": "AI stylist · Luxury fashion", "href": "case.html?id=ai-stylist-checkout" }
  }

};
