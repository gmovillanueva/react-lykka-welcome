# Lykka Village Coding Standards

*This is a living document and will be updated as new recommendations are identified.*


### Key Drivers

- Emphasize modularity to better align with micro frontend structure
- Document coding standards and patterns decided on by Lykka team
- Reduce the mental burder / confusion in working between different applications
- Optimize project for search (i.e. avoiding many files with identical names)
- Limiting files that contain little more than boilerplate code

### Types and Directories
lykka-village is made up of a series of react applications utilizing a standard scaffolding including the following:

- Components
- Entry Files
- Routes
- Stylesheets
- Constants
- Unit Tests

##### Components
Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. We are using the Material UI library, documentation can be found [here](https://mui.com/material-ui/)
##### Entry Files
The entry file is where webpack looks to start building the application
##### Routes
React-Router-Dom is the React routing library chosen for Lykka Village as it is based off Reach Router (which was the far superior router.)
Documentation can be found [here](https://reactrouter.com/en/main)
##### Services
Ajax/fetch requests: Currently handled with react-query, now known as [TanStack Query](https://tanstack.com/query/v4/docs/overview)
##### Stylesheets
The use of CSS Stylesheets should be avoided for most applications. Material UI Components all accept a sx prop that we use instead of css sheets.
##### Unit Tests
This area under development
##### Utilities
Common Utility (and Helper) methods that are shared across components, actions, and container.

    src/
      components/
        <FeatureName>/
          tests/
          components/
            <SubComponent>.jsx
          state/
            <FeatureName>Atom.js
          <FeatureName>.jsx
          <FeatureName>SX.jsx
      config/
        base-theme.js
      images/
      sharedComponents/
      utils/
        api
        authorization
        constants
          <FeatureName>Constants.js
        hooks
        services/
          <BaseFeature>Atom.js
        validation
            helpers


### Components
Components should always be a functional component. A class based component is almost never necessary with the introduction of [react hooks](https://reactjs.org/docs/hooks-intro.html). An example is below:

**GOOD**

    import React, {useState} from 'react';
    const MyFunctionalComponent = () => {
      const [counter, setCounter] = useState(0);
      
      return (
        <div>
          {counter}
        </div>
      );
    };
	  
    export default MyFunctionalComponent;

**BAD**

    import React from 'react';
    
    class MyClassComponent extends React {
	    /* GROSS :( */
	    render() {
		    ...
	    }
    }

### State Management
Lykka village differentiates between **client state** and **server state**, and uses different tools in order to deal with their management, as follows:

- for client state (local state / user preferences) - [Recoil](https://recoiljs.org/docs/basic-tutorial/intro)
- lykaa village (data fetched from the APIs) - React-Query

### Recoil
Recoil helps to improve the built-in state management issues that React has, while keeping both the API and the semantics along with the behaviour as React-ish as possible.
Recoil defines a directed graph orthogonal to, but also intrinsic and attached to the React tree. State changes flow from the roots of this graph (atoms) through pure functions (selectors) and into components.
Atoms contain the source of truth for our application state. Here is how we set up Atoms:

    export const someUserState = atom({
	    key: 'someUserState',
	    default: ''
    });

To read the contents of this atom, we can use the `useRecoilValue()` hook in our component:
`const userValue = useRecoilValue(someUserState);`
We use `useRecoilState()` to read `someUserState` and to get a setter function that we use to update the contents of the `someUserState`
`const [userState, setUserState] = useRecoilSate(someUserState);`
Click [here](https://recoiljs.org/docs/basic-tutorial/intro/) for more information about how to use Recoil.

### React Query (TanStack Query)
React Query is a library that fetches, caches, synchronizes and updates *server state* in Lykka Village. It does that through its series of out-of-the-box, zero-config features, and it can be customized as our application grows.  
Its 3 core concepts are: queries, mutations and query invalidation (you can find out more about how these work [here](https://tanstack.com/query/v4/docs/quick-start).
This allows a *separation of concerns* regarding state; while *server state* is managed through React-Query and its core concepts, the *UI state* is handled with a combination Recoil atoms (see above) and key-value pairs stored in the browser’s session storage.

### Validation
In Lykka Village we are using [Yup](https://github.com/jquense/yup "https://github.com/jquense/yup"), a schema builder for runtime value parsing and validation.  
Yup schema are extremely expressive and allow modeling complex, interdependent validations, or value transformation. Some features available for Yup validations, according to the documentation:

- Concise yet expressive schema interface, equipped to model simple to complex data models
- Built-in async validation support. Model server-side and client-side validation equally well
- Extensible: add your own type-safe methods and schema
- Rich error details, supports i18n and localization

### Syntax and Formatting
If developing with the VS Code IDE please install these extensions to help eliminate syntax and linting issues:

- Prettier
- ESLint

ESLint and Prettier are two extensions that help us maintain our code quality. They follow syntax and formatting rules that Lykka Village devs have agreed upon. We do not want to override them, unless there is a conflict between them. Instead, we should use them to correct issues that are flagged.
#### To utilize
Issues will automatically be detected and shown with a red squiggle underneath. To correct, click on them, then either Right-click (or CMD + .) to display the options to fix, fix all, ignore, etc.

**NOTE:**
- Again, fix *all* issues BEFORE pushing
- If ESLint complains about a console.log() statement and suggests adding `eslint-disable no-console` to the top of the file, **do not do this**. We are working on adding a logger, but in the meantime only use console logs when debugging - remove before pushing.

### Code Commenting

Code Commenting should be considered useful when trying to communicate important details to other developers, but should generally be unnecessary when your code is self-documented.

> Self-documenting code is ostensibly written using human-readable names, typically consisting of a phrase in a human language which reflects the symbol's meaning, such as _article.numberOfWords_ or _TryOpen_. The code must also have a clear and clean structure so that a human reader can easily understand the algorithm used.
> [Self-documenting code - Wikipedia](https://en.wikipedia.org/wiki/Self-documenting_code#:~:text=In%20computer%20programming%2C%20self%2Ddocumenting,system%20without%20prior%20specific%20knowledge.)

**Recommended**

    const isVisible = (element) => {
	    return element.offsetWidth  && element.offsetHeight;
    }
    
    if (!isVisible(elementName)){
	    ...
    }
**NOT Recommended**

    // if the element is not visible
    if (!el.offsetWidth || !el.offsetHeight) {
	    ...
    }
#### Avoid Console Logs
Console logs are incredibly useful in troubleshooting and debugging problems, but can quickly turn an otherwise useful developer console into a useless feed of unintelligible noise. To keep console logs useful, we should:

1.  Defer to browser breakpoints. Breakpoints will let you walk through the area of code you are debugging.
2.  If you find it will be easier/quicker to debug with console logs, clean them up once you’ve completed your debugging session.
3.  Implement console log blocking errors with our linting tools to ensure that they don’t make it to production.
4.  Try not to add linting exceptions to your console log statements.
5.  If all else fails and a console log statement must remain in the source code, consider using a logging API instead. (Currently in the works)

#### Make use of TODO's
There are occasions when you need to make a note for yourself and others that something is not quite right with this piece of code, but for whatever reason (lack of time, don’t know the right solution, etc.) now is not the time to address the problem. In those cases, TODO's are very useful.

Think of TODO’s as little markers that help expose the technical dept. What’s more, a lot of tools will let you hop through all the TODO comments in your source code so that you can take a look at the comments and see if it still makes sense.

**Recommended**

    // TODO: Research if this is the best way to determine an alement is visible
    const isVisible = (element) => {
	    return element.offsetWidth  && element.offsetHeight;
    }
    
    if (!isVisible(elementName)){
	    ...
    }
**NOT Recommended**

    // Checking to see if the element is not visible.
    // At some point we should research if this is the
    // best way to determine if an element is visible.
    if (!el.offsetWidth || !el.offsetHeight) {
	    ...
    }

### StyleSheets
In most cases, stylesheets should be in the same folder as the components they style. They should also follow the same naming convention of the Component feature which it styles. Again, since we use the SX prop in Material UI components, we will not be using stylesheets - but we will be using a naming structure called [BEM](https://getbem.com/) which stands for Block, Element, Modifier. We are taking this and transposing it to SX, an example is included below for updating the styling for the user first name text input field

    export const DemographicsFormSX = {
	    demographicsUserField: {
		    maxWidth: '5rem',
		    ...
	    }
    }


### Nesting
Although we support nesting, it is **generally discouraged** since deep nesting can:

1.  make it very difficult to reason through stylesheets (SX)
2.  make it very difficult to search for complete style names
3.  effect performance since CSS compilers need to make sense of nested code (SX is compiled to CSS at build time)

The recommendation is to utilize nesting for defining **pseudo-classes** and **pseudo-elements**.


