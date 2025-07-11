export interface Job {
  id: string;
  clientName: {
    firstName: string;
    lastName: string;
  };
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  stage: 'Active' | 'Archived' | 'Sales' | 'Design';
  createdAt?: string | Date;
  qrCodeLink: string;
  projects: string[]; 
}

