import { useState } from 'react'
import { Button } from '@base-ui/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@base-ui/components/ui/card'
import { Badge } from '@base-ui/components/ui/badge'
import { Input } from '@base-ui/components/ui/input'
import { Label } from '@base-ui/components/ui/label'
import { UserCard } from '@base-ui/components/user-card'
import { ThemeToggle } from '@base-ui/components/theme-toggle'

function App() {
  const [count, setCount] = useState(0)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header with Theme Toggle */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/60"></div>
            <h1 className="text-xl font-bold">shadcn/ui Showcase</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium mb-4">
              🎉 <span className="ml-2">Beautiful UI Components</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
              shadcn/ui React
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"> Showcase</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              A comprehensive collection of beautiful, accessible, and customizable components built with Radix UI and Tailwind CSS.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="default">React 18</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="outline">Tailwind CSS</Badge>
              <Badge variant="destructive">Radix UI</Badge>
            </div>
          </section>

          {/* Interactive Demo Section */}
          <section className="mb-12">
            <Card className="max-w-2xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Interactive Demo</CardTitle>
                <CardDescription>
                  Try out the components with real interactions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Counter Demo */}
                <div className="text-center space-y-4">
                  <div className="text-3xl font-bold text-primary">{count}</div>
                  <div className="flex justify-center gap-3">
                    <Button onClick={() => setCount(count + 1)} size="lg">
                      Increment
                    </Button>
                    <Button variant="outline" onClick={() => setCount(count - 1)} size="lg">
                      Decrement
                    </Button>
                    <Button variant="destructive" onClick={() => setCount(0)} size="lg">
                      Reset
                    </Button>
                  </div>
                </div>

                {/* Form Demo */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {name && (
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Hello, <span className="font-semibold text-foreground">{name}</span>! 👋</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </section>

          {/* Button Variants Showcase */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Button Variants</CardTitle>
                <CardDescription>
                  Different button styles for various use cases
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  <Button variant="default">Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Badge Showcase */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Badge Collection</CardTitle>
                <CardDescription>
                  Status indicators and labels for your content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Badge>New Feature</Badge>
                  <Badge variant="secondary">In Progress</Badge>
                  <Badge variant="destructive">Critical</Badge>
                  <Badge variant="outline">Draft</Badge>
                  <Badge>✨ Popular</Badge>
                  <Badge variant="secondary">🔥 Trending</Badge>
                  <Badge variant="destructive">⚠️ Urgent</Badge>
                  <Badge variant="outline">📝 Documentation</Badge>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* User Cards Grid */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>
                  Composite components showcasing Card, Button, and Label integration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <UserCard
                    name="Sarah Chen"
                    email="sarah.chen@company.com"
                    role="Senior Designer"
                    onEdit={() => alert('Edit user: Sarah Chen')}
                    onDelete={() => alert('Delete user: Sarah Chen')}
                  />
                  <UserCard
                    name="Alex Rodriguez"
                    email="alex.rodriguez@company.com"
                    role="Full Stack Developer"
                    onEdit={() => alert('Edit user: Alex Rodriguez')}
                    onDelete={() => alert('Delete user: Alex Rodriguez')}
                  />
                  <UserCard
                    name="Maya Patel"
                    email="maya.patel@company.com"
                    role="Product Manager"
                    onEdit={() => alert('Edit user: Maya Patel')}
                    onDelete={() => alert('Delete user: Maya Patel')}
                  />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Features Grid */}
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <CardTitle>Lightning Fast</CardTitle>
                  <CardDescription>
                    Built with performance in mind using modern React patterns
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-green-500/20">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-2">
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <CardTitle>Accessible</CardTitle>
                  <CardDescription>
                    WCAG compliant components built on Radix UI primitives
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-purple-500/20">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-2">
                    <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                  </div>
                  <CardTitle>Customizable</CardTitle>
                  <CardDescription>
                    Easily themed and styled to match your brand
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center py-8 border-t">
            <p className="text-muted-foreground">
              Built with ❤️ using shadcn/ui, React, and Tailwind CSS
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App