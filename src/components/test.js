const apiKey = '7276803dfb29789520c23c686b9ce6c1';
// Function to create a guest session and fetch rated movies
async function getRatedMovies() {
  try {
    // Step 1: Create a guest session
    const guestSessionResponse = await fetch(
      `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${apiKey}`
    );
    const guestSessionData = await guestSessionResponse.json();
    const guestSessionId = guestSessionData.guest_session_id;

    // Step 2: Get rated movies using the guest session
    const ratedMoviesResponse = await fetch(
      `https://api.themoviedb.org/3/guest_session/${guestSessionId}/rated/movies?api_key=${apiKey}`
    );
    const ratedMoviesData = await ratedMoviesResponse.json();

    // Step 3: Display rated movies
    const ratedMovies = ratedMoviesData.results;
    ratedMovies.forEach((movie) => {
      console.log(`Title: ${movie.title}, Rating: ${movie.rating}`);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function to retrieve rated movies
getRatedMovies();
