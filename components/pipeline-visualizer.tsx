"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Database, FileText, LineChart, Lightbulb, PieChart, Search, Workflow } from "lucide-react"

export function PipelineVisualizer() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 7)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const steps = [
    {
      icon: <Search className="h-5 w-5" />,
      title: "Web Scraper",
      description: "Collects data from government sites, market reports, and news",
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "LLM Summarizer",
      description: "Processes and summarizes collected data",
    },
    {
      icon: <LineChart className="h-5 w-5" />,
      title: "Trend Analyzer",
      description: "Identifies patterns and trends in market data",
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Opportunity Mapper",
      description: "Detects potential business opportunities",
    },
    {
      icon: <Workflow className="h-5 w-5" />,
      title: "Strategy Generator",
      description: "Creates implementation strategies",
    },
    {
      icon: <PieChart className="h-5 w-5" />,
      title: "Cost Estimator",
      description: "Calculates required investment and ROI",
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: "Report Formatter",
      description: "Compiles findings into structured reports",
    },
  ]

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-full transition-colors ${
                index === activeStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              {step.icon}
            </div>
            <span className="mt-2 text-center text-xs font-medium">{step.title}</span>

            {index < steps.length - 1 && <div className="my-2 hidden h-0.5 w-8 bg-muted md:block"></div>}
          </div>
        ))}
      </div>

      <div className="hidden md:block">
        <div className="grid grid-cols-7 gap-4">
          {steps.map((step, index) => (
            <Card key={index} className={`transition-colors ${index === activeStep ? "border-primary" : ""}`}>
              <CardContent className="p-4 text-center">
                <p className="text-xs">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="md:hidden">
        <Card className="border-primary">
          <CardContent className="p-4 text-center">
            <p className="text-xs">{steps[activeStep].description}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
