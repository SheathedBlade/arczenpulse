export type Paragraphs = string[];

export interface NarrativeBlock {
  type: 'paragraph' | 'quote' | 'list';
  text?: string;
  items?: string[];
}

export type NarrativeContent = Paragraphs;
