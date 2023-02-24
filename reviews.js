// File: search.js
// Purpose: 
// Author: Claudia Valencia

function checkInput(){
    let searchButton = document.getElementById('addReview-button');
    searchButton.addEventListener('click',addReview);
}

function addReview(){
    let newTab = window.open(""); // open a new tab
    // create HTML for the new page
    let newPageHTML = `<!DOCTYPE html>
    <head>
  <link rel="stylesheet" href="postBrazil.css">
</head>
    <div>
    <h2>Leave a Comment</h2>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required><br><br>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required><br><br>
      <label for="comment">Comment:</label><br>
      <textarea id="comment" name="comment" required></textarea><br><br>
      <button type="submit">Submit</button>
    </form>
  </div>
  
`
    newTab.document.write(newPageHTML)
}

checkInput();