import { ReactNode } from 'react';

export type Faq = {
  time: {
    title: string;
    content: ReactNode;
  };
  protection: {
    title: string;
    content: ReactNode;
  };
  returning: {
    title: string;
    content: ReactNode;
  };
};
