import React from 'react';
import * as Icons from 'lucide-react';

interface SkillIconProps {
  name: string;
  size?: number;
  className?: string;
}

export function SkillIcon({ name, size = 24, className = '' }: SkillIconProps) {
  const IconComponent = (Icons as Record<string, unknown>)[name] as React.ElementType;
  
  if (!IconComponent) {
    return <Icons.Code size={size} className={className} />;
  }
  
  return <IconComponent size={size} className={className} />;
}
