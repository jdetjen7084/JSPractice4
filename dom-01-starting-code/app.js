//EXAMPLES OF FASTER DOM TRAVERSAL BY FINDING ELEMENTS DIRECTLY
//ALWAYS USING QUERYSELECTOR IS SLOWER

const ul = document.querySelector('ul');

//a way to obtain individual child elements of the ul in the html
ul.children[1]

//gives an array of the items in the ul
ul.childNodes

//quicker to get first or last child elements than using querySelector and last-of-type
ul.firstChild
ul.firstElementChild
ul.lastChild
ul.lastElementChild


const liFirst = document.querySelector('li');

//can't have more than one parent
liFirst.parentNode

//to reach out to an ancestor, as long as it indirectly wraps the element
liFirst.closest('body')


const ulFam = li.parentElement;

//gives previous sibling node
ulFam.previousSibling

//gives nearest sibling element
ulFam.previousElementSibling

//gives the next sibling
ulFam.nextElementSibling