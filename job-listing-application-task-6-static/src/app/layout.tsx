import type { Metadata } from "next";

import "./globals.css";
import { ReactNode } from "react";

interface Props{
  children:ReactNode
}
export const metadata: Metadata = {
  title: "Job Listing Application",
  description: "Simple Job Listing Application to show application based on static data",
};

import React from 'react'

const layout = ({children}:Props) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

export default layout

