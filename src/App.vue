<template>
  <div>
    <Beverage :isIced="beverageStore.currentTemp === 'Cold'" />
    <ul>
      <li>
        <template v-for="temp in beverageStore.temps" :key="temp">
          <label class="custom-radio">
            <input
              type="radio"
              name="temperature"
              :value="temp"
              v-model="beverageStore.currentTemp"
            />
            <span class="radio-tile">{{ temp }}</span>
          </label>
        </template>
      </li>
      <li>
        <template v-for="base in beverageStore.bases" :key="base.id">
          <label class="custom-radio">
            <input
              type="radio"
              name="base"
              :value="base"
              v-model="beverageStore.currentBase"
            />
            <span class="radio-tile">{{ base.name }}</span>
          </label>
        </template>
      </li>
      <li>
        <template v-for="creamer in beverageStore.creamers" :key="creamer.id">
          <label class="custom-radio">
            <input
              type="radio"
              name="creamer"
              :value="creamer"
              v-model="beverageStore.currentCreamer"
            />
            <span class="radio-tile">{{ creamer.name }}</span>
          </label>
        </template>
      </li>

      <li>
        <template v-for="syrup in beverageStore.syrups" :key="syrup.id">
          <label class="custom-radio">
            <input
              type="radio"
              name="syrup"
              :value="syrup"
              v-model="beverageStore.currentSyrup"
            />
            <span class="radio-tile">{{ syrup.name }}</span>
          </label>
        </template>
      </li>
    </ul>
    <div class="beverage-controls">
      <label for="Name"></label>
      <input
        id="Name"
        type="text"
        v-model="beverageStore.beverageName"
        placeholder="Beverage Name"
      />
      <button @click="beverageStore.makeBeverage">🍺 Make Beverage</button>
    </div>
  </div>
  <div id="beverage-container" style="margin-top: 20px">
    <h3>Saved Recipes</h3>

    <div v-if="beverageStore.savedBeverages.length > 0">
      <button
        v-for="(bev, index) in beverageStore.savedBeverages"
        :key="index"
        class="recipe-button"
        @click="beverageStore.showBeverage(bev)"
      >
        {{ bev.name }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";
const beverageStore = useBeverageStore();
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
#beverage-container {
  margin-top: 20px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  min-height: 100px;
}

.custom-radio input {
  display: none;
}

.radio-tile {
  display: inline-block;
  padding: 5px 10px;
  margin: 5px;
  background-color: rgba(222, 222, 222, 0.8);
  border: 2px solid #6e4228;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  color: #6e4228;
}

.custom-radio input:checked + .radio-tile {
  background-color: rgba(148, 92, 217, 0.8);
  color: #fff;
}

.radio-tile:hover {
  background-color: #f0f0f0;
}
</style>
