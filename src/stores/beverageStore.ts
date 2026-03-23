import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import syrups from "../data/syrups.json";
import creamers from "../data/creamers.json";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    bases: bases,
    syrups: syrups,
    creamers: creamers,

    currentTemp: tempretures[0],
    currentBase: bases[1],
    currentSyrup: syrups[1],
    currentCreamer: creamers[1],

    beverageName: "",

    savedBeverages: [] as any[],
  }),

  actions: {
    makeBeverage() {
      if (!this.beverageName.trim()) return;

      const newRecipe = {
        name: this.beverageName,
        temp: this.currentTemp,
        base: { ...this.currentBase },
        syrup: { ...this.currentSyrup },
        creamer: { ...this.currentCreamer },
      };

      this.savedBeverages.push(newRecipe);
      this.beverageName = "";
    },

    showBeverage(recipe: any) {
      this.currentTemp = recipe.temp;
      this.currentBase = recipe.base;
      this.currentSyrup = recipe.syrup;
      this.currentCreamer = recipe.creamer;
    },
  },
  persist: true,
});
