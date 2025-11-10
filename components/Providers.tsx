'use client';

import { MotionConfig } from 'framer-motion';
import { useIsMobile } from '@/hooks/useIsMobile';
import type { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const isMobile = useIsMobile();

  return (
    <MotionConfig reducedMotion={isMobile ? 'always' : 'never'}>
      {children}
    </MotionConfig>
  );
}


