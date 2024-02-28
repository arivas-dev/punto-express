"use client";

import { Providers } from "../context";
import Index from "./Index";

export default function App() {
  return (
    <Providers>
      <Index />
    </Providers>
  );
}
