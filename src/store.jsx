import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  name: undefined,
  setName: (name) => set(() => ({ name })),
  chosenPartyId: undefined,
  setChosenPartyId: (chosenPartyId) => set(() => ({ chosenPartyId })),
});

const useStore = create(devtools(store));

export default useStore;
