# Corserva Landing Page

A modern, responsive landing page built with React featuring a PPT carousel and GetOdin chat integration.

## Features

- **Hero Section**: Beautiful gradient background with welcome message
- **PPT Carousel**: Auto-playing carousel for presentation slides using react-slick
- **GetOdin Chat**: Integrated AI chat assistant widget
- **Responsive Design**: Mobile-friendly layout with modern styling
- **Clean Architecture**: Modular component structure

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd corserva
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open in your browser at `http://localhost:3000`.

## Project Structure

```
src/
├── components/
│   └── PPTCarousel.js     # PPT slides carousel component
├── assets/
│   └── Omedym_Presentation.pptx  # PPT file (for reference)
├── App.js                 # Main application component
├── App.css               # Main styles
├── index.js              # Application entry point
└── index.css             # Global styles
```

## Customization

### Adding Real PPT Slides

To display actual PPT slides, you'll need to:

1. Convert PPT slides to images (PNG/JPG format)
2. Update the `defaultSlides` array in `PPTCarousel.js` with your slide images
3. Or pass slides as props to the `PPTCarousel` component

Example:
```javascript
const mySlides = [
  {
    id: 1,
    title: "Your Slide Title",
    description: "Your slide description",
    image: "/path/to/your/slide1.jpg"
  }
];

<PPTCarousel slides={mySlides} />
```

### GetOdin Chat Configuration

The GetOdin chat widget is configured with:
- Project ID: `fe11380c55a148b0904518`
- Frame Type: `widget`

To change these settings, update the values in `App.js` within the `useEffect` hook.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (not recommended)

## Technologies Used

- React 19.1.1
- react-slick (carousel functionality)
- CSS3 (styling and animations)
- GetOdin AI Chat Widget

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.
