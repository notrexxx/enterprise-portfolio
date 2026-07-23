"use client";

import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";
import { ReactNode, ComponentProps } from "react";

interface TrackedLinkProps extends ComponentProps<typeof Link> {
  eventName: string;
  eventParams?: Record<string, string | number | boolean>;
  children: ReactNode;
}

export function TrackedLink({ 
  eventName, 
  eventParams = {}, 
  children, 
  ...props 
}: TrackedLinkProps) {
  
  const handleInteraction = () => {
    sendGAEvent({ event: eventName, ...eventParams });
  };

  return (
    <Link {...props} onClick={handleInteraction}>
      {children}
    </Link>
  );
}