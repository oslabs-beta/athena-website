import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/athena-website/blog',
    component: ComponentCreator('/athena-website/blog', 'e84'),
    exact: true
  },
  {
    path: '/athena-website/blog/archive',
    component: ComponentCreator('/athena-website/blog/archive', 'c1a'),
    exact: true
  },
  {
    path: '/athena-website/blog/first-blog-post',
    component: ComponentCreator('/athena-website/blog/first-blog-post', '4c3'),
    exact: true
  },
  {
    path: '/athena-website/blog/long-blog-post',
    component: ComponentCreator('/athena-website/blog/long-blog-post', '9d5'),
    exact: true
  },
  {
    path: '/athena-website/blog/mdx-blog-post',
    component: ComponentCreator('/athena-website/blog/mdx-blog-post', 'ab5'),
    exact: true
  },
  {
    path: '/athena-website/blog/tags',
    component: ComponentCreator('/athena-website/blog/tags', '4b9'),
    exact: true
  },
  {
    path: '/athena-website/blog/tags/docusaurus',
    component: ComponentCreator('/athena-website/blog/tags/docusaurus', '536'),
    exact: true
  },
  {
    path: '/athena-website/blog/tags/facebook',
    component: ComponentCreator('/athena-website/blog/tags/facebook', 'f18'),
    exact: true
  },
  {
    path: '/athena-website/blog/tags/hello',
    component: ComponentCreator('/athena-website/blog/tags/hello', '540'),
    exact: true
  },
  {
    path: '/athena-website/blog/tags/hola',
    component: ComponentCreator('/athena-website/blog/tags/hola', '666'),
    exact: true
  },
  {
    path: '/athena-website/blog/welcome',
    component: ComponentCreator('/athena-website/blog/welcome', '0bf'),
    exact: true
  },
  {
    path: '/athena-website/markdown-page',
    component: ComponentCreator('/athena-website/markdown-page', 'ced'),
    exact: true
  },
  {
    path: '/athena-website/docs',
    component: ComponentCreator('/athena-website/docs', 'fac'),
    routes: [
      {
        path: '/athena-website/docs/category/editing-your-component',
        component: ComponentCreator('/athena-website/docs/category/editing-your-component', 'd7a'),
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
        path: '/athena-website/docs/editing-your-component/defining-actions',
        component: ComponentCreator('/athena-website/docs/editing-your-component/defining-actions', '7f7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena-website/docs/editing-your-component/mocking-props',
        component: ComponentCreator('/athena-website/docs/editing-your-component/mocking-props', '8c2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena-website/docs/editing-your-component/mocking-state',
        component: ComponentCreator('/athena-website/docs/editing-your-component/mocking-state', 'ca4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena-website/docs/editing-your-component/rendering-component',
        component: ComponentCreator('/athena-website/docs/editing-your-component/rendering-component', '6bb'),
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
    component: ComponentCreator('/athena-website/', '1dd'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
