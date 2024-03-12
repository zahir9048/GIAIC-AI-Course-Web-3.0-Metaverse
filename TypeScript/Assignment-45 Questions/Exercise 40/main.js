// Exercise 40
console.log("\nExercise 40");
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
        tracks: tracks
    };
    return album;
}
var album1 = make_album("Taylor Swift", "Love story");
console.log("Title: " + album1.title + ", Artist: " + album1.artist);
var album2 = make_album("Atif Aslam", "Aadat");
console.log("Title: " + album2.title + ", Artist: " + album2.artist);
var album3 = make_album("Panda", "Designer", 45);
console.log("Title: " + album3.title + ", Artist: " + album3.artist + ", Tracks: " + album3.tracks);
