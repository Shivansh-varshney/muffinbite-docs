# MuffinBite Documentation

Official documentation website for **MuffinBite**, a powerful CLI-based email automation tool that blends personalization with efficiency.

## About

This is the documentation site for MuffinBite, built with Next.js 15. It provides comprehensive guides, setup instructions, and usage examples for the MuffinBite email automation framework.

<!-- **Live Site**: [Visit Documentation](https://muffinbite-docs.vercel.app) *(if deployed)* -->

## Features

- **Interactive Documentation**: Comprehensive guides covering introduction, requirements, setup, and usage
- **Modern UI**: Built with Next.js 15, React 19, and Tailwind CSS 4
- **Smooth Animations**: GSAP and Framer Motion for fluid page transitions
- **Developer Profile**: Meet the creator and get in touch
## Installation

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/muffinbite-docs.git
cd muffinbite-docs

# Install dependencies
npm install

# Run development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

The development server will start at `http://localhost:3000`

## Project Structure

```
muffinbite-docs/
├── src/
│   ├── app/
│   │   ├── docs/     
│   │   │   ├── introduction/
│   │   │   ├── requirements/
│   │   │   ├── set_up/
│   │   │   ├── commands/
│   │   │   └── use/
│   │   ├── developer/
│   │   ├── layout.js 
│   │   ├── page.js   
│   │   └── globals.cs
│   ├── components/
│   │   ├── ui/       
│   │   │   ├── Logo.jsx
│   │   │   ├── Particles.jsx
│   │   │   ├── PillNav.jsx
│   │   │   ├── SplitText.jsx
│   │   │   ├── sidebar.jsx
│   │   │   └── tabs.jsx
│   │   ├── Menu.jsx
│   │   └── NavBar.jsx
│   └── lib/
│       └── utils.js  
├── public/
│   ├── demos/        
│   ├── downloads/    
│   ├── logo.png
│   ├── profile.jpg
│   └── favicon.ico
├── components.json   
├── next.config.mjs   
├── tailwind.config.js
└── package.json
```

## Key Components

### Custom UI Components

- **Particles**: Animated particle background effect using OGL
- **SplitText**: GSAP-powered text animation with character splitting
- **NavBar**: Responsive navigation with smooth transitions
- **PillNav**: Pill-style navigation component
- **Tabs**: Custom animated tab component with sliding indicator

### Pages

- **Home**: Landing page with animated logo and tagline
- **Introduction**: Overview and features of MuffinBite
- **Requirements**: Setup prerequisites for Gmail API and SMTP
- **Setup**: Installation guides (download, pip, clone)
- **Commands**: CLI command reference
- **Usage**: Usage examples and tutorials
- **Developer**: Developer profile with contact form

## Documentation Content

The documentation covers:

1. **Introduction to MuffinBite**: Background, features, and upcoming updates
2. **Requirements**: Gmail API and SMTP service provider setup
3. **Installation Methods**: Download, pip install, or clone repository
4. **Command Reference**: All CLI commands and options
5. **Usage Examples**: Practical guides for sending campaigns

## Contributing

Contributions are welcome! If you'd like to improve the documentation:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add new documentation section'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## Developer

**Shivansh Varshney**
- GitHub: [@Shivansh-varshney](https://github.com/Shivansh-varshney)
- LinkedIn: [Shivansh Varshney](https://www.linkedin.com/in/shivansh-varshney/)

## License

This project is part of the MuffinBite ecosystem. Please refer to the main MuffinBite repository for licensing information.

## Related

- **MuffinBite CLI**: [Main Repository](https://github.com/Shivansh-varshney/MuffinBite)
- **PyPI Package**: [MuffinBite on PyPI](https://pypi.org/project/muffinbite/)
