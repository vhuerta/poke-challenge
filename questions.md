## APIs

1. What's the difference between the method PUT and POST?

```
PUT is used to send data to a server to create/update a resource.
The main difference is that PUT is idempotent while POST creates a new resource every time it is called.
```

2. Which method do we use to fetch data?

```
 GET
```

3. What's the purpose of the OPTIONS method?

```
To describe the communication options for the target resource
```

4. What's is a request header and what is it used for?
   It is an extra source of information that represents metadata associated with the request that it is being made. It is useful to send an Authorization token, to request that the information must be sent in a particular content type among others.

5. What's the difference between a header and a parameter?
   The parameter is sent in the URI of the request, the header is sent in the headers section of the request.

## CSS

1. What's the difference between visibility:hidden and display:none?

```
display:none means that the tag in question will not appear on the page at all (although you can still interact with it through the dom).
visibility:hidden means that unlike display:none, the tag is not visible, but space is allocated for it on the page
```

2. Which css pre-processors do you know? What are the advantages of one or the other?

```
The candidate must show knowledge of at least one or two pre-processors.
```

3. What's the difference between an id and a class?
   An ID is unique and it can only target one element in the DOM, a class is a collective way of targeting multiple HTML elements.

## JS

1. Difference between var let and const. Asignar a un const un objeto con propiedades y ver si se puede cambiar.

2. What is a closure in JS?

```
A closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
```

3. What is a promise?

```
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
```

4. Describe the Event Loop?

5. What is a Higher Order Function (HOF)?

```
Is a function that takes a function as an argument and returns a function.
```

6. Por qué en JS, no es fácil determinar el valor de this como en otros lenguajes o por qué es muy fácil que se pierda o cambie el valor de this?

## React

1. What is Virtual DOM?

```
The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.


This approach enables the declarative API of React: You tell React what state you want the UI to be in, and it makes sure the DOM matches that state. This abstracts out the attribute manipulation, event handling, and manual DOM updating that you would otherwise have to use to build your app.
```

2. What is a High Order Component?

```
A higher-order component is a function that takes a component and returns a new component.
```

3. What is Redux?

```
Library to manage application state
```

4. Los listados como el utilizado en el proyecto pueden tener problemas de performance. ¿Te has topado con ellos? ¿Cómo los has solucionado?

5. RN no es una solución mágica. Si tuvieras que tomar una decisión en un proyecto nuevo, que criterios usarías para determinar si debes usar RN o no?

6. ¿Cuál es tu modelo mental del funcionamiento interno de RN?

7. ¿En qué punto empezaste con la experimentación con React y RN?

8. ¿Te ha tocado lidiar con la actualización de versiones de RN?

9. ¿Tienes experiencia en desarrollo nativo de mobile?

10. ¿Has desarrollado módulos de RN para interactuar con el lado nativo?

11. Para tu proyecto utilizaste redux pero veo que tienes experiencia en otras alternativas. Hiciste algún tipo de análisis para determinar que ibas a usar para la gestión de state?

12. ¿Cómo te sientes lidiando con el paradigma de clases en el desarrollo de componentes?
    Se ve que tienes buena experiencia con componentes funcionales y hooks. ¿Cómo definirías el concepto de hook?

## Vue

1. How would you design the architecture of a system so that it follows the next criteria:

- Scalable
- Maintainable
- Reduce the possibility of different team members colliding while working on different features

Look for her responses, her logic and if she is able to justify her decisions and if it makes sense. A candidate with experience will likely replicate a previous project.

2. What's the difference between a computed property and a data property
   Computed properties are read-only by default unless you use a setter. Data properties can be modified locally.

3. How do you create a two-way binding in vue.js?
   v-model directive is used to create Two-Way Bindings in Vue js.In Two-Way Bindings data or model is bind with DOM and Dom is binded back to model.
