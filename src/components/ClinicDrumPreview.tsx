import React, { useState } from 'react';
import { Maximize2, Layers, Box } from 'lucide-react';

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
      className="group relative cursor-pointer select-none rounded-2xl bg-docker-charcoal border border-docker-border p-4 md:p-6 overflow-hidden shadow-container hover:border-docker-blue/60 hover:shadow-docker-glow transition-all duration-300"
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
      <div className="flex items-center justify-between pb-3.5 border-b border-docker-border">
        <div className="flex items-center gap-2">
          <Box className="w-3.5 h-3.5 text-docker-blue" />
          <span className="font-mono text-xs text-docker-white">
            CONTAINER_PREVIEW // clinic-ui:prod
          </span>
        </div>

        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-docker-bright bg-docker-blue/15 border border-docker-blue/30 px-2.5 py-1 rounded group-hover:bg-docker-blue/25 transition-colors">
          <Maximize2 className="w-3.5 h-3.5" />
          <span>Inspect 10 Views</span>
        </span>
      </div>

      {/* Perspective Stack Visualization */}
      <div className="relative my-6 h-56 sm:h-64 w-full flex items-center justify-center perspective-[1000px]">
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
              className="absolute w-[86%] sm:w-[82%] h-44 sm:h-52 rounded-xl overflow-hidden border border-docker-border bg-black shadow-2xl transition-all duration-300 group-hover:border-docker-blue/50"
            >
              <img
                src={src}
                alt={`Clinic screenshot preview ${index + 1}`}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-docker-charcoal/80 via-transparent to-transparent" />
            </div>
          );
        })}

        {/* Floating badge */}
        <div className="absolute bottom-1 bg-docker-surface/90 border border-docker-border px-4 py-1.5 rounded-full backdrop-blur-md shadow-lg flex items-center gap-2 z-20 text-xs font-mono text-docker-white group-hover:border-docker-blue transition-colors">
          <Layers className="w-3.5 h-3.5 text-docker-blue" />
          <span>Click to cycle or expand modal</span>
        </div>
      </div>

      {/* Bottom status */}
      <div className="pt-3 border-t border-docker-border flex items-center justify-between text-xs font-mono text-docker-muted">
        <span className="flex items-center gap-1.5 text-status-running">
          <span className="w-1.5 h-1.5 rounded-full bg-status-running" />
          Production MVC Views Captured
        </span>
        <span className="text-docker-bright">10 High-Res Screenshots</span>
      </div>
    </div>
  );
};
