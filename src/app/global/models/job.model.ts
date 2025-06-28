export interface Job {
  id: string;
  clientName: string;
  address: string;
  stage: 'Active' | 'Archived' | 'Sales' | 'Design';
}