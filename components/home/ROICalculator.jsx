"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

export default function ROICalculator() {
  const [hours, setHours] = useState(10);
  const [wage, setWage] = useState(25);
  const [employees, setEmployees] = useState(3);

  const weeklySavings = hours * wage * employees;
  const yearlySavings = weeklySavings * 52;
  const automationCost = 2500; // Estimated one-time cost
  const roi = Math.round(((yearlySavings - automationCost) / automationCost) * 100);

  return (
    <section id="roi-calculator" className="py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent-500/20 bg-accent-500/10 px-3 py-1 text-xs tracking-widest text-accent-400 uppercase">
            ROI Calculator
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Calculate Your Automation ROI
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            See how much time and money automation could save your team every week.
          </p>
        </FadeUp>

        <FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <Card className="rounded-lg p-8 ring-0 border border-border space-y-8">
              <div>
                <Label className="flex items-center justify-between text-white font-medium mb-4">
                  <span>Hours spent on manual tasks per employee/week</span>
                  <span className="text-brand-400 text-xl font-bold">{hours}h</span>
                </Label>
                <Slider min={1} max={40} value={hours} onValueChange={setHours} />
                <div className="flex justify-between text-xs text-gray-600 mt-1">
                  <span>1h</span><span>40h</span>
                </div>
              </div>

              <div>
                <Label className="flex items-center justify-between text-white font-medium mb-4">
                  <span>Average hourly cost per employee</span>
                  <span className="text-brand-400 text-xl font-bold">${wage}</span>
                </Label>
                <Slider min={10} max={150} value={wage} onValueChange={setWage} />
                <div className="flex justify-between text-xs text-gray-600 mt-1">
                  <span>$10</span><span>$150</span>
                </div>
              </div>

              <div>
                <Label className="flex items-center justify-between text-white font-medium mb-4">
                  <span>Number of employees affected</span>
                  <span className="text-brand-400 text-xl font-bold">{employees}</span>
                </Label>
                <Slider min={1} max={50} value={employees} onValueChange={setEmployees} />
                <div className="flex justify-between text-xs text-gray-600 mt-1">
                  <span>1</span><span>50</span>
                </div>
              </div>
            </Card>

            {/* Results */}
            <div className="space-y-5">
              {[
                { label: "Weekly Time Saved", value: `${hours * employees}h`, sublabel: "hours reclaimed each week" },
                { label: "Weekly Cost Saved", value: `$${weeklySavings.toLocaleString()}`, sublabel: "per week in labor costs" },
                { label: "Annual Savings", value: `$${yearlySavings.toLocaleString()}`, sublabel: "saved every year" },
                { label: "Estimated ROI", value: `${roi}%`, sublabel: "return on investment", highlight: true },
              ].map((r) => (
                <motion.div key={r.label} layout>
                  <Card
                    className="p-5 rounded-xl ring-0 border border-border"
                    style={r.highlight ? { borderColor: "var(--border-brand)" } : undefined}
                  >
                    <div className="text-3xl font-bold text-white mb-0.5">{r.value}</div>
                    <div className="text-xs text-gray-400">{r.sublabel}</div>
                    <div className="text-sm font-semibold text-gray-300 mt-1">{r.label}</div>
                  </Card>
                </motion.div>
              ))}

              <Button size="lg" className="w-full h-auto px-6 py-4" render={<a href="/contact" />}>
                Start Saving — Book a Free Call
              </Button>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
