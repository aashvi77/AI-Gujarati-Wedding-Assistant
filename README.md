# AI Wedding Assistant

An intelligent, context-aware conversational assistant engineered to preserve, 
navigate, and streamline complex South Asian cultural wedding traditions. Built 
using Retrieval-Augmented Generation (RAG) to deliver highly accurate, 
domain-specific guidance for modern couples.

---

## Live Demo and Interface

**Live Application Link:** [AI Wedding Assistant](https://gujarati-wedding-ai-v5.onrender.com/)  
*Note: This application is hosted on a free Render instance. If the link has been inactive, it may take up to 50 seconds to spin up the server and load the interface.*

| Home Screen | Example Chat |
| --- | --- |
| <img src="https://github.com/user-attachments/assets/484b4663-c5df-442c-86f6-16858954f236" width="380"> | <img src="https://github.com/user-attachments/assets/e78051f5-e394-4bd8-a5e8-a2a5310f6c4c" width="380"> |
| **Sidebar and Chat History** | **System Safety Guardrail** |
| <img src="https://github.com/user-attachments/assets/c7b5723b-74d7-4fec-8b5c-f356d76ee251" width="380"> | <img src="https://github.com/user-attachments/assets/58fda602-a3bf-4704-80d4-b3329883c527" width="380"> |

---

## Product Vision and Scope Prioritization

### The Problem Statement
As generations move abroad, deeply rooted cultural traditions and intricate 
wedding rituals risk becoming decentralized or lost. Modern couples frequently 
face a "knowledge gap"—lacking immediate, accessible exposure to elders or 
experts who know the exact logistical and ritualistic requirements of 
traditional ceremonies. 

This assistant was engineered to serve as the definitive digital domain expert 
for these workflows. By capturing complex cultural logic and structuring it 
into an interactive platform, the system delivers authoritative, context-isolated 
guidance that bridges the generational knowledge gap and streamlines the entire
wedding planning process.

### MVP Scope and Niche Target
* **The Pivot:** The initial product discovery phase aimed to cover all 
  Indian weddings. However, given the vast diversity of regional traditions 
  across India, the scope was strategically narrowed to establish a high-quality 
  Minimum Viable Product (MVP).
* **Target Focus:** This MVP specifically targets Gujarati Hindu weddings, 
  representing one of the largest South Asian diaspora communities globally. 
  Focusing on this specific geographical niche allowed for a hyper-dense, 
  reliable knowledge base before scaling to adjacent cultures.

---

## Technical Implementation and System Architecture

### Retrieval-Augmented Generation (RAG)
To guarantee the strict reliability required for event planning, the system 
architecture bypasses generic LLM training weights in favor of a targeted 
RAG pipeline:

* **Domain-Specific Knowledge Base:** Curated and structured a custom dataset 
  containing exact ritual breakdowns, logistical timelines, and traditional 
  requirements.
* **Retrieval Optimization:** By forcing the model to retrieve directly from 
  this verified data layer, the system minimizes factual errors and ensures 
  high-fidelity response relevance.

### System Guardrails and Scope Control
As an execution-focused project, keeping the product strictly aligned with its 
intended core scope was a primary engineering requirement:

* **Domain Lockdown:** Implemented system-level guardrails to restrict out-of-scope 
  queries and prevent conversational drift.
* **Strict Safety:** The assistant is engineered to politely decline generic 
  prompts unrelated to wedding or cultural planning workflows, ensuring resource 
  optimization and a focused user experience.

### Cultural UX/UI Design Choice
The user interface was intentionally crafted to evoke the traditional 
essence of a Gujarati wedding:

* **Cultural Textile Background:** The application features an intricate 
  background pattern inspired by traditional Gujarati bridal textiles (such as 
  Panetar or Gharchola prints).
* **Intentional Touch:** This design choice transforms a standard technical 
  chat interface into an immersive cultural experience, aligning the product's 
  visual identity with its specialized purpose.

---

## Future Roadmap
## Future Roadmap

The product is currently in active development. While v1.0 delivers a functional 
Minimum Viable Product (MVP), the current development sprint is focused on the 
following backlog items:

* **Retrieval Tuning:** Actively refining chunking strategies and prompt 
  context windows to increase retrieval precision and response optimization.
* **Social Collaboration Features:** Engineering a pipeline to allow users 
  to export, share, or collaborate on generated wedding planning workflows 
  with family members.
* **UI/UX Polish and Visual Identity:** Optimizing the interface layouts, 
  streamlining the CSS styling, and establishing a cohesive brand identity to 
  elevate the overall user experience.
* **Scale Architecture:** Mapping out structural data ingestion pipelines to 
  seamlessly scale the validated dataset into adjacent South Asian regional 
  traditions.
