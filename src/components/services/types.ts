import { ServiceItemProps } from './service-item';

export type ServicesList = ServiceItemProps & {
  place: 'one' | 'two' | 'three';
  id: string;
};
