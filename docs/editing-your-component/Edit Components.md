---
sidebar_position: 2
---

# Editing Components

In AthenaJS, there are two code editors:

**Body:** This editor holds everything but the code in the return statement of the component (variables, hooks, functions, etc.)

**JSX:** This editor holds the JSX in the return statement of the component.
currently Athena V1 doesn't handle <mark>multiple JSX Element return statements</mark>

Here is a visual aid to show you how your component is being built from the code in the terminal

```JS
import 'some_import' from 'somewhere'
// more import statements...

const myComponent = () => {
  /**
   *
   * Body Editor Output goes here
   *
   **/
  return(
  /**
   *
   * JSX Editor Output goes here
   * 
   **/
  );
};

export default myComponent
```

- **Preview the component**: The view component button will render a preview of the component in AthenaJS's component rendering panel. This allows you to see how the component behaves with specific function calls and make any necessary adjustments on the fly thanks to AthenaJS's live component rendering. To update the renderer with your changes, press 'update view'.
