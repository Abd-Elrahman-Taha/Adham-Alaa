import React, { useState } from 'react';
import { Maximize2, Layers } from 'lucide-react';

interface ClinicDrumPreviewProps {
  images: string[];
  onOpenModal: (index: number) => void;
}

export const ClinicDrumPreview: React.FC<ClinicDrumPreviewProps> = ({ images, onOpenModal }) => {
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const previewImages = images.slice(0, 4);

  return (
    <div
      onClick={() => onOpenModal(activeLayer)}
      className="group relative cursor-pointer select-none rounded-2xl bg-carbon-900 border border-carbon-700/80 p-5 md:p-6 overflow-hidden shadow-panel hover:border-azure-500/50 hover:shadow-glow-azure transition-all duration-300"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenModal(activeLayer);
        }
      }}
      aria-label="Inspect Clinic Management Screenshots Gallery"
    >
      {/* Top Bar inside card */}
      <div className="flex items-center justify-between pb-4 border-b border-carbon-800">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="font-mono text-xs text-slate-400 ml-2">
            clinic-dashboard-v1.4.app
          </span>
        </div>

        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-azure-400 bg-azure-950/60 border border-azure-500/30 px-2.5 py-1 rounded group-hover:bg-azure-900/60 transition-colors">
          <Maximize2 className="w-3.5 h-3.5" />
          <span>Inspect 10 Views</span>
        </span>
      </div>

      {/* Perspective Stack Visualization */}
      <div className="relative my-6 h-60 sm:h-72 w-full flex items-center justify-center perspective-[1000px]">
        {previewImages.map((src, index) => {
          const depthOffset = (index - activeLayer + previewImages.length) % previewImages.length;
          const zIndex = 10 - depthOffset;
          const translateX = depthOffset * 22;
          const translateY = depthOffset * -12;
          const scale = 1 - depthOffset * 0.08;
          const opacity = depthOffset === 0 ? 1 : 0.85 - depthOffset * 0.22;

          return (
            <div
              key={src}
              onClick={(e) => {
                e.stopPropagation();
                if (depthOffset === 0) {
                  onOpenModal(index);
                } else {
                  setActiveLayer(index);
                }
              }}
              style={{
                transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
                zIndex,
                opacity,
              }}
              className="absolute w-[86%] sm:w-[82%] h-48 sm:h-56 rounded-xl overflow-hidden border border-carbon-700 bg-black shadow-2xl transition-all duration-300 group-hover:border-azure-400/50"
            >
              <img
                src={src}
                alt={`Clinic screenshot preview ${index + 1}`}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-950/80 via-transparent to-transparent" />
            </div>
          );
        })}

        {/* Floating badge */}
        <div className="absolute bottom-1 bg-carbon-950/90 border border-carbon-700 px-4 py-2 rounded-full backdrop-blur-md shadow-lg flex items-center gap-2.5 z-20 text-xs font-mono text-slate-300 group-hover:border-azure-400 transition-colors">
          <Layers className="w-3.5 h-3.5 text-azure-400" />
          <span>Click to cycle or expand full-screen modal</span>
        </div>
      </div>

      {/* Bottom status */}
      <div className="pt-3 border-t border-carbon-800 flex items-center justify-between text-xs font-mono text-slate-400">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          Production MVC Views Captured
        </span>
        <span className="text-slate-500">10 High-Res Screenshots</span>
      </div>
    </div>
  );
};
