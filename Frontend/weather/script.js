 
//  //json
  
// console.log("=== Hour 1: JSON BASIC ===");

// let student = {
//     name: "Megha Suvarchala",
//     age: 20,    
//     marks: [85,90,55]
// };

// //convert object -> JSON string
// let jsonString = JSON.stringify(student);
// console.log("JSON String:", jsonString);
// console.log("Type of jsonString:", typeof jsonString);

// //convert JSON string -> object
// let parsedObject = JSON.parse(jsonString);
// console.log("parsed Object:", parsedObject);

// //variable of Books title ,price and author name
// let books = [
//     {title: "Atomic Habit", price: 200, authorName: "subbu"},
//     {title: "AI&ML", price: 150, authorName: "anitha"},
//     {title: "stanger Things", price: 300, authorName: "megha"}
// ];  
// let booksJsonString = JSON.stringify(books);
// console.log("Books JSON String:", booksJsonString);
// let parsedBooks = JSON.parse(booksJsonString);
// console.log("Parsed Books Object:", parsedBooks);

// // Fetch sample json from API
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response =
//     let output = "<h3>Users List</h3><ul>";
//     users.forEach(user => {
//         output += `<li>${user.name} - (${user.email})</li>`;
//     });
//     output += '</ul>';
//     //append result to page
//     document.body.innerHTML += output;
//   });
  
// //weather info retcher project
// console.log("=== weather Info Fetcher Project ===");
// //json

//predefined city -> coordinates
const cityCoords = {
    "bangalore": { lat: 12.97, lon: 77.59 },
    "delhi": { lat: 28.61, lon: 77.23 },
    "mumbai": { lat: 19.07, lon: 72.87 },
    "london": { lat: 51.51, lon: -0.13 },
    "new york": { lat: 40.71, lon: -74.01 }
};

// Event listener for button
document.getElementById("fetchBtn").addEventListener("click", () => {
    let city = document.getElementById("cityInput").value.toLowerCase();

    if (!cityCoords[city]) {
        document.getElementById("Weather").innerHTML = "⚠️ City not in list!";
        return;
    }

    let coords = cityCoords[city];
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

    // AJAX Fetch
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.current_weather) {
                document.getElementById("Weather").innerHTML = `
                    <h3>Weather in ${city}</h3>
                    <p>🌡️ Temp: ${data.current_weather.temperature}°C</p>
                    <p>🍃 Wind: ${data.current_weather.windspeed} km/h</p>
                    <p>⏲️ Time: ${data.current_weather.time}</p>
                `;
            } else {
                document.getElementById("Weather").innerHTML = "⚠️ Weather data not available!";
            }
        })
        .catch(err => {
            console.error(err);
            document.getElementById("Weather").innerHTML = "⚠️ Error fetching weather data!";
        });
});
