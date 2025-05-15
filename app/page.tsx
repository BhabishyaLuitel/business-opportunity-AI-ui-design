import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Download, FileText, Lightbulb, LineChart, PieChart, TrendingUp } from "lucide-react"
import { PipelineVisualizer } from "@/components/pipeline-visualizer"
import { CostEstimator } from "@/components/cost-estimator"

export default function Dashboard() {
  return (
    <div className="flex-1 space-y-6 p-6 md:p-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Discover high-profit business opportunities using real-time data analysis
        </p>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Business Opportunity Research</CardTitle>
          <CardDescription>Enter your research query to analyze market opportunities</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="query"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Describe what you&apos;re researching
            </label>
            <Input id="query" placeholder="e.g., 'agriculture in Province 1'" className="h-12" />
          </div>
          <Button size="lg" className="w-full sm:w-auto">
            Start Analysis
          </Button>
        </CardContent>
      </Card>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Analysis Progress</h2>
        <div className="space-y-6">
          <Progress value={66} className="h-2" />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {[
              { icon: <LineChart className="h-5 w-5" />, label: "Data Collection", status: "complete" },
              { icon: <PieChart className="h-5 w-5" />, label: "Policy & Market Analysis", status: "complete" },
              { icon: <Lightbulb className="h-5 w-5" />, label: "Opportunity Detection", status: "active" },
              { icon: <TrendingUp className="h-5 w-5" />, label: "Strategy Planning", status: "pending" },
              { icon: <FileText className="h-5 w-5" />, label: "Cost Estimation", status: "pending" },
              { icon: <Download className="h-5 w-5" />, label: "Final Recommendation", status: "pending" },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${
                    step.status === "complete"
                      ? "bg-primary/20 text-primary"
                      : step.status === "active"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step.icon}
                </div>
                <span className="mt-2 text-xs font-medium">{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Analysis Results</h2>
        <Tabs defaultValue="summary" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="summary">Opportunity Summary</TabsTrigger>
            <TabsTrigger value="policy">Policy Insights</TabsTrigger>
            <TabsTrigger value="market">Market Data</TabsTrigger>
            <TabsTrigger value="strategy">Execution Strategy</TabsTrigger>
            <TabsTrigger value="cost">Cost Breakdown</TabsTrigger>
          </TabsList>
          <TabsContent value="summary" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Business Opportunity Summary</CardTitle>
                <CardDescription>High-level overview of detected opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg bg-muted p-4">
                    <h3 className="text-lg font-medium">Organic Farming in Province 1</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 hover:bg-green-100 hover:text-green-800"
                      >
                        High Profit Potential
                      </Badge>
                      <Badge
                        variant="outline"
                        className="bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-800"
                      >
                        Government Subsidized
                      </Badge>
                      <Badge
                        variant="outline"
                        className="bg-purple-50 text-purple-700 hover:bg-purple-100 hover:text-purple-800"
                      >
                        Export Opportunity
                      </Badge>
                    </div>
                    <p className="mt-3 text-sm">
                      Recent policy changes in Province 1 have created favorable conditions for organic farming
                      ventures. With a 32% increase in demand for organic products and new government subsidies, this
                      represents a high-growth opportunity with moderate initial investment.
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium">Market Size</h4>
                      <p className="text-2xl font-bold">$42.5M</p>
                      <p className="text-sm text-muted-foreground">Growing at 12% annually</p>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium">Estimated ROI</h4>
                      <p className="text-2xl font-bold">127%</p>
                      <p className="text-sm text-muted-foreground">Over 3 years</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="policy" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Government Policy Insights</CardTitle>
                <CardDescription>Recent policy changes affecting this opportunity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Agricultural Subsidy Program 2025</h3>
                      <Badge>New Policy</Badge>
                    </div>
                    <p className="mt-2 text-sm">
                      The government has introduced a new subsidy program for organic farmers, offering up to 40% rebate
                      on equipment and certification costs.
                    </p>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Export Promotion Act</h3>
                      <Badge variant="outline">Amended</Badge>
                    </div>
                    <p className="mt-2 text-sm">
                      Recent amendments have reduced export taxes on organic produce by 15%, making international
                      markets more accessible.
                    </p>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Land Use Regulation</h3>
                      <Badge variant="outline">Existing</Badge>
                    </div>
                    <p className="mt-2 text-sm">
                      Current regulations allow conversion of certain non-agricultural lands to organic farming with
                      simplified approval process.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="market" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Market & Trade Data</CardTitle>
                <CardDescription>Key market indicators and trade statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Market Indicator</TableHead>
                        <TableHead>Value</TableHead>
                        <TableHead>Trend</TableHead>
                        <TableHead>Confidence</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Consumer Demand</TableCell>
                        <TableCell>High</TableCell>
                        <TableCell className="text-green-600">↑ 32%</TableCell>
                        <TableCell>92%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Competition Level</TableCell>
                        <TableCell>Medium</TableCell>
                        <TableCell className="text-yellow-600">→ Stable</TableCell>
                        <TableCell>87%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Supply Chain Maturity</TableCell>
                        <TableCell>Medium</TableCell>
                        <TableCell className="text-green-600">↑ Improving</TableCell>
                        <TableCell>79%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Export Potential</TableCell>
                        <TableCell>High</TableCell>
                        <TableCell className="text-green-600">↑ 18%</TableCell>
                        <TableCell>85%</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>

                  <div className="rounded-lg bg-muted p-4">
                    <h3 className="font-medium">Key Trade Partners</h3>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      <div className="rounded-md bg-background p-3">
                        <h4 className="text-sm font-medium">Country A</h4>
                        <p className="text-xs text-muted-foreground">Import Volume: $12.3M</p>
                        <p className="text-xs text-green-600">Growth: 22%</p>
                      </div>
                      <div className="rounded-md bg-background p-3">
                        <h4 className="text-sm font-medium">Country B</h4>
                        <p className="text-xs text-muted-foreground">Import Volume: $8.7M</p>
                        <p className="text-xs text-green-600">Growth: 15%</p>
                      </div>
                      <div className="rounded-md bg-background p-3">
                        <h4 className="text-sm font-medium">Country C</h4>
                        <p className="text-xs text-muted-foreground">Import Volume: $6.2M</p>
                        <p className="text-xs text-green-600">Growth: 9%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="strategy" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Execution Strategy</CardTitle>
                <CardDescription>Step-by-step implementation plan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        1
                      </div>
                      <div>
                        <h3 className="font-medium">Market Research & Validation</h3>
                        <p className="text-sm text-muted-foreground">
                          Conduct detailed market research focusing on consumer preferences, price points, and
                          distribution channels for organic products.
                        </p>
                        <div className="mt-2 text-sm">
                          <span className="font-medium">Estimated Duration:</span> 4-6 weeks
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        2
                      </div>
                      <div>
                        <h3 className="font-medium">Land Acquisition & Certification</h3>
                        <p className="text-sm text-muted-foreground">
                          Secure suitable land in Province 1 and begin organic certification process. Apply for
                          government subsidies under the new program.
                        </p>
                        <div className="mt-2 text-sm">
                          <span className="font-medium">Estimated Duration:</span> 3-4 months
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        3
                      </div>
                      <div>
                        <h3 className="font-medium">Supply Chain Development</h3>
                        <p className="text-sm text-muted-foreground">
                          Establish relationships with distributors, retailers, and potential export partners. Set up
                          logistics and storage facilities.
                        </p>
                        <div className="mt-2 text-sm">
                          <span className="font-medium">Estimated Duration:</span> 2-3 months
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        4
                      </div>
                      <div>
                        <h3 className="font-medium">Production Launch</h3>
                        <p className="text-sm text-muted-foreground">
                          Begin organic farming operations with focus on high-demand crops. Implement sustainable
                          farming practices and quality control.
                        </p>
                        <div className="mt-2 text-sm">
                          <span className="font-medium">Estimated Duration:</span> 6-12 months
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        5
                      </div>
                      <div>
                        <h3 className="font-medium">Market Expansion & Scaling</h3>
                        <p className="text-sm text-muted-foreground">
                          Expand to international markets leveraging export incentives. Increase production capacity and
                          product range.
                        </p>
                        <div className="mt-2 text-sm">
                          <span className="font-medium">Estimated Duration:</span> 12-24 months
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cost" className="pt-4">
            <CostEstimator />
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">MCP Pipeline Architecture</h2>
        <Card>
          <CardContent className="pt-6">
            <PipelineVisualizer />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
