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

As generations move abroad, deeply rooted cultural traditions and intricate wedding rituals risk becoming decentralized or lost. Modern couples frequently face a knowledge gap, lacking immediate access to elders or community experts who traditionally provide guidance on the logistical, ceremonial, and cultural requirements of wedding events.

### Target User

This product is designed for members of the South Asian diaspora planning traditional weddings without direct access to the family and community networks that have historically guided these ceremonies.

Primary users include:

* Engaged couples planning traditional wedding events
* Family members responsible for coordinating ceremonies and logistics
* Wedding planners seeking accessible, culturally grounded guidance

By capturing complex cultural knowledge and structuring it into an interactive platform, the system helps users navigate traditions, understand ritual significance, and streamline wedding planning through an accessible conversational experience.

### MVP Scope and Niche Target

#### The Pivot

The initial product discovery phase aimed to support Indian weddings broadly. However, early research revealed significant variation across regions, religions, and family traditions, creating challenges in maintaining consistent, accurate, and contextually relevant responses.

To establish a high quality Minimum Viable Product (MVP), the scope was intentionally narrowed.

#### Target Focus

This MVP specifically targets Gujarati Hindu weddings. During product discovery, this audience emerged as a strong initial user segment due to the size of the Gujarati diaspora and the frequency with which traditional wedding knowledge is passed across generations and geographies.

Focusing on a single cultural domain enabled:

* More accurate and reliable responses
* Higher quality knowledge curation
* Reduced ambiguity across regional traditions
* A stronger foundation for future expansion

#### Product Strategy

Rather than attempting to solve every wedding planning scenario at launch, the product prioritizes depth over breadth. This focused approach enables higher retrieval accuracy, more consistent ritual guidance, and a stronger foundation for future expansion into adjacent South Asian traditions.


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

### UX/UI Design Choice
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

The product is currently in active development. While v1.0 delivers a functional Minimum Viable Product (MVP) tailored for Gujarati traditions, the current engineering backlog focuses on scaling the system architecture and enhancing the user experience:

* **Cross-Cultural & Regional Scaling:** Designing structural data ingestion pipelines to scale the curated knowledge base into adjacent South Asian regional cultures and traditions (including Punjabi, Telugu, and more), standardizing the schema to handle localized rituals seamlessly.
* **Retrieval Tuning:** Actively refining chunking strategies and prompt context windows to increase retrieval precision and response optimization for complex cultural queries.
* **Social Collaboration Features:** Engineering a pipeline to allow users to export, share, or collaborate on generated wedding planning workflows with family members and vendors.
* **UI/UX Polish & Visual Identity:** Optimizing interface layouts, streamlining styling, and establishing a cohesive brand identity to elevate the overall user experience.
