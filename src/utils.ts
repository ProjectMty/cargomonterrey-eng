export const phoneStringToLink = (tel: string) =>
  tel.split(' ').join('').replace('+', '');
