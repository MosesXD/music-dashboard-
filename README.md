# Soundscape — Music Discovery Dashboard

A client-style music discovery dashboard prototype built with HTML, CSS, and vanilla JavaScript.

## Features
- Responsive dashboard layout.
- Search demo tracks by title, artist, genre, or mood.
- Filter by genre.
- Add/remove favorites.
- Mark demo tracks as recently played.
- Artist, genre, mood, and track-duration sample data.

## Run
Open `index.html` in a modern browser. The demo uses fictional sample tracks and does not stream audio or call a music API.

## API integration: later milestone
Before adding an API, choose a provider, read its current developer terms and attribution requirements, verify whether playback/preview data is available, and keep any secret credentials off the frontend. A public static site cannot safely protect private API keys. Build and test the demo UI first.

## Limitations
Favorites and recent plays reset when the page is refreshed; persistence is not implemented. Track names and artists are demo content, not real catalog listings. This is a UI prototype, not a streaming service.

## Roadmap
- [ ] Save favorites and history in browser storage.
- [ ] Add empty/loading/error states and keyboard testing.
- [ ] Add accessible cover descriptions.
- [ ] Evaluate a permitted public music API.
- [ ] Add real API data only after terms, attribution, and key-handling are reviewed.
- [ ] Capture screenshots and write a portfolio case study.
