---
sidebar_position: 2
---

# Editing Components

In AthenaJS, there are two code editors:

**Body:** This editor holds everything but the code in the return statement of the component (variables, hooks, functions, etc.)

**JSX:** This editor holds the JSX in the return statement of the component

Here is a visual aid to show you how your component is being built from the code in the terminal

```
import 'some_import' from 'somewhere'
more import statements...

const myComponent = () => {
  ______________
  Body goes here
  ______________
  
  return(
    _____________
    JSX Goes Here
    _____________

  );
};

export default myComponent
```

- **Preview the component**: The view component button will render a preview of the component in AthenaJS's component rendering panel. This allows you to see how the component behaves with specific function calls and make any necessary adjustments on the fly thanks to AthenaJS's live component rendering. To update the renderer with your changes, press 'update view'.
