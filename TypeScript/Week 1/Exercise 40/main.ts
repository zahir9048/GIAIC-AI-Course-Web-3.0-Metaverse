// Exercise 40
console.log("\nExercise 40");

function make_album(artist_name: string, album_title: string, tracks?: number): { artist: string; title: string; tracks?: number } {
    const album = {
        artist: artist_name,
        title: album_title,
        tracks: tracks
    };

    return album;
}

const album1 = make_album("Taylor Swift", "Love story");
console.log("Title: " + album1.title + ", Artist: " + album1.artist);

const album2 = make_album("Atif Aslam", "Aadat");
console.log("Title: " + album2.title + ", Artist: " + album2.artist);

const album3 = make_album("Panda", "Designer", 45);
console.log("Title: " + album3.title + ", Artist: " + album3.artist + ", Tracks: " + album3.tracks);
