import React from 'react';
import { ScrollProgress } from '../components/tech-insights/ScrollProgress';
import { MouseGlow } from '../components/tech-insights/MouseGlow';
import { ParticleSystem } from '../components/tech-insights/ParticleSystem';

import { HeroSection } from '../components/tech-insights/HeroSection';
import { TechStackOverview } from '../components/tech-insights/TechStackOverview';
import { ArchitectureSection } from '../components/tech-insights/ArchitectureSection';
import { LocationSection } from '../components/tech-insights/LocationSection';
import { SMSEngineSection } from '../components/tech-insights/SMSEngineSection';
import { VoiceSection } from '../components/tech-insights/VoiceSection';
import { PermissionsSection } from '../components/tech-insights/PermissionsSection';
import { OfflineSection } from '../components/tech-insights/OfflineSection';
import { SecuritySection } from '../components/tech-insights/SecuritySection';
import { DataFlowSection } from '../components/tech-insights/DataFlowSection';
import { TechGridSection } from '../components/tech-insights/TechGridSection';
import { DeviceIntegrationSection } from '../components/tech-insights/DeviceIntegrationSection';
import { CTASection } from '../components/tech-insights/CTASection';

export default function TechInsights() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground font-sans">
      <ScrollProgress />
      <MouseGlow />
      <ParticleSystem />
      
      {/* Subtle Background Grid Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

      <main className="relative z-10 flex flex-col">
        <HeroSection />
        <TechStackOverview />
        <ArchitectureSection />
        <LocationSection />
        <SMSEngineSection />
        <VoiceSection />
        <PermissionsSection />
        <OfflineSection />
        <SecuritySection />
        <DataFlowSection />
        <TechGridSection />
        <DeviceIntegrationSection />
        <CTASection />
      </main>
    </div>
  );
}
