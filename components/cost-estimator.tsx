"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"

export function CostEstimator() {
  const [view, setView] = useState<"table" | "chart">("table")

  const costData = [
    {
      phase: "Market Research",
      lowCost: 5000,
      highCost: 12000,
      confidence: 92,
      description: "Initial market analysis, consumer surveys, and competitive research",
    },
    {
      phase: "Business Setup",
      lowCost: 25000,
      highCost: 45000,
      confidence: 85,
      description: "Legal registration, land acquisition, permits and certifications",
    },
    {
      phase: "Equipment & Infrastructure",
      lowCost: 50000,
      highCost: 120000,
      confidence: 78,
      description: "Farming equipment, storage facilities, and basic infrastructure",
    },
    {
      phase: "Initial Operations",
      lowCost: 30000,
      highCost: 60000,
      confidence: 82,
      description: "Seeds, fertilizers, labor, and initial production costs",
    },
    {
      phase: "Marketing & Distribution",
      lowCost: 15000,
      highCost: 35000,
      confidence: 75,
      description: "Branding, packaging, distribution setup, and initial marketing",
    },
    {
      phase: "Scaling Operations",
      lowCost: 80000,
      highCost: 150000,
      confidence: 68,
      description: "Expanded production, additional equipment, and increased workforce",
    },
  ]

  const totalLow = costData.reduce((sum, item) => sum + item.lowCost, 0)
  const totalHigh = costData.reduce((sum, item) => sum + item.highCost, 0)
  const avgConfidence = Math.round(costData.reduce((sum, item) => sum + item.confidence, 0) / costData.length)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Estimated Cost Breakdown</CardTitle>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <FileText className="h-4 w-4" />
            <span className="hidden sm:inline">Export as PDF</span>
            <span className="sm:hidden">PDF</span>
          </Button>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Download</span>
            <span className="sm:hidden">CSV</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[180px]">Phase</TableHead>
                <TableHead>Cost Range</TableHead>
                <TableHead className="text-right">Confidence</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {costData.map((item) => (
                <TableRow key={item.phase}>
                  <TableCell className="font-medium">{item.phase}</TableCell>
                  <TableCell>
                    ${item.lowCost.toLocaleString()} – ${item.highCost.toLocaleString()}
                    <div className="mt-1 text-xs text-muted-foreground">{item.description}</div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div
                        className={`h-2 w-16 rounded-full ${
                          item.confidence > 85
                            ? "bg-green-500"
                            : item.confidence > 75
                              ? "bg-yellow-500"
                              : "bg-orange-500"
                        }`}
                        style={{ opacity: item.confidence / 100 }}
                      />
                      <span>{item.confidence}%</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-muted/50">
                <TableCell className="font-bold">Total Investment</TableCell>
                <TableCell className="font-bold">
                  ${totalLow.toLocaleString()} – ${totalHigh.toLocaleString()}
                </TableCell>
                <TableCell className="text-right font-bold">{avgConfidence}%</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <div className="rounded-lg border p-4">
            <h3 className="font-medium">Investment Summary</h3>
            <div className="mt-2 grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-sm text-muted-foreground">Minimum Viable Investment</p>
                <p className="text-xl font-bold">${(totalLow * 0.6).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Recommended Investment</p>
                <p className="text-xl font-bold">${Math.round((totalLow + totalHigh) / 2).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Estimated Break-even</p>
                <p className="text-xl font-bold">18-24 months</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
