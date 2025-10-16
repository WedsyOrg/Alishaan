export interface ClientData {
  id: number;
  image: string;
  name: string;
}

export const allClientsData: ClientData[] = [
  {
    id: 1,
    image: '/assets/all-clients/1.png',
    name: 'Client 1'
  },
  {
    id: 2,
    image: '/assets/all-clients/2.png',
    name: 'Client 2'
  },
  {
    id: 3,
    image: '/assets/all-clients/3.png',
    name: 'Client 3'
  },
  {
    id: 4,
    image: '/assets/all-clients/4.png',
    name: 'Client 4'
  },
  {
    id: 5,
    image: '/assets/all-clients/5.png',
    name: 'Client 5'
  },
  {
    id: 6,
    image: '/assets/all-clients/6.png',
    name: 'Client 6'
  },
  {
    id: 7,
    image: '/assets/all-clients/7.png',
    name: 'Client 7'
  }
] as const;

export type AllClientsData = typeof allClientsData;
