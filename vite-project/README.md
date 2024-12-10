# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Project Overview
# 1. App.jsx
Purpose:

App.jsx serves as the entry point for the React application, managing the overall layout and routing. It includes the main navigation and structure, determining which page to display based on the current URL path.
Functions and Features:

Routing: It utilizes React Router to map different routes to components (HomePage, ShowPage, and FavoritesPage), enabling users to navigate between various views of the application.
State Management: The component manages key state variables like the list of favorite podcasts, which may be passed down to child components for rendering.
# 2. api.js
Purpose:

api.js handles all API-related tasks, including sending requests to the backend and processing the response. It allows the app to interact with external data sources, fetching podcast previews and detailed show information.
Functions and Features:

Fetching Previews: The fetchPreviews function makes a request to the backend to retrieve a list of podcast previews. This data is used to populate the homepage with available podcasts.
Fetching Show Details: The fetchShow function retrieves detailed information about a specific podcast show, including its episodes and metadata, based on a unique show ID passed to it.
# 3. genreMapper.js
Purpose:

This file acts as a utility for mapping genre IDs to their corresponding human-readable genre names, simplifying the display of genre information in the UI.
Functions and Features:

Genre Mapping: The genreMap object stores a predefined mapping between numerical genre IDs (e.g., 1, 2, 3) and their string equivalents (e.g., "Personal Growth", "Comedy"). This makes it easy to display the appropriate genre name whenever needed.
# 4. HomePage.jsx
Purpose:

HomePage.jsx is the component that renders the main landing page of the app. It displays a list of podcast previews retrieved from the backend API, offering users a glimpse of available content.
Functions and Features:

Data Fetching: The page uses React's useEffect hook to fetch podcast preview data when the component is mounted, ensuring that the latest podcasts are displayed.
State Management: The component manages state for the fetched podcast previews, which are then passed down to child components for rendering.
# 5. ShowPage.jsx
Purpose:

ShowPage.jsx is responsible for displaying detailed information about a single podcast show. When a user clicks on a podcast preview from the homepage, they are taken to this page to view more in-depth details.
Functions and Features:

URL Parameters: The component retrieves the show ID from the URL using React Router's useParams hook, allowing it to load the specific podcast details.
Data Fetching: Similar to the homepage, ShowPage.jsx uses the useEffect hook to fetch detailed podcast data from the backend based on the show ID, which is displayed to the user.
# 6. FavoritesPage.jsx
Purpose:

FavoritesPage.jsx allows users to view their saved favorite podcasts. It renders a list of podcasts that users have previously marked as favorites.
Functions and Features:

Local Storage Integration: The component uses localStorage to persist the user's favorite podcasts across sessions, ensuring that the list remains intact even when the page is refreshed or the app is reopened.
State Management: The list of favorites is managed using React state, and the component re-renders when the favorites change.
# 7. ShowDetails.jsx
Purpose:

ShowDetails.jsx is a presentational component used to display detailed information about a selected podcast show. It receives data as props from its parent component and formats it for display.
Functions and Features:

Props: This component expects to receive props that contain information about a specific podcast show, such as the description, episodes, and genre.
Presentation: The component is primarily concerned with how the podcast details are displayed, including formatting the text and arranging the layout.
# 8. SearchBar.jsx
Purpose:

SearchBar.jsx is a functional component that allows users to search for podcasts based on keywords or genre. It provides a dynamic way for users to filter the podcast list without leaving the current page.
Functions and Features:

Search Input Handling: The component uses React's useState to manage the state of the search query and updates the displayed results as the user types.
Event Handling: It listens for input changes and triggers a re-render when the user modifies the search term.
# 9. AudioPlayer.jsx
Purpose:

AudioPlayer.jsx manages the playback functionality of podcast episodes. It allows users to play, pause, and control the audio directly from the app.
Functions and Features:

State Management: The component manages the play/pause state of the audio player and updates the UI accordingly.
Audio Control: It uses a reference to the HTML audio element to control playback, such as playing or pausing the episode based on user interaction.
# 10. utils.js
Purpose:

utils.js contains various helper functions that are used throughout the application. These functions simplify common tasks such as saving data to local storage, formatting strings, and other small operations.
Functions and Features:

Local Storage Functions: Functions like saveToLocalStorage and loadFromLocalStorage abstract the process of interacting with the browser’s local storage, making it easier to store and retrieve data (e.g., user favorites).
Data Manipulation: Includes helper functions like capitalizeWords for capitalizing the first letter of each word in a string and truncateDescription to shorten long descriptions.
