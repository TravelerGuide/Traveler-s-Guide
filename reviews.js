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
  <title>Search Countries</title>
  <link rel="stylesheet" href="postBrazil.css">
</head>
<body>
  <header>
    <div class="container">
      <h1>Search Countries</h1>
      <div class="search-container">
        <form action="/search">
          <input type="text" placeholder="Search countries...">
          <button type="submit"><i class="fa fa-filter"></i></button>
        </form>
      </div>
    </div>
  </header>
  <main>

<body>
  <div>
    <h2>Reviews</h2>
    <div class="comment-container">
    <div class="comment">
      <h3>Nazli Iclal Karaman</h3>
      <p class="comment-date">Turkey/Istanbul/Kadikoy</p>
      <p class="comment-date">February 22, 2023</p>
      <p class="comment-text">This is a great website! It's nice to write about my own experiences. 
      If you want to spend your free full day in Kadikoy, you can find a beatiful place in every corner.
      You may buy whatever you need, you can see many shopping area, or have a delicious lunch and dinner. I can say that you can not forget this experience. </p>
    </div>
    <div class="comment-container">
    <div class="comment">
      <h3>Kaylen Bom</h3>
      <p class="comment-date">Brazil</p>
      <p class="comment-date">February 20, 2023</p>
      <p class="comment-text">I love the design of this website. It's really usefull for travellers.</p>
    </div>
    </div>
    <h2>Leave a Comment</h2>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required><br><br>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required><br><br>
      <label for="name">Country:</label>
      <input type="text" id="name" name="Country" required><br><br>
      <label for="comment">Comment:</label><br>
      <textarea id="comment" name="comment" required></textarea><br><br>
      <button type="submit">Submit</button>
    </form>
  </div>
  </main>
  </body>
  </html>


  
`
    newTab.document.write(newPageHTML)
}

checkInput();