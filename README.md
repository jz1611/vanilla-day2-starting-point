# Objectives

## Events

- Students can handle events using HTML attributes, Javascript properties, and addEventListener.
- Students can discuess the benefits and drawbacks of each approach.
- Students can define event bubbling.
- Students can use stopPropagation and preventDefault in event handlers.

## DOM

- Students can use querySelector and querySelectorAll to select elements in Javascript.
- Students can use createElement, append, parentNode and remove to dynamically update the DOM.
- Students can use getAttribute and setAttribute to update element properties.


**Functions set as attributes**

- easy to read and follow
- easy to write
- no separation of concerns
- only one function per argument

example:
```html
<button onclick="saySomething('you said something!')">
    Click
</button>
```

**Function set as property**
- easy to write
- provide a separation of concerns
- less obvious events
- only one function per event

example:
```html
<button id="my-button">
    Click
</button>
```
```js
document.getElementById("my-button").onclick = function() {
    alert("you said something!");
}
```

**Functions set as eventlisteners**
- easy to write
- provide separation of concerns
- events are less obvious
- allow for multiple functions attached to a single event on element

example:
```html
<button id="my-button">
    Click
</button>
```
```js
function listenerAlert(){
    alert("you were clicked with the add event listener method");
}

document.getElementById("my-button").addEventListener("click", listenerAlert);
```


## selecting element in the dom (original methods)

```html
<div></div>
<div class="element"></div>
<div id="element"></div>
```

```js
document.getElementsByTagName("div");
document.getElementsByClassName("element");
document.getElementById("element");
```

<!-- introduce jquery -->

```js
$("div");
$(".element");
$("#element");
```

<!-- 2013 browsers catch up -->

```js
document.querySelector("div");
document.querySelector(".div");
document.querySelector("#div");
```