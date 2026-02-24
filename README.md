

## Answers of the Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: These are the method to select element in dom manipulation. But there are difference between how they select and what they return.

getElementBy id(): We generally use it to select a specific element by a id. As id is unique in whole document, so we can select that element uniquely. It return a single element.

getElementsByClassName() : We generally use to select one or multiple element. It takes class name as a parametter and return the list of the element which include this class. it return a htmlCollection.

querySelector() : We generally use it to select the first element by a css selector. It takes a css selector as a parameter, and try to find the first matching element according to the css selector.

querySelectorAll(): It also take a css selector as input. but the difference is it return all the element which is match with the css selector.It returns as Nodelist.
     
### 2. How do you create and insert a new element into the DOM?

Ans : to creat and insert a new element we follow the following step:

 1: Create a new element using  document.createElement('Element tag'). 
      example:
	   let ui=document.creatElement('li');
 2: Modify te element using innerHtml/innerText and others.
      example:
	   ui.innerText="Creat a new tag";
 3: Find the parent in which we want insert the element.. we can use getElementById(),querySelector() and so on;
      example:
	    let pi=document.getElementById('par');
 4:append the created element in the parent by append() method;
       pi.append(ui);


### 3. What is Event Bubbling? And how does it work?

Ans: Even bubbling is a concept of DOM in which an event start from the target element and bubble up till the root through its parent.

when we click an element or something like this happen , then event bubbling happen. it happen in three phase .

1. Capturing phase: when even happen.. to capture where the event actually happen it starts to cheak it,from the window to the target element.

2. Target Phase: this reaches the specific helement where we click or the event happen.

3. Bubbling phase: in this phase, the event trggers on the target then moves up to its parrent.

thats how event bubbling happen.

### 4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation is a process to putting an event on the parent element ,instead of many small event.

Usefullness:

1.It is easy to code (less code);
2.One event is faster than many event.
3.if we add new element it also work for that.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: every element has some default behaviour . preventDefault() method is a process is simply stop that default behaviour.

on the other hand,stopPropagation() is used to stop event bubbling from the target element to its parent element. 
