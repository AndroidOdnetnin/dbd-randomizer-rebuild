# DBD Randomizer Rebuild

A lightweight, ad-free rebuild of the Dead by Daylight randomizer website using modern web technologies.

## Project Overview

This project aims to provide a cleaner, faster, and feature-rich alternative to the original DBD Randomizer website. Built with Next.js and TypeScript, this application delivers a seamless experience for Dead by Daylight players looking to randomize their loadouts.

## Features (Planned)

- 🎮 **Survivor Randomizer**: Randomly select survivors and generate complete loadouts
- 🔪 **Killer Randomizer**: Pick random killers with perks and add-ons
- ⚙️ **Custom Options**: Full control over randomization parameters
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile
- 🎨 **No Ads**: Clean, distraction-free interface
- 🔓 **All Features Unlocked**: Every feature available to all users

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AndroidOdnetnin/dbd-randomizer-rebuild.git
cd dbd-randomizer-rebuild
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

## Project Structure

```
.
├── app/
│   ├── layout.tsx       # Root layout component
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # Reusable React components
├── public/              # Static assets
├── .github/             # GitHub configuration and instructions
├── tsconfig.json        # TypeScript configuration
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Project dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Development Roadmap

1. **Phase 1**: Core UI and layout
2. **Phase 2**: Survivor/Killer randomization engine
3. **Phase 3**: Data integration (perks, add-ons, survivors, killers)
4. **Phase 4**: Advanced features (saved loadouts, statistics)
5. **Phase 5**: Mobile optimization and PWA support

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## License

This project is for personal use and skill development. Dead by Daylight is a trademark of Behaviour Interactive.

## Acknowledgments

- Inspired by the original DBD Randomizer website
- Built with modern web development best practices
- Created for educational purposes and skill enhancement

## Contact

For questions or suggestions, please open an issue on GitHub.

---

**Note**: This is a personal project created for learning purposes. All game data should be used in accordance with Behaviour Interactive's terms of service.
