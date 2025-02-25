"use client";

import React, { useState } from "react";
import { Project } from "../types/project";
import Image from "next/image";

interface FlipCardProps {
  project: Project;
}

const FlipCard: React.FC<FlipCardProps> = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-64 h-64 perspective cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 bg-white rounded-lg shadow-lg flex items-center justify-center backface-hidden">
          <Image
            src={project.logo}
            alt={project.clientName}
            className="max-h-24"
          />
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 bg-blue-500 text-white rounded-lg shadow-lg flex items-center justify-center rotate-y-180 backface-hidden">
          <p className="p-4 text-center">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
