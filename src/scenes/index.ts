import { lazy, type ComponentType, type LazyExoticComponent } from "react";
import type { SceneKey } from "../lib";
import type { SceneProps } from "./kit";

/** One lazily loaded scene per gym; Vite splits each into its own chunk. */
export const SCENES: Record<SceneKey, LazyExoticComponent<ComponentType<SceneProps>>> = {
  barbell: lazy(() => import("./barbell")),
  plates: lazy(() => import("./plates")),
  dumbbells: lazy(() => import("./dumbbells")),
  kettlebell: lazy(() => import("./kettlebell")),
  neon: lazy(() => import("./neon")),
  lotus: lazy(() => import("./lotus")),
  gada: lazy(() => import("./gada")),
};
