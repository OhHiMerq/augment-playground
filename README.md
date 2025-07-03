# shadcn/ui React Prototype

A complete React setup with shadcn/ui components ready for rapid prototyping.

## 🚀 Quick Start

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173` to see your app running.

## 📦 What's Included

### Core Technologies

- **React 18** - Modern React with hooks
- **TypeScript** - Full type safety
- **Vite** - Fast development server and build tool
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible UI components

### Project Structure

```
├── components/
│   └── ui/                 # shadcn/ui components
│       └── button.tsx      # Example Button component
├── lib/
│   └── utils.ts           # Utility functions (cn helper)
├── src/
│   ├── styles/
│   │   └── globals.css    # Global styles with CSS variables
│   ├── App.tsx            # Main application component
│   └── main.tsx           # React entry point
├── components.json        # shadcn/ui configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.ts         # Vite configuration
└── index.html             # HTML entry point
```

## 🎨 Available Components

This setup gives you access to 45+ shadcn/ui components:

**Layout & Navigation:**

- Card, Separator, Aspect Ratio
- Breadcrumb, Menubar, Navigation Menu
- Sidebar, Tabs

**Forms & Inputs:**

- Button, Input, Textarea
- Select, Checkbox, Radio Group
- Form, Label, Switch, Toggle

**Feedback & Overlays:**

- Alert, Dialog, Sheet, Drawer
- Toast (Sonner), Popover, Tooltip
- Hover Card, Context Menu

**Data Display:**

- Table, Badge, Avatar
- Progress, Skeleton, Chart
- Accordion, Collapsible

**And many more...**

## 🔧 Adding New Components

To add a new shadcn/ui component, you can manually create the component files using the MCP server or copy from the shadcn/ui documentation.

Example: Adding a Card component

1. Create `components/ui/card.tsx`
2. Copy the component code from shadcn/ui docs
3. Import and use in your components

## 🎯 Usage Examples

### Basic Button Usage

```tsx
import { Button } from "@/components/ui/button";

function MyComponent() {
  return (
    <div className="space-x-2">
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}
```

### Using the cn Utility

```tsx
import { cn } from "@/lib/utils";

function MyComponent({ className, ...props }) {
  return (
    <div
      className={cn("base-styles", "conditional-styles", className)}
      {...props}
    />
  );
}
```

## 🌙 Theme Support

The setup includes full light/dark mode support with CSS variables. Toggle between themes by adding/removing the `dark` class on the `html` element.

```tsx
// Example theme toggle
function ThemeToggle() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return <Button onClick={toggleTheme}>Toggle Theme</Button>;
}
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🛠️ Configuration

### Path Aliases

The project uses `@/*` path aliases configured in:

- `tsconfig.json` - TypeScript path mapping
- `vite.config.ts` - Vite resolver aliases

### Tailwind CSS

Custom configuration in `tailwind.config.js` includes:

- shadcn/ui color system
- Custom animations
- Responsive breakpoints

### CSS Variables

All theme colors are defined as CSS variables in `src/styles/globals.css` for easy customization.

## 🚀 Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## 📚 Resources

- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)

## 🤝 Contributing

This is a prototype setup. Feel free to customize and extend it for your specific needs!
