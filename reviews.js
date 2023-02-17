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
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE-edge">
    <meta name="viewport" content="width=device-width", initial-scale="1.0">
    <title>Comment Box</title>
</head>
<body>
    <div class="comment-session">
        <div class="post-comment">
            <div class="list">
                <div class="user">
                    <div class="user-meta">
                        <div class="name">Name:</div>
                    </div>
                </div>
                <div class="comment-post">Comment:</div>
            </div>
        </div>
        <div class="comment-box">
            <div class="user">
                <div class="name">Name:</div>
            </div>
            <form action="" method="post">
                <textarea name="comment" placeholder="Your Message"></textarea>
                <button class="comment-submit">Comment</button>
            </form>
        </div>
    </div>
</body>
</html>
`
    newTab.document.write(newPageHTML)
}

checkInput();