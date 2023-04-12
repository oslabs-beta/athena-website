import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/athena-website/__docusaurus/debug',
    component: ComponentCreator('/athena-website/__docusaurus/debug', '0e4'),
    exact: true
  },
  {
    path: '/athena-website/__docusaurus/debug/config',
    component: ComponentCreator('/athena-website/__docusaurus/debug/config', 'd39'),
    exact: true
  },
  {
    path: '/athena-website/__docusaurus/debug/content',
    component: ComponentCreator('/athena-website/__docusaurus/debug/content', '9ae'),
    exact: true
  },
  {
    path: '/athena-website/__docusaurus/debug/globalData',
    component: ComponentCreator('/athena-website/__docusaurus/debug/globalData', '9de'),
    exact: true
  },
  {
    path: '/athena-website/__docusaurus/debug/metadata',
    component: ComponentCreator('/athena-website/__docusaurus/debug/metadata', '91d'),
    exact: true
  },
  {
    path: '/athena-website/__docusaurus/debug/registry',
    component: ComponentCreator('/athena-website/__docusaurus/debug/registry', '30c'),
    exact: true
  },
  {
    path: '/athena-website/__docusaurus/debug/routes',
    component: ComponentCreator('/athena-website/__docusaurus/debug/routes', '38a'),
    exact: true
  },
  {
    path: '/athena-website/blog',
    component: ComponentCreator('/athena-website/blog', '52e'),
    exact: true
  },
  {
    path: '/athena-website/blog/archive',
    component: ComponentCreator('/athena-website/blog/archive', '141'),
    exact: true
  },
  {
    path: '/athena-website/blog/first-blog-post',
    component: ComponentCreator('/athena-website/blog/first-blog-post', '019'),
    exact: true
  },
  {
    path: '/athena-website/blog/long-blog-post',
    component: ComponentCreator('/athena-website/blog/long-blog-post', '556'),
    exact: true
  },
  {
    path: '/athena-website/blog/mdx-blog-post',
    component: ComponentCreator('/athena-website/blog/mdx-blog-post', '700'),
    exact: true
  },
  {
    path: '/athena-website/blog/tags',
    component: ComponentCreator('/athena-website/blog/tags', '210'),
    exact: true
  },
  {
    path: '/athena-website/blog/tags/docusaurus',
    component: ComponentCreator('/athena-website/blog/tags/docusaurus', 'c34'),
    exact: true
  },
  {
    path: '/athena-website/blog/tags/facebook',
    component: ComponentCreator('/athena-website/blog/tags/facebook', '19a'),
    exact: true
  },
  {
    path: '/athena-website/blog/tags/hello',
    component: ComponentCreator('/athena-website/blog/tags/hello', '785'),
    exact: true
  },
  {
    path: '/athena-website/blog/tags/hola',
    component: ComponentCreator('/athena-website/blog/tags/hola', '563'),
    exact: true
  },
  {
    path: '/athena-website/blog/welcome',
    component: ComponentCreator('/athena-website/blog/welcome', 'c54'),
    exact: true
  },
  {
    path: '/athena-website/markdown-page',
    component: ComponentCreator('/athena-website/markdown-page', '9f4'),
    exact: true
  },
  {
    path: '/athena-website/docs',
    component: ComponentCreator('/athena-website/docs', '666'),
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
    component: ComponentCreator('/athena-website/', '467'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
