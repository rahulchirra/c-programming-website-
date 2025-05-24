
import React from 'react';

export interface CodeExample {
  title?: string;
  code: string;
  explanation?: string;
  output?: string;
}

export interface Topic {
  id: string;
  name: string;
  explanation: string;
  codeExamples: CodeExample[];
  furtherReading?: { title: string; url: string }[];
}

export enum ModuleLevel {
  BEGINNER = "Beginner",
  INTERMEDIATE = "Intermediate",
  ADVANCED = "Advanced",
  EXPERT = "Expert"
}

// Removed IconProps interface as it's no longer used after removing icons from LearningModule
// export interface IconProps {
//   className?: string;
// }

export interface LearningModule {
  id: string;
  title: string;
  level: ModuleLevel;
  tagline?: string;
  // icon?: React.FC<IconProps>; // Removed icon field
  description: string;
  topics: Topic[];
  expertInsight?: string;
}
