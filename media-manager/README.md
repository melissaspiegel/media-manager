# 🧭 Media Manager

A modular, TypeScript‑based **Media Manager** built with the **Atomic Design** principle.  
This architecture separates logic, UI, and data contracts into reusable layers — making attachments easy to view, edit, upload, and organize.

---

## 🎯 Purpose

The **Media Manager** handles the lifecycle of attachments (files or links) that belong to various entities (subjects).  
Each attachment includes standard metadata and can represent either a *file* or a *link*.

---

## 🧱 Core Data Model

Each `Attachment` contains:

| Field | Description |
|--------|--------------|
| `id` | Unique identifier |
| `title` | Human‑readable name |
| `subjectKey` | Type of entity it belongs to (e.g., `user`, `project`) |
| `subjectId` | Entity ID |
| `category` | Logical grouping or classification |
| `type` | `"file"` or `"link"` |
| `file` | File‑specific properties (`fileName`, `mimeType`, `size`, etc.) |
| `link` | Link‑specific properties (`url`, `previewImage`, `source`) |

## 🧩 Atomic Design Layers
```
Media Manager (Whole Feature)
│
├── ATOMS
│ ├── AttachmentDTO → Data contract
│ ├── AttachmentFileDTO → File meta definition
│ ├── AttachmentLinkDTO → Link meta definition
│ ├── Attachment → Domain class & helper logic
│ └── → Atomic UI piece for single attachment
│
├── MOLECULES
│ ├── → Upload or attach file/link
│ ├── → View details of an attachment
│ ├── → Edit attachment metadata
│ └── AttachmentService → Handles CRUD and API calls
│
├── ORGANISMS
│ ├── → Displays list/grid of attachments
│ └── → Coordinates picker/table/viewer/editor
│
├── TEMPLATE
│ └── → Layout structure
│
└── PAGE
└── → Fully working example page
## 🔄 Data Flow
User
│
│ Adds / Edits Attachment
↓
or
│
↓
AttachmentService (create / update / fetch / delete)
│
↓
(renders updated list)
│
├─ View →
└─ Edit →
│
↓
All coordinated by

text

---

## 📁 Folder Structure
media-manager/
├── README.md
├── docs/
│ └── architecture-diagram.md
└── src/
├── atoms/
├── molecules/
├── organisms/
├── templates/
└── pages/
```

---

Each folder corresponds directly to its **Atomic Design** layer:
- `atoms/` → base data models and smallest components  
- `molecules/` → small functional UI units or service modules  
- `organisms/` → larger interactive sections (tables, managers)  
- `templates/` → page or screen layout scaffolding  
- `pages/` → final implementations  

---

## 🚀 Getting Started

### 1️⃣ Install dependencies
```bash 
pnpm install


npm run dev
```



## 🧩 Example Components and Classes

```
// src/atoms/AttachmentDTO.ts
export interface AttachmentDTO {
  id: string;
  title: string;
  subjectKey: string;
  subjectId: string;
  category: string;
  type: 'file' | 'link';
  file?: AttachmentFileDTO;
  link?: AttachmentLinkDTO;
}
```

### Molecule

```
// src/molecules/attachment-service.ts
export class AttachmentService {
  async list(subjectKey: string, subjectId: string) { /* fetch attachments */ }
  async save(dto: AttachmentDTO) { /* create new attachment */ }
  async update(id: string, dto: AttachmentDTO) { /* update attachment */ }
  async delete(id: string) { /* delete attachment */ }
}
```