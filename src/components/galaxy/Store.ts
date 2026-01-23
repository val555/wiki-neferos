// src/components/galaxy/Store.ts
import { create } from 'zustand';

type ViewState = 'GALAXY' | 'SYSTEM' | 'PLANET';

interface GalaxyState {
  view: ViewState;
  activeSystem: string | null;
  activePlanet: string | null;
  focusSystem: (systemId: string) => void;
  focusPlanet: (planetId: string) => void;
  resetToGalaxy: () => void;
}

export const useGalaxyStore = create<GalaxyState>((set) => ({
  view: 'GALAXY',
  activeSystem: null,
  activePlanet: null,
  focusSystem: (id) => set({ view: 'SYSTEM', activeSystem: id }),
  focusPlanet: (id) => set({ view: 'PLANET', activePlanet: id }),
  resetToGalaxy: () => set({ view: 'GALAXY', activeSystem: null, activePlanet: null }),
}));
