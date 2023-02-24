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
    <!DOCTYPE html>
<html>
<head>
  <title>Comments</title>
  <link rel="stylesheet" href="postBrazil.css">
</head>
<body>
  <div>
    <h2>Comments</h2>
    <div class="comment">
      <h3>Nazli Iclal Karaman</h3>
      <p class="comment-date">Turkey</p>
      <p class="comment-date">February 22, 2023</p>
      <p class="comment-text">This is a great website! It's nice to write about my own experiences. </p>
    </div>
    <div class="comment">
      <h3>Kaylen Bom</h3>
      <p class="comment-date">Brazil</p>
      <p class="comment-date">February 20, 2023</p>
      <p class="comment-text">I love the design of this website. It's really usefull for travellers.</p>
    </div>
    <h2>Leave a Comment</h2>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required><br><br>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required><br><br>
      <label for="comment">Comment:</label><br>
      <label for="name">Country:</label>
      <input type="text" id="name" name="Country" required><br><br>
      <textarea id="comment" name="comment" required></textarea><br><br>
      <button type="submit">Submit</button>
    </form>
  </div>
</body>
</html>


  
`
    newTab.document.write(newPageHTML)
}

checkInput();