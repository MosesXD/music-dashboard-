# Soundscape — Music Discovery Dashboard

A client-side music discovery dashboard prototype built with HTML, CSS, and vanilla JavaScript.

## Features
- Responsive dashboard layout.
- Search demo tracks by title, artist, genre, or mood.
- Filter by genre.
- Add and remove favorites; choices persist in this browser.
- Mark demo tracks as recently played; the three most recent choices persist in this browser.
- Artist, genre, mood, and track-duration sample data.
- Accessible favorite controls expose their pressed state to assistive technology.

## Run
Open `index.html` in a modern browser. The demo uses fictional sample tracks and does not stream audio or call a music API.

## Local data and privacy
Favorites and recent plays are stored in this browser with `localStorage`. They are not synced to an account or another device. Clearing browser site data removes them. If browser storage is unavailable, the dashboard remains usable but choices will not persist. Do not enter personal or sensitive information.

## API integration: later milestone
Before adding an API, choose a provider, read its current developer terms and attribution requirements, verify whether playback/preview data is available, and keep any secret credentials off the frontend. A public static site cannot safely protect private API keys. Build and test the demo UI first.

## Limitations
Track names and artists are fictional demo content, not real catalog listings. The recent-play control records a demo interaction; it does not play audio. This is a UI prototype, not a streaming service.

## Manual checks
1. Open the dashboard and add or remove a favorite.
2. Refresh the page and confirm the favorite remains selected.
3. Mark a track as recently played, refresh, and confirm it appears first.
4. Remove a favorite from the Favorites section and confirm the Discover card updates.
5. Clear this site's browser storage and confirm the app returns to its default sample state.

## Roadmap
- [ ] Add empty/loading/error states and keyboard testing.
- [ ] Add accessible cover descriptions.
- [ ] Evaluate a permitted public music API.
- [ ] Add real API data only after terms, attribution, and key-handling are reviewed.
- [ ] Capture screenshots and write a portfolio case study.
