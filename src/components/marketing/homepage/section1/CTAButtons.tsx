"use client";

import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

export function CTAButtons() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <Button size="lg" className="bg-[#028C6A] text-white hover:bg-[#028C6A]/90 h-12 px-6">
        See Zaigo in Action
        <Play className="ml-2 h-4 w-4" />
      </Button>
      <Button variant="outline" size="lg" className="border-[#A3E4D7] text-[#028C6A] hover:bg-[#A3E4D7]/10 h-10 px-6">
        Post a Job Now
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}