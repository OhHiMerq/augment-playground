import { useState } from 'react'
import { Button } from '@base-ui/components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">
              shadcn/ui React Prototype
            </h1>
            <p className="text-muted-foreground text-lg">
              A simple React setup with shadcn/ui components ready for prototyping
            </p>
          </header>

          <main className="space-y-8">
            <div className="bg-card border rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
              <p className="text-muted-foreground mb-4">
                Your shadcn/ui setup is complete! You can now add components and start prototyping.
              </p>
              
              <div className="flex items-center gap-4">
                <Button onClick={() => setCount((count) => count + 1)}>
                  Count is {count}
                </Button>
                
                <Button variant="outline" onClick={() => setCount(0)}>
                  Reset
                </Button>
              </div>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Install dependencies: <code className="bg-muted px-2 py-1 rounded text-sm">npm install</code></li>
                <li>• Start development server: <code className="bg-muted px-2 py-1 rounded text-sm">npm run dev</code></li>
                <li>• Add shadcn/ui components as needed</li>
                <li>• Start building your prototype!</li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Available Components</h2>
              <p className="text-muted-foreground mb-4">
                You have access to 45+ shadcn/ui components including:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-sm">
                <span className="bg-muted px-2 py-1 rounded">Button</span>
                <span className="bg-muted px-2 py-1 rounded">Card</span>
                <span className="bg-muted px-2 py-1 rounded">Input</span>
                <span className="bg-muted px-2 py-1 rounded">Dialog</span>
                <span className="bg-muted px-2 py-1 rounded">Table</span>
                <span className="bg-muted px-2 py-1 rounded">Form</span>
                <span className="bg-muted px-2 py-1 rounded">Select</span>
                <span className="bg-muted px-2 py-1 rounded">Tabs</span>
                <span className="bg-muted px-2 py-1 rounded">Alert</span>
                <span className="bg-muted px-2 py-1 rounded">Badge</span>
                <span className="bg-muted px-2 py-1 rounded">Avatar</span>
                <span className="bg-muted px-2 py-1 rounded">And more...</span>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App