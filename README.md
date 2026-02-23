

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

### 4. What is Event Delegation in JavaScript? Why is it useful?

### 5. What is the difference between preventDefault() and stopPropagation() methods?
