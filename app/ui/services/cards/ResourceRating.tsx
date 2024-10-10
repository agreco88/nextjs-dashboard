"use client";

import React from "react";
import { Star } from "lucide-react"; // Importing the Star icon
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"; // Assuming you have this component
import { motion } from "framer-motion";

interface ResourceRatingProps {
  rating: number; // The rating number
}

const ResourceRating: React.FC<ResourceRatingProps> = ({ rating }) => {
  // Gradient colors array from violet to magenta
  const gradientColors = [
    "text-violet-500", // First star: Violet
    "text-purple-500", // Second star: Slightly more magenta
    "text-fuchsia-500", // Third star: More magenta
    "text-pink-500", // Fourth star: Even more magenta
    "text-rose-500", // Fifth star: Magenta
  ];

  // Create an array of booleans with the rating length and fill it with stars
  const stars = Array.from({ length: 5 }, (_, index) => index < rating);

  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-sm font-medium">Rating</h4>

      <HoverCard openDelay={0}>
        <HoverCardTrigger asChild>
          <div className="flex gap-1 cursor-pointer w-36">
            {stars.map((isFilled, index) => (
              <Star
                key={index}
                className={`w-5 h-5 ${
                  isFilled ? gradientColors[index] : "text-gray-700"
                }`}
                fill={isFilled ? "currentColor" : "none"}
              />
            ))}
          </div>
        </HoverCardTrigger>

        {/* Pop up hovercard */}
        <HoverCardContent className="p-4 shadow-lg rounded-md absolute w-72 bottom-full left-0 mb-6">
          <div className="flex flex-col items-start gap-3">
            <p className="text-sm font-medium text-center">
              See all upgrades at ipxon.com
            </p>
            <button className="text-white font-medium w-full px-3 py-2 rounded-md overflow-hidden relative transition-transform hover:scale-105 active:scale-95">
              <span className="relative z-10 font-bold uppercase">
                Upgrade NOW
              </span>
              <motion.div
                initial={{ left: 0 }}
                animate={{ left: "-300%" }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 4,
                  ease: "linear",
                }}
                className="bg-[linear-gradient(to_right,#8f14e6,#e614dc,#e61453,#e68414,#e6e614)] absolute z-0 inset-0 w-[400%]"
              />
            </button>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default ResourceRating;
