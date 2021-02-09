import { Flow } from '@vaadin/flow-frontend';

const { serverSideRoutes } = new Flow({
  imports: () => import('../target/frontend/generated-flow-imports'),
});

export const routes = [
  // for client-side, place routes below (more info https://vaadin.com/docs/v18/flow/typescript/creating-routes.html)
  {
    path: '',
    component: 'main-view',
    action: async () => {
      await import('./views/main/main-view');
    },
    children: [
      {
        path: '',
        component: 'hello-world-view',
        action: async () => {
          await import('./views/helloworld/hello-world-view');
        },
      },
      {
        path: 'hello',
        component: 'hello-world-view',
        action: async () => {
          await import('./views/helloworld/hello-world-view');
        },
      },
      {
        path: 'about',
        component: 'about-view',
        action: async () => {
          await import('./views/about/about-view');
        },
      },
      // for server-side, the next magic line sends all unmatched routes:
      ...serverSideRoutes, // IMPORTANT: this must be the last entry in the array
    ],
  },
];
