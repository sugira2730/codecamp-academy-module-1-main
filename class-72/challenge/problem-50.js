/*
    Author: Emmanuel Sugira <sugira2730>
    Solution: Movie Watchlist Manager
*/

// Initial Movie Watchlist 
let watchlist = ["Inception", "Interstellar", "The Matrix", "Gladiator"];

// 1. Print the total number of Movie Watchlist
console.log("\n***********************************************");
console.log(`Total movie watchlist: ${watchlist.length}`);
console.log("***********************************************");

// 2. Add two new movies
watchlist.push("The Dark Knight");
watchlist.push("Avatar");

console.log("\n***********************************************");
console.log(`watchlist after adding new movies: ${watchlist}`);
console.log("***********************************************");

// 3. Add a new Movie to the beginning of the watchlist

console.log("\n***********************************************");
console.log(`watchlist after updates: ${watchlist}`);
console.log("***********************************************");
// 4. Remove the last movie from the watchlist
let removedLastMovie = watchlist.pop();
console.log("\n***********************************************");
console.log(`Removed last product: ${removedLastMovie}`);
console.log("***********************************************");


// 5. Print the first movie in the watchlist
console.log("\n***********************************************");
console.log(`First movie in the watchlist: ${watchlist[0]}`);
console.log("***********************************************");

// 6. Print the Last movie in the watchlist
console.log("\n***********************************************");
console.log(`last movie in the watchlist: ${watchlist[watchlist.length - 1]}`);
console.log("***********************************************");

// 7. Check if the watchlist has more than 5 movies
if (watchlist.length > 4) {
    console.log("\n***********************************************");
    console.log("You have many movies to watch!");
    console.log("***********************************************");
} else {
    console.log("\n***********************************************");
    console.log("Your watchlist is small");
    console.log("***********************************************");
}

// 8. Print all movies on whatchList with their position number 
console.log("Current watchList: ");

for (let i = 0; i < watchlist.length; i++) {
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
    console.log(`${i + 1} - ${watchlist[i]}`);
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
}

