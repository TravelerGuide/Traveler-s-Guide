// File: search.js
// Purpose: let user input a country name on the search bar and return a page with the locations in that country
// Author: Charles Wu

function checkInput(){
    let searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click',searchForCountry);
}

function searchForCountry(){
    let countryInput = document.getElementById('search-box');
    let countryName = countryInput.value;
    let newTab = window.open(""); // open a new tab
    // create HTML for the new page
    let newPageHTML = `<!DOCTYPE html>
<html>
<head>
    <title>Traverler's Guide</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        body,h1,h2,h3,h4,h5,h6 {font-family: "Raleway", Arial, Helvetica, sans-serif}
        .myLink {display: none}
    </style>
</head>
<body class="w3-light-grey">

<!-- Navigation Bar -->
<div class="w3-bar w3-white w3-border-bottom w3-xlarge">
    <a href="#" class="w3-bar-item w3-button w3-text-red w3-hover-red"><b><i class="fa fa-map-marker w3-margin-right"></i>Traveler's Guide</b></a>
    <a href="#" class="w3-bar-item w3-button w3-right w3-hover-red w3-text-grey"><i class="fa fa-search"></i></a>
</div>

<!-- Page content -->
<div class="w3-content" style="max-width:1100px;">
    <!-- Explore Nature -->
    <div class="w3-container">
        <h3>Results for Brazil</h3>
    </div>
    <div class="w3-row-padding">
        <div class="w3-half w3-margin-bottom">
            <img src="images/iguazu.jfif" alt="Norway" style="width:100%">
            <div class="w3-container w3-white">
                <h3>Iguazu Falls, Foz do Iguaçu</h3>
                <p class="w3-opacity">3 Reviews</p>
                <p>Iguazu Waterfalls are a breathtaking natural wonder on the Argentina-Brazil border, featuring over 270 cascades that reach heights of up to 260 feet. It's a popular tourist spot and a UNESCO World Heritage Site.</p>
                <button class="w3-button w3-margin-bottom">View Reviews</button>
            </div>
        </div>
        <div class="w3-half w3-margin-bottom">
            <img src="images/christredeemer.jfif" alt="Germany" style="width:100%">
            <div class="w3-container w3-white">
                <h3>Christ Redeemer, Rio de Janeiro</h3>
                <p class="w3-opacity">2 Reviews</p>
                <p>Christ the Redeemer is a 98-foot tall statue of Jesus Christ located on Corcovado Mountain in Rio de Janeiro, Brazil. It is an iconic symbol of Christianity and Brazilian culture.</p>
                <button class="w3-button w3-margin-bottom">View Reviews</button>
            </div>
        </div>
        <div class="w3-row-padding">
            <div class="w3-half w3-margin-bottom">
                <img src="images/lencois.jfif" alt="Norway" style="width:100%">
                <div class="w3-container w3-white">
                    <h3>Lençóis Maranhenses National Park, Barreirinhas</h3>
                    <p class="w3-opacity">1 Reviews</p>
                    <p>Lençóis Maranhenses National Park is a striking landscape in Maranhão, Brazil, with miles of sand dunes interrupted by freshwater lagoons. It's a wildlife sanctuary and a popular tourist spot for hiking, swimming, and sightseeing.</p>
                    <button class="w3-button w3-margin-bottom">View Reviews</button>
                </div>
            </div>
            <div class="w3-half w3-margin-bottom">
                <img src="images/beco.jfif" alt="Germany" style="width:100%">
                <div class="w3-container w3-white">
                    <h3>Beco do Batman, São Paulo</h3>
                    <p class="w3-opacity">2 Reviews</p>
                    <p>Beco do Batman is a colorful alleyway in São Paulo's Vila Madalena neighborhood filled with creative street art. It's a popular spot for taking photos and experiencing the city's artistic culture.</p>
                    <button class="w3-button w3-margin-bottom">View Reviews</button>
                </div>
            </div>
        </div>

        <!--Login -->
        <div class="w3-container">
            <div class="w3-panel w3-padding-16 w3-black w3-opacity w3-card w3-hover-opacity-off">
                <h2>Subscribe To Us!</h2>
                <p>Get news on new tips for traveling!.</p>
                <label>Email</label>
                <input class="w3-input w3-border" type="text" placeholder="Your Email">
                <button type="button" class="w3-button w3-red w3-margin-top">Subscribe</button>
            </div>
        </div>



        <!-- Contact -->
        <div class="w3-container">
            <div class="w3-panel w3-padding-16 w3-black w3-opacity w3-card w3-hover-opacity-off">

                <img src="https://cdn3.vectorstock.com/i/1000x1000/10/07/letter-t-g-tour-and-travel-vector-19871007.jpg"  align="right" style="align-right" style="width:100%" height = 320 >

                <h2>Contact</h2>
                <i class="fa fa-map-marker" style="width:30px"></i> Philadelphia, US<br>

                <i class="fa fa-phone" style="width:30px"></i> Phone: +00 151515<br>
                <i class="fa fa-envelope" style="width:30px"> </i> Email: travelersguide12@outlook.com<br>

                <form action="https://formsubmit.co/travelersguide12@outlook.com" method="POST">
                    <input type="hidden" name="_next" value="https://ania-kubow.com/thankyou.html">

                    <p></p>
                    <input type="text" name="name"  placeholder="Message" required>
                    <p></p>
                    <input type="email" name="email"  placeholder="Email"required>
                    <p></p>
                    <button type="submit" class="w3-button w3-red w3-margin-top">Send
                </form>


            </div>


            <!-- End page content -->
        </div>


        <script>
            // Tabs
            function openLink(evt, linkName) {
                var i, x, tablinks;
                x = document.getElementsByClassName("myLink");
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";
                }
                tablinks = document.getElementsByClassName("tablink");
                for (i = 0; i < x.length; i++) {
                    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
                }
                document.getElementById(linkName).style.display = "block";
                evt.currentTarget.className += " w3-red";
            }

            // Click on the first tablink on load
            document.getElementsByClassName("tablink")[0].click();
        </script>

</body>
</html>


`
    newTab.document.write(newPageHTML)
}

checkInput();
