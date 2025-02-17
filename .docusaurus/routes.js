import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/fr/markdown-page',
    component: ComponentCreator('/fr/markdown-page', 'f67'),
    exact: true
  },
  {
    path: '/fr/docs',
    component: ComponentCreator('/fr/docs', '177'),
    routes: [
      {
        path: '/fr/docs',
        component: ComponentCreator('/fr/docs', '189'),
        routes: [
          {
            path: '/fr/docs',
            component: ComponentCreator('/fr/docs', 'c60'),
            routes: [
              {
                path: '/fr/docs/category/tutorial---telebox',
                component: ComponentCreator('/fr/docs/category/tutorial---telebox', '781'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/fr/docs/intro',
                component: ComponentCreator('/fr/docs/intro', 'e1f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/fr/docs/tutorial-basics/add-an-account',
                component: ComponentCreator('/fr/docs/tutorial-basics/add-an-account', '9fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/fr/docs/tutorial-basics/use-adder',
                component: ComponentCreator('/fr/docs/tutorial-basics/use-adder', '7bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/fr/docs/tutorial-basics/use-scraper',
                component: ComponentCreator('/fr/docs/tutorial-basics/use-scraper', '08d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/fr/',
    component: ComponentCreator('/fr/', 'f1e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
