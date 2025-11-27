"use client";

import { useState } from 'react';
import { usePersona } from '@/contexts/PersonaContext';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Download, TrendingUp } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  LabelList
} from 'recharts';
import type { PersonaId } from '@/types/report';

const colorMap: Record<PersonaId, string> = {
  'primary-care': '#2563EB',
  'neurology': '#7C3AED',
  'mental-health': '#059669',
  'corporate-wellness': '#DC2626',
};

export function DetectionGapSection() {
  const { currentPersona, content } = usePersona();
  const { detectionGap } = content;
  const [activeTab, setActiveTab] = useState(detectionGap.tabs[0]?.id || 'dementia');
  const activeTabData = detectionGap.tabs.find(t => t.id === activeTab) || detectionGap.tabs[0];
  const primaryColor = colorMap[currentPersona];

  return (
    <section 
      id="detection-gap"
      className="py-20 px-4 bg-white dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Narrative */}
          <div 
            key={currentPersona + '-narrative'}
            className="space-y-6 animate-fade-in-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium text-gray-600 dark:text-gray-400">
              <TrendingUp className="w-4 h-4" />
              The Detection Gap
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              What the data reveals about cognitive assessment today
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {detectionGap.narrative}
            </p>

            <Button 
              variant="outline" 
              className="gap-2"
              style={{ borderColor: primaryColor, color: primaryColor }}
              asChild
            >
              <a href={detectionGap.ctaAsset} download>
                <Download className="w-4 h-4" />
                {detectionGap.ctaText}
              </a>
            </Button>
          </div>

          {/* Tabbed Charts */}
          <div className="animate-fade-in-right">
            <Tabs 
              value={activeTab} 
              onValueChange={setActiveTab}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
            >
              <TabsList className="grid grid-cols-3 mb-6 bg-gray-200 dark:bg-gray-800">
                {detectionGap.tabs.map((tab) => (
                  <TabsTrigger 
                    key={tab.id} 
                    value={tab.id}
                    className="text-xs sm:text-sm data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {detectionGap.tabs.map((tab) => (
                <TabsContent key={tab.id} value={tab.id} className="mt-0">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {tab.description}
                  </p>
                  
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={tab.chartData}
                        layout="vertical"
                        margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                      >
                        <XAxis type="number" domain={[0, 100]} hide />
                        <YAxis 
                          type="category" 
                          dataKey="label" 
                          width={120}
                          tick={{ fontSize: 12, fill: '#6B7280' }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <Tooltip
                          content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                              return (
                                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-3 border border-gray-200 dark:border-gray-700">
                                  <p className="font-medium">{payload[0].payload.label}</p>
                                  <p className="text-lg font-bold" style={{ color: payload[0].payload.color }}>
                                    {payload[0].value}%
                                  </p>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        <Bar 
                          dataKey="value" 
                          radius={[0, 6, 6, 0]}
                          animationDuration={800}
                        >
                          {tab.chartData.map((entry, index) => (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={entry.color || primaryColor} 
                            />
                          ))}
                          <LabelList 
                            dataKey="value" 
                            position="right" 
                            formatter={(value: number) => `${value}%`}
                            style={{ fontSize: 12, fontWeight: 600 }}
                          />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  <div 
                    className="mt-4 p-4 rounded-xl border-l-4"
                    style={{ 
                      borderColor: primaryColor,
                      backgroundColor: `${primaryColor}10`
                    }}
                  >
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {tab.insight}
                    </p>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
