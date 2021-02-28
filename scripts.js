//Create function to select elements 
const selectElement = (element) => document.querySelector(element);//passing element
//open and close nav on click
selectElement('.menu-icons').addEventListener('click', () => {
    selectElement('nav').classList.toggle('active'); //when .menu-icons is clicked active class is added
});