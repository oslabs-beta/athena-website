import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/athena-website/__docusaurus/debug',
    component: ComponentCreator('/athena-website/__docusaurus/debug', '404'),
    exact: true
  },
  {
    path: '/athena-website/__docusaurus/debug/config',
    component: ComponentCreator('/athena-website/__docusaurus/debug/config', 'ecd'),
    exact: true
  },
  {
    path: '/athena-website/__docusaurus/debug/content',
    component: ComponentCreator('/athena-website/__docusaurus/debug/content', 'ea1'),
    exact: true
  },
  {
    path: '/athena-website/__docusaurus/debug/globalData',
    component: ComponentCreator('/athena-website/__docusaurus/debug/globalData', '1c1'),
    exact: true
  },
  {
    path: '/athena-website/__docusaurus/debug/metadata',
    component: ComponentCreator('/athena-website/__docusaurus/debug/metadata', '8d2'),
    exact: true
  },
  {
    path: '/athena-website/__docusaurus/debug/registry',
    component: ComponentCreator('/athena-website/__docusaurus/debug/registry', '41d'),
    exact: true
  },
  {
    path: '/athena-website/__docusaurus/debug/routes',
    component: ComponentCreator('/athena-website/__docusaurus/debug/routes', 'b17'),
    exact: true
  },
  {
    path: '/athena-website/blog',
    component: ComponentCreator('/athena-website/blog', '6c2'),
    exact: true
  },
  {
    path: '/athena-website/blog/archive',
    component: ComponentCreator('/athena-website/blog/archive', '924'),
    exact: true
  },
  {
    path: '/athena-website/blog/first-blog-post',
    component: ComponentCreator('/athena-website/blog/first-blog-post', '581'),
    exact: true
  },
  {
    path: '/athena-website/blog/long-blog-post',
    component: ComponentCreator('/athena-website/blog/long-blog-post', 'f4e'),
    exact: true
  },
  {
    path: '/athena-website/blog/mdx-blog-post',
    component: ComponentCreator('/athena-website/blog/mdx-blog-post', 'edb'),
    exact: true
  },
  {
    path: '/athena-website/blog/tags',
    component: ComponentCreator('/athena-website/blog/tags', '552'),
    exact: true
  },
  {
    path: '/athena-website/blog/tags/docusaurus',
    component: ComponentCreator('/athena-website/blog/tags/docusaurus', '0ae'),
    exact: true
  },
  {
    path: '/athena-website/blog/tags/facebook',
    component: ComponentCreator('/athena-website/blog/tags/facebook', '0aa'),
    exact: true
  },
  {
    path: '/athena-website/blog/tags/hello',
    component: ComponentCreator('/athena-website/blog/tags/hello', '264'),
    exact: true
  },
  {
    path: '/athena-website/blog/tags/hola',
    component: ComponentCreator('/athena-website/blog/tags/hola', '01c'),
    exact: true
  },
  {
    path: '/athena-website/blog/welcome',
    component: ComponentCreator('/athena-website/blog/welcome', '3c1'),
    exact: true
  },
  {
    path: '/athena-website/markdown-page',
    component: ComponentCreator('/athena-website/markdown-page', '531'),
    exact: true
  },
  {
    path: '/athena-website/docs',
    component: ComponentCreator('/athena-website/docs', '21d'),
    routes: [
      {
        path: '/athena-website/docs/category/building--editing-components',
        component: ComponentCreator('/athena-website/docs/category/building--editing-components', '6eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena-website/docs/category/tutorial---basics',
        component: ComponentCreator('/athena-website/docs/category/tutorial---basics', 'fbc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena-website/docs/category/ui-mode',
        component: ComponentCreator('/athena-website/docs/category/ui-mode', '50a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena-website/docs/editing-your-component/Edit Components',
        component: ComponentCreator('/athena-website/docs/editing-your-component/Edit Components', '44c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena-website/docs/editing-your-component/Mock HTTP Requests',
        component: ComponentCreator('/athena-website/docs/editing-your-component/Mock HTTP Requests', '6af'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena-website/docs/editing-your-component/Rendering Components',
        component: ComponentCreator('/athena-website/docs/editing-your-component/Rendering Components', '853'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena-website/docs/editing-your-component/Styling Components',
        component: ComponentCreator('/athena-website/docs/editing-your-component/Styling Components', 'f16'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena-website/docs/editing-your-component/Upload Components',
        component: ComponentCreator('/athena-website/docs/editing-your-component/Upload Components', 'f54'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena-website/docs/intro',
        component: ComponentCreator('/athena-website/docs/intro', 'ffb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena-website/docs/Quickstart',
        component: ComponentCreator('/athena-website/docs/Quickstart', '236'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena-website/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/athena-website/docs/tutorial-basics/create-a-blog-post', '835'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena-website/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/athena-website/docs/tutorial-basics/create-a-document', 'a73'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena-website/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/athena-website/docs/tutorial-basics/create-a-page', 'dc2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena-website/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/athena-website/docs/tutorial-basics/deploy-your-site', '2e1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena-website/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/athena-website/docs/tutorial-basics/markdown-features', '5fd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena-website/docs/UI-mode/manage-docs-versions',
        component: ComponentCreator('/athena-website/docs/UI-mode/manage-docs-versions', '1c3'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/athena-website/',
    component: ComponentCreator('/athena-website/', 'db3'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
