import type { ReactNode } from 'react';
import SmoothScroll from './SmoothScroll';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-black text-white selection:bg-yellow-500/30 selection:text-yellow-200">
        <div className="noise-overlay fixed inset-0 z-[9999] pointer-events-none opacity-[0.03]" />
        
        {/* Luxury Cursor Follower could go here */}
        
        <main className="relative z-10">
          {children}
        </main>
      </div>
    </SmoothScroll>
  );
}
