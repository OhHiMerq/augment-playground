import { useState } from "react";
import { Button } from "@base-ui/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@base-ui/components/ui/card";
import { Badge } from "@base-ui/components/ui/badge";
import { Input } from "@base-ui/components/ui/input";
import { Label } from "@base-ui/components/ui/label";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@base-ui/components/ui/alert";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@base-ui/components/ui/avatar";
import { Checkbox } from "@base-ui/components/ui/checkbox";
import { Progress } from "@base-ui/components/ui/progress";
import { Switch } from "@base-ui/components/ui/switch";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@base-ui/components/ui/tabs";
import { Textarea } from "@base-ui/components/ui/textarea";
import { Separator } from "@base-ui/components/ui/separator";
import { Slider } from "@base-ui/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@base-ui/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@base-ui/components/ui/radio-group";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@base-ui/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@base-ui/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@base-ui/components/ui/accordion";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@base-ui/components/ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { UserCard } from "@/src/user-card";
import { ThemeSelector } from "@/src/theme-selector";

function App() {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [progress, setProgress] = useState(33);
  const [sliderValue, setSliderValue] = useState([50]);
  const [isChecked, setIsChecked] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [radioValue, setRadioValue] = useState("option1");

  // Chart data
  const chartData = [
    { month: "Jan", desktop: 186, mobile: 80 },
    { month: "Feb", desktop: 305, mobile: 200 },
    { month: "Mar", desktop: 237, mobile: 120 },
    { month: "Apr", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "Jun", desktop: 214, mobile: 140 },
  ];

  const pieData = [
    { name: "Desktop", value: 400, fill: "hsl(var(--primary))" },
    { name: "Mobile", value: 300, fill: "hsl(var(--secondary))" },
    { name: "Tablet", value: 200, fill: "hsl(var(--muted))" },
    { name: "Other", value: 100, fill: "hsl(var(--accent))" },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--primary))",
    },
    mobile: {
      label: "Mobile",
      color: "hsl(var(--secondary))",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header with Theme Toggle */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/60"></div>
            <h1 className="text-xl font-bold">shadcn/ui Showcase</h1>
          </div>
          <Badge variant="outline">Multi-Theme</Badge>
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
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {" "}
                Showcase
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              A comprehensive collection of beautiful, accessible, and
              customizable components built with Radix UI and Tailwind CSS.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="default">React 18</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="outline">Tailwind CSS</Badge>
              <Badge variant="destructive">Radix UI</Badge>
            </div>
          </section>

          {/* Theme Selector Section */}
          <section className="mb-12">
            <ThemeSelector />
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
                    <Button
                      variant="outline"
                      onClick={() => setCount(count - 1)}
                      size="lg"
                    >
                      Decrement
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => setCount(0)}
                      size="lg"
                    >
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
                    <p className="text-sm text-muted-foreground">
                      Hello,{" "}
                      <span className="font-semibold text-foreground">
                        {name}
                      </span>
                      ! 👋
                    </p>
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
                  Composite components showcasing Card, Button, and Label
                  integration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <UserCard
                    name="Sarah Chen"
                    email="sarah.chen@company.com"
                    role="Senior Designer"
                    onEdit={() => alert("Edit user: Sarah Chen")}
                    onDelete={() => alert("Delete user: Sarah Chen")}
                  />
                  <UserCard
                    name="Alex Rodriguez"
                    email="alex.rodriguez@company.com"
                    role="Full Stack Developer"
                    onEdit={() => alert("Edit user: Alex Rodriguez")}
                    onDelete={() => alert("Delete user: Alex Rodriguez")}
                  />
                  <UserCard
                    name="Maya Patel"
                    email="maya.patel@company.com"
                    role="Product Manager"
                    onEdit={() => alert("Edit user: Maya Patel")}
                    onDelete={() => alert("Delete user: Maya Patel")}
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
                    <svg
                      className="h-6 w-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
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
                    <svg
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
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
                    <svg
                      className="h-6 w-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                      />
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

          {/* Alerts Section */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Alert Components</CardTitle>
                <CardDescription>
                  Different alert styles for various notification types
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <AlertTitle>Information</AlertTitle>
                  <AlertDescription>
                    This is a general information alert with helpful details.
                  </AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Something went wrong. Please check your input and try again.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </section>

          {/* Avatar Section */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Avatar Gallery</CardTitle>
                <CardDescription>
                  User profile pictures with fallback initials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-16 w-16">
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>AR</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-10 w-10">
                    <AvatarFallback>MP</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Form Controls Section */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Form Controls</CardTitle>
                <CardDescription>
                  Interactive form elements with state management
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={isChecked}
                        onCheckedChange={(checked) =>
                          setIsChecked(checked === true)
                        }
                      />
                      <Label htmlFor="terms">Accept terms and conditions</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch
                        id="notifications"
                        checked={isSwitchOn}
                        onCheckedChange={setIsSwitchOn}
                      />
                      <Label htmlFor="notifications">
                        Enable notifications
                      </Label>
                    </div>

                    <div className="space-y-2">
                      <Label>Select Framework</Label>
                      <Select
                        value={selectedValue}
                        onValueChange={setSelectedValue}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a framework" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="react">React</SelectItem>
                          <SelectItem value="vue">Vue</SelectItem>
                          <SelectItem value="angular">Angular</SelectItem>
                          <SelectItem value="svelte">Svelte</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Progress: {progress}%</Label>
                      <Progress value={progress} className="w-full" />
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() =>
                            setProgress(Math.max(0, progress - 10))
                          }
                        >
                          -10%
                        </Button>
                        <Button
                          size="sm"
                          onClick={() =>
                            setProgress(Math.min(100, progress + 10))
                          }
                        >
                          +10%
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Slider Value: {sliderValue[0]}</Label>
                      <Slider
                        value={sliderValue}
                        onValueChange={setSliderValue}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Radio Group</Label>
                      <RadioGroup
                        value={radioValue}
                        onValueChange={setRadioValue}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="option1" id="option1" />
                          <Label htmlFor="option1">Option 1</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="option2" id="option2" />
                          <Label htmlFor="option2">Option 2</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="option3" id="option3" />
                          <Label htmlFor="option3">Option 3</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Type your message here..."
                    className="min-h-[100px]"
                  />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Tabs Section */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Tabbed Interface</CardTitle>
                <CardDescription>
                  Organize content with navigable tabs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="analytics">Analytics</TabsTrigger>
                    <TabsTrigger value="reports">Reports</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">
                            Total Users
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">2,847</div>
                          <p className="text-xs text-muted-foreground">
                            +12% from last month
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">
                            Revenue
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">$45,231</div>
                          <p className="text-xs text-muted-foreground">
                            +8% from last month
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">
                            Active Sessions
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">1,234</div>
                          <p className="text-xs text-muted-foreground">
                            +3% from last hour
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent value="analytics" className="space-y-4">
                    <div className="text-center py-8">
                      <h3 className="text-lg font-semibold mb-2">
                        Analytics Dashboard
                      </h3>
                      <p className="text-muted-foreground">
                        Detailed analytics and insights would go here.
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="reports" className="space-y-4">
                    <div className="text-center py-8">
                      <h3 className="text-lg font-semibold mb-2">
                        Reports Center
                      </h3>
                      <p className="text-muted-foreground">
                        Generate and download reports from this section.
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="settings" className="space-y-4">
                    <div className="text-center py-8">
                      <h3 className="text-lg font-semibold mb-2">
                        Application Settings
                      </h3>
                      <p className="text-muted-foreground">
                        Configure your application preferences here.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </section>

          {/* Table Section */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Data Table</CardTitle>
                <CardDescription>
                  Structured data presentation with sorting and actions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead className="text-right">Salary</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">John Doe</TableCell>
                      <TableCell>
                        <Badge variant="default">Active</Badge>
                      </TableCell>
                      <TableCell>Software Engineer</TableCell>
                      <TableCell className="text-right">$75,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Jane Smith</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Pending</Badge>
                      </TableCell>
                      <TableCell>Product Manager</TableCell>
                      <TableCell className="text-right">$85,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Mike Johnson
                      </TableCell>
                      <TableCell>
                        <Badge variant="destructive">Inactive</Badge>
                      </TableCell>
                      <TableCell>Designer</TableCell>
                      <TableCell className="text-right">$65,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Sarah Wilson
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">On Leave</Badge>
                      </TableCell>
                      <TableCell>DevOps Engineer</TableCell>
                      <TableCell className="text-right">$80,000</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </section>

          {/* Dialog and Accordion Section */}
          <section className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dialog Component</CardTitle>
                  <CardDescription>
                    Modal dialogs for user interactions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Open Dialog</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                          This action cannot be undone. This will permanently
                          delete your account and remove your data from our
                          servers.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex justify-end space-x-2 mt-4">
                        <Button variant="outline">Cancel</Button>
                        <Button variant="destructive">Delete Account</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Accordion FAQ</CardTitle>
                  <CardDescription>
                    Collapsible content sections
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What is shadcn/ui?</AccordionTrigger>
                      <AccordionContent>
                        shadcn/ui is a collection of reusable components built
                        using Radix UI and Tailwind CSS.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>How do I install it?</AccordionTrigger>
                      <AccordionContent>
                        You can install shadcn/ui components individually using
                        the CLI or copy the source code directly.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Is it accessible?</AccordionTrigger>
                      <AccordionContent>
                        Yes, all components are built with accessibility in mind
                        using Radix UI primitives.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Charts Section */}
          <section className="mb-12">
            <Card className="h-[500px]">
              <CardHeader>
                <CardTitle>Data Visualization</CardTitle>
                <CardDescription>
                  Interactive charts powered by Recharts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Bar Chart */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Bar Chart</h3>
                    <div className="h-[200px] w-full">
                      <ChartContainer config={chartConfig}>
                        <BarChart data={chartData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar dataKey="desktop" fill="var(--color-desktop)" />
                          <Bar dataKey="mobile" fill="var(--color-mobile)" />
                        </BarChart>
                      </ChartContainer>
                    </div>
                  </div>

                  {/* Line Chart */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Line Chart</h3>
                    <div className="h-[200px] w-full">
                      <ChartContainer config={chartConfig}>
                        <LineChart data={chartData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Line
                            type="monotone"
                            dataKey="desktop"
                            stroke="var(--color-desktop)"
                            strokeWidth={2}
                          />
                          <Line
                            type="monotone"
                            dataKey="mobile"
                            stroke="var(--color-mobile)"
                            strokeWidth={2}
                          />
                        </LineChart>
                      </ChartContainer>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
  );
}

export default App;
