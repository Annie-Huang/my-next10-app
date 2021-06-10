import { Selector } from 'testcafe';

export const isMobile = (t?: TestController): Promise<boolean> =>
  Selector('.browser-size .mobile').visible;
export const isTablet = (t?: TestController): Promise<boolean> =>
  Selector('.browser-size .tablet').visible;
export const isDesktop = (t?: TestController): Promise<boolean> =>
  Selector('.browser-size .desktop').visible;
