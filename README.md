# AutoComplete using React

This is my attempt towards making a AutoComplete type-ahead input using React in ES6. Babel is used to transpile the ES6 syntax to browser supported ones. All the required libs such as React,react-dom and babel are injected using the `script` tag in `index.html` itself.

#Demo
[on CodePen](https://codepen.io/amit-mb/pen/RxGXOq)


# Approach

  - Define a GET function similar to jQuery's $.getJSON method
  - Send a GET request to https://restcountries.eu/rest/v2/all?fields=name once since we want minimal requests to be made to the API. This is possible because the data fetched is just 6.1 KB. If the dataset was bigger, We would have used different parameters as and when needed
  - the API returns a array of objects which are of the form {"name" : "countryName" }. Since the property "name" is redundant to us, Let us store just the countryNames in an array called countries by use of map() method.
  - `App` Component is defined which has a single child component `InputBox`
  -  `input` and `ul` are rendered from the `InputBox` Component.
  -  In the constructor, the state is defined. Instead of monitoring each variable and checking conditions ourselves, we use the state here to define the properties and let React decide the changes to be made and render them efficiently. We use setState whenever we want to change the `view`. Initially, all the properties of state are set to `0` or `''`
  - Similar to VanillaJS one, eventListeners such as `onChange` and `onClick` are set on `input` and `li` elements.
  - The only change in terms of logic is that we use `.startsWith()` method of String Object instead of `===` operator as it is available in ES6.
  - We change the `this.state` of `InputBox` whenever events are fired so that the minimal changes are computed and rendered to the screen.
