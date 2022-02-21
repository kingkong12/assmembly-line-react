# Assembly Line App in React

To build this application I used my custom boiler plate which was built on top of CRA

# Table of contents

<!--ts-->

- [Installation](#Installation)
  - [Local Setup](#local-setup)
  - [Running Unit Tests](#running-unit-tests)
- [Libraries used in project](#additional-libraries-and-design-pattern-used-in-project)
- [All about state management.](#all-about-state-management)
- [My impression of giving coding examination.](#my-impression-of-giving-coding-examination)
- [Challenges I faced while building this application](#challenges-i-faced-while-building-this-application)
- [Potential Improvement without time constraints](#potential-improvement-without-time-constraints)
<!--te-->

# Installation

## Local setup

1. clone the repository.
2. Install all dependencies required for the app to run locally using npm.
   ```bash
   $ npm i
   ```
3. once all the dependencies are installed type
   ```
   $ npm start
   ```
   This will start the app on your [local Host](http://localhost:4000/) port 4000.

# Running Unit Tests

Type Following command in terminal :

    $ npm run test

Pleas Note that the snapshot testing weren't implemented because of time constraints.

# Additional Libraries and Design Pattern used in project

1.Library:[Styled-components](https://styled-components.com/) - styled-components lets you write actual CSS in your JavaScript. This means you can use all the features of CSS you use and love, including (but by far not limited to) media queries, all pseudo-selectors, nesting, etc.

2. Library: [Enzyme](https://enzymejs.github.io/enzyme/) - Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output.
   Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API for DOM manipulation and traversal.

3. Design pattern - [Atomic-Designs](https://xd.adobe.com/ideas/process/ui-design/atomic-design-principles-methodology-101/) Atomic Design is a methodology created by Brad Frost seeking to provide direction on building interface design systems more deliberately and with explicit order and hierarchy.

   Folder structure in this app is based on Atomic Design where the pages signify containers or stateful components.

# All about state management

Applications state is managed by `useAssemblyLineHook.tsx`

```
// initial state
 const [state, setState] = useState<StateWithIdsTS>
```

Sate gets initialized based on the props passed to the component, and in this was we define all necessary states in application.

```
useEffect(() => {
    const convertedStagesToState = stages.reduce((ac, a) => ({ ...ac, [a]: [] }), {})
    setState(convertedStagesToState)
  }, [stages])
```

# My impression of giving coding examination.

I found the entire process to be very joyful. The given problem statement was lightweight interm of time investment at the same time a good brain teaser exercise. One thing I learnt new today was that styled-component/macros make an additional layer of html element on top of existing div elemnt. I believe this is an unnecessary addition of html elements to the dom tree. The good aprts that, enzyme had a support for the same so it was able to eleminate those un necessary elements. This

# Challenges I faced while building this application.

1. Time - I wanted to assign ID to each stages and crate card base don these ID's : more like a simple data base , but on the UI. However because of time constraint i choose the quicker approach.

# Potential Improvement without time constraints

1. Most Important : Improve the unit testing code readability and modualarie those functions

```
    const inputValue = ['Dummy Text 1', 'Dummy Text 2', 'Dummy Text 3', 'Dummy Text 4']
    const inputBox = comp.find('.add-element').hostNodes()
    const cardElement = comp.find('.assembly-column').hostNodes()
```

2. Improving UI with much better CSS
3. Making column cards like drag and drop sot that the user doesnt need to move card to the end or start of the column to delete it.
4. feature of updating the card
5. Mobile responsive.
6. removing enzyme and using testing-library
7. inspecting and improving performance
8. adding accessability
9. optimize custom hook : useAssemblyyLineHook
