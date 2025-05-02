// src/router/appRouter.jsx
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Research from '../pages/ResearchAdvocacy';
import Services from '../pages/KeyServices';
import Media from '../pages/MediaGallery';
import Events from '../pages/Events';
import Awards from '../pages/Awards';
import Careers from '../pages/Careers';
import Contact from '../pages/ContactUs';
import Testimonial from '../pages/TestimonialSection';

// Main router configuration
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "research", element: <Research /> },
      { path: "key-services", element: <Services /> },
      { path: "media-gallery", element: <Media /> },
      { path: "testimonialsection", element: <Testimonial /> },
      { path: "events", element: <Events /> },
      { path: "awards", element: <Awards /> },
      { path: "careers", element: <Careers /> },
      { path: "contact", element: <Contact /> }
    ]
  }
]);
