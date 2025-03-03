# NASA APOD Viewer

## Overview

The NASA APOD (Astronomy Picture of the Day) Viewer is a React-based web application that fetches and displays the Astronomy Picture of the Day from NASA's API. The application showcases the image in high definition along with its title and provides a modal sidebar for additional details such as the date and explanation of the image.

## Features

- **Daily Astronomy Picture**: Fetches and displays the NASA APOD image for the current day.
- **High-Definition Image**: Displays the image in high definition for a better viewing experience.
- **Caching Mechanism**: Utilizes local storage to cache the daily image data, reducing API calls and improving load times.
- **Responsive Design**: Ensures a seamless experience across various devices and screen sizes.
- **Interactive Modal**: Provides a sidebar modal with detailed information about the image, including the date and a detailed explanation.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A modern build tool for fast development and optimized production builds.
- **NASA APOD API**: Used to fetch the daily astronomy picture and related data.
- **CSS**: Custom styles for a sleek and modern user interface.
- **Font Awesome**: Icons for UI elements like the info button and loading spinner.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/nasa-apod-viewer.git
   cd nasa-apod-viewer
2. **Install Dependencies:**
   ```bash
   npm install
3. **Set Up Environment Variables:**
   Create a .env file in the root directory and add your NASA API key
   ```bash
   VITE_NASA_API_KEY=your_nasa_api_key_here
4. **Run the Application:**
   ```bash
   npm run dev
5. **Open the Application:**
   Visit http://localhost:3000 in your browser to view the application.
   
## Usage
**View the Image**: The main page displays the high-definition image of the day.

**Toggle Sidebar**: Click the info button in the footer to open the sidebar modal with detailed information about the image.

**Close Sidebar**: Click the overlay or the close button in the sidebar to close the modal.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure that your code adheres to the existing style and includes appropriate tests.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments
**NASA**: For providing the APOD API.<br>
**React Community**: For the extensive documentation and resources.<br>
**Vite**: For the fast and efficient build tool.<br>
