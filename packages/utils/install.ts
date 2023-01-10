/* eslint-disable vue/prefer-import-from-vue */
import { NOOP } from '@vue/shared';
import { App, Plugin } from 'vue';

export type SFCWithInstall<T> = T & Plugin;

<<<<<<< HEAD
export const withNoopInstall = (comp: any) => {
  (comp as any).install = function (app: App): void {
    app.component(comp.name, comp);
  };
  return comp;
};

=======
>>>>>>> 410ec5cfcf005e23e799810ac52cc13d41d30208
export const withInstall = <T, E extends Record<string, any>>(main: T, extra?: E) => {
  (main as SFCWithInstall<T>).install = (app): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp);
    }
  };

  if (extra) {
<<<<<<< HEAD
    for (const [key, comp] of Object.entries(extra)) {
      (main as any)[key] = comp;
    }
=======
    (main as any)['childComp'] = extra;
>>>>>>> 410ec5cfcf005e23e799810ac52cc13d41d30208
  }
  return main;
};

<<<<<<< HEAD
// export const withNoopInstall = <T>(component: T) => {
//   (component as SFCWithInstall<T>).install = NOOP;

//   return component as SFCWithInstall<T>;
// };
=======
export const withNoopInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = NOOP;

  return component as SFCWithInstall<T>;
};
>>>>>>> 410ec5cfcf005e23e799810ac52cc13d41d30208
