import {
  faArrowDownUpAcrossLine,
  faArrowPointer,
  faBoxes,
  faCalendarCheck,
  faCartFlatbed,
  faClock,
  faDolly,
  faDoorClosed,
  faMapLocationDot,
  faPeopleCarryBox,
  faPlane,
  faRankingStar,
  faRightLeft,
  faRoad,
  faStore,
  faTruckFast,
  faVanShuttle,
} from '@fortawesome/free-solid-svg-icons';
import { ServicesList } from './types';

export const spanishServicesList: ServicesList[] = [
  {
    place: 'one',
    id: 'store',
    icon: faStore,
    title: 'Servicio de comercialización',
    text: '¡ELIGES TU PROVEEDOR! Y Nosotros realizamos compra y te facturamos en México.',
  },
  {
    place: 'one',
    id: 'boxes',
    icon: faBoxes,
    title: 'Almacenaje',
    text: 'Recibimos tu mercancía en nuestras bodegas y te entregamos como vayas necesitando unidades. ¡USA NUESTRA BODEGA COMO SI FUERA TUYA!',
  },
  {
    place: 'one',
    id: 'arrow-pointer',
    icon: faArrowPointer,
    title: 'Entregas en Amazon y Mercado Libre',
  },
  {
    place: 'two',
    id: 'van-shuttle',
    icon: faVanShuttle,
    title: 'Servicio de importación a México',
    text: 'Tú envías a nuestra bodega en USA y nosotros importamos y te traemos tu mercancía a México.',
  },
  {
    place: 'two',
    id: 'dolly',
    icon: faDolly,
    title: 'Servicio de envíos consolidados',
    text: 'Juntamos varias órdenes y te lo enviamos junto',
  },
  {
    place: 'two',
    id: 'road',
    icon: faRoad,
    title: 'Entregas última milla',
  },
  {
    place: 'three',
    id: 'right-left',
    icon: faRightLeft,
    title: 'Retornos y devoluciones',
    text: 'Realiza devoluciones de tus compras sin problema. Envía a nuestra bodega en México y nosotros lo llevamos a USA para devolver a tu proveedor.',
  },

  {
    place: 'three',
    id: 'people-carry-box',
    icon: faPeopleCarryBox,
    title: 'Despachos de mercancía para ventas e-commerce',
    text: 'Vende tu mercancía, nosotros lo enviamos a tu cliente final.',
  },

  {
    place: 'three',
    id: 'map-location-dot',
    icon: faMapLocationDot,
    title: 'Envíos a todo México',
  },
];

export const engServicesList: ServicesList[] = [
  {
    place: 'one',
    id: 'ltl-deliveries',
    icon: faCartFlatbed,
    title: 'LTL deliveries',
  },
  {
    place: 'one',
    id: 'overnight',
    icon: faClock,
    title: 'Overnight, 2 day, and deferred air freight',
  },
  {
    place: 'one',
    id: 'international-air',
    icon: faPlane,
    title: 'International air (priority and deferred)',
  },
  {
    place: 'two',
    id: 'ship-seamlessly',
    icon: faTruckFast,
    title: 'Ship seamlessly between the US, Canada, and Mexico.',
  },
  {
    place: 'two',
    id: 'competitive',
    icon: faRankingStar,
    title: 'Competitive rates on shipments into and out of Canada and Mexico.',
  },
  {
    place: 'two',
    id: 'truck-borders',
    icon: faArrowDownUpAcrossLine,
    title: 'Our trucks cross both borders every day.',
  },
  {
    place: 'three',
    id: 'scheduled-deliveries',
    icon: faCalendarCheck,
    title: 'Scheduled deliveries to Amazon FBA and Mercado Libre warehouses',
  },

  {
    place: 'three',
    id: 'last-mile-deliveries',
    icon: faDoorClosed,
    title: `Last mile deliveries to your buyer's front door in Mexico`,
  },

  {
    place: 'three',
    id: 'merchandise',
    icon: faDolly,
    title:
      'We can pick up your merchandise at your door step in the US and deliver to any address in Mexico.',
  },
];
