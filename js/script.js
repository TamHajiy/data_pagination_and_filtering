//func with list of student and 2params 'list' reps data & page reps page#
function showPage (list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9
   const ul = document.querySelector('.student-list');
   //remove any previous data that was displayed
   ul.innerHTML = '';
   //iterate through student data
   for(let i = 0; i < list.length; i++){
      //ensure i is within page start and end index
      if(i >= startIndex && i < endIndex ){
         //Build DOM elements, set classes and append 
         const li = document.createElement('li');
         li.className = 'student-item cf';

         const firstDiv = document.createElement('div');
         firstDiv.className = 'student-details'
         
         const img = document.createElement('img');
         img.className = 'avatar';
         img.setAttribute('src', list[i].picture.large);
         img.setAttribute('alt', 'Profile Picture')
         firstDiv.appendChild(img);
         
         const h3 = document.createElement('h3');
         h3.innerHTML = `${list[i].name.first} ${list[i].name.last}`;
         firstDiv.appendChild(h3);

         const firstSpan = document.createElement('span');
         firstSpan.className = 'email'
         firstSpan.innerHTML = list[i].email
         firstDiv.appendChild(firstSpan);

         const secondDiv = document.createElement('div')
         secondDiv.className = 'joined-details'

         const secondSpan = document.createElement('span');
         secondSpan.className = 'date'
         secondSpan.innerHTML = `Joined ${list[i].registered.date}`
         secondDiv.appendChild(secondSpan);

         li.appendChild(firstDiv);
         li.appendChild(secondDiv)
         ul.insertAdjacentElement('beforeend', li);
      } //endIF   
   }//endLoop
}//endFunction

//This function will create and insert/append the elements needed for the pagination buttons
function addPagination (list) {
   let numOfPages = list.length/ 9; 
   const ulLinkList = document.querySelector('.link-list');
   //remove any previous # that was displayed
   ulLinkList.innerHTML = '';

   for(let i = 0; i < numOfPages; i++){
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.type = 'button';
      button.innerHTML = i+1;

      //set the first page as an active page
      if(i === 0){
         button.className = 'active'
         }//endIf 

      li.appendChild(button);
      ulLinkList.insertAdjacentElement('beforeend', li);
      }//endLoop 

   ulLinkList.addEventListener('click', (e) => {
      if(e.target.tagName === 'BUTTON'){
         let currentButton = document.querySelector('.active');
         //remove current button from class active
         currentButton.removeAttribute('class');
         //add class active to the clicked button (e.target)
         e.target.setAttribute('class', 'active');
         // call showpage to display the respective button-page;
         showPage(list, e.target.innerHTML);
          }//endIf
      })//endEvent
}//endFunction  

// Call functions
showPage(data, 1);
addPagination(data);