# CLSO Ingeniería Eléctrica - React Application Landing Page

By [http://AlejandroDeLaRocha.com](http://AlejandroDeLaRocha.com)

This is a modern React implementation of the CLSO Ingeniería Eléctrica website, featuring responsive design, smooth animations, and internationalization support.

<img width="1070" height="847" alt="Screenshot 2025-10-02 at 6 20 14 p m" src="https://github.com/user-attachments/assets/ef22e526-dd92-42ad-b8c1-2a112b53e594" />



![ezgif-100f2aa80f579b (1)-min](https://github.com/user-attachments/assets/f516a9e3-acee-4379-91a3-1f16f6f1595a)



## Features

https://github.com/user-attachments/assets/cf186690-d751-45fb-825b-4333ee00ebd3



- **Responsive Design**: Fully responsive layout that works on all devices
- **Internationalization**: Built-in support for multiple languages (Spanish/English)
- **Smooth Animations**: Custom scroll animations and transitions
- **Modern Stack**: Built with React 18, TypeScript, and React Bootstrap
- **Optimized Performance**: Code splitting and lazy loading for better performance

## Prerequisites

- Node.js (v14 or later)
- npm (v7 or later) or yarn

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/clso-react.git
   cd clso-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open in browser**
   The application will be available at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── assets/               # Static assets (images, fonts, etc.)
├── components/           # Reusable UI components
│   ├── About/           # About section component
│   ├── Contact/         # Contact form and information
│   ├── Footer/          # Footer component
│   ├── Header/          # Header and navigation
│   ├── Portfolio/       # Portfolio showcase
│   └── Services/        # Services listing
├── config/              # Configuration and constants
├── context/             # React context providers
├── hooks/               # Custom React hooks
└── styles/              # Global styles and themes
```

## Available Scripts

- `npm start` - Start the development server
- `npm test` - Run tests
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
REACT_APP_API_URL=your_api_url_here
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

## Internationalization (i18n)

The application supports multiple languages through the `LanguageContext`. To add a new language:

1. Add the language data to `src/context/LanguageContext.tsx`
2. Update the language selector in the header component
3. Add the corresponding flag image to the `public/assets/img` directory

## Deployment

To create a production build:

```bash
npm run build
```

This will create a `build` directory with the production-ready files that can be deployed to any static file hosting service like Netlify, Vercel, or GitHub Pages.

## Technologies Used

- React 18
- TypeScript
- React Bootstrap 5
- React Icons
- React Scroll
- React Router
- Glide.js (for carousel)
- CSS3 / SASS

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License


This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or inquiries, please contact [alejandrodlarocha@gmail.com](mailto:alejandrodlarocha@gmail.com)
