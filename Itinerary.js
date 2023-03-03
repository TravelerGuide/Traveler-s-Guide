// File: search.js
// Purpose: 
// Author: Claudia Valencia

function checkInput(){
    let searchButton = document.getElementById('itinerary-button');
    searchButton.addEventListener('click',itinerary);
}

function addReview(){
    let newTab = window.open(""); // open a new tab
    // create HTML for the new page
    let newPageHTML = `<!DOCTYPE html>
    <!DOCTYPE html>
	<html>
	<head>
		<title>Itinerary Details</title>
	</head>
	<body>
		<h1>Itinerary Details</h1>
		<form>
			<label for="destination">Destination:</label>
			<input type="text" id="destination" name="destination" required><br><br>
			<label for="arrival">Arrival Date:</label>
			<input type="date" id="arrival" name="arrival" required><br><br>
			<label for="departure">Departure Date:</label>
			<input type="date" id="departure" name="departure" required><br><br>
			<label for="accommodation">Accommodation:</label>
			<input type="text" id="accommodation" name="accommodation" required><br><br>
			<label for="activities">Activities:</label>
			<textarea id="activities" name="activities" rows="5" cols="30" required></textarea><br><br>
			<input type="submit" value="Submit">
		</form>
	</body>
	</html>

	`
    newTab.document.write(newPageHTML)
}

checkInput();