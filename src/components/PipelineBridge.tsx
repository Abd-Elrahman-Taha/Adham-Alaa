import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PipelineBridgeProps {
  currentStage: string;
  nextStage: string;
  description?: string;
}

export const PipelineBridge: React.FC<PipelineBridgeProps> = ({
  currentStage,
  nextStage,
  description,
}) => {
  return (
    <div className="py-8 flex items-center justify-center">
      <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-docker-charcoal/90 border border-docker-border text-xs font-mono text-docker-muted shadow-sm">
        <span className="text-docker-white font-medium">{currentStage}</span>
        <ArrowRight className="w-3.5 h-3.5 text-docker-blue" />
        <span className="text-docker-bright font-semibold">{nextStage}</span>
        {description && (
          <span className="hidden sm:inline text-docker-muted/60 border-l border-docker-border pl-2.5">
            {description}
          </span>
        )}
      </div>
    </div>
  );
};
