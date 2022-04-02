import create from "zustand";
import { devtools } from "zustand/middleware";

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
const setLocalStorage = (key, value) =>
  window.localStorage.setItem(key, JSON.stringify(value));

const store = (set) => ({
  name: getLocalStorage("name") || undefined,
  setName: (name) =>
    set(() => {
      setLocalStorage("name", name);
      return { name };
    }),
  chosenPartyId: getLocalStorage("chosenPartyId") || undefined,
  setChosenPartyId: (chosenPartyId) =>
    set(() => {
      setLocalStorage("chosenPartyId", chosenPartyId);
      return { chosenPartyId };
    }),
});

const useStore = create(devtools(store));

export default useStore;
