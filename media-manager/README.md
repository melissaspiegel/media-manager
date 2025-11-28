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