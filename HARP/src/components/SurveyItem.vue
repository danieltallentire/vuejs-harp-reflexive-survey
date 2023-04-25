<script setup lang="ts">
import { useSurveyStore } from '@/stores/survey';

const surveys = useSurveyStore();

defineProps<{
  index: number
}>()

defineEmits<{
  (event: 'selected'): void
}>()
</script>


<template>
  <section v-if="surveys.currentIndex == index">
    <div>
      <b>Q {{ index + 1 }} / {{ surveys.items.length }}:</b> {{ surveys.items[index].statement }}
    </div>
    <fieldset
      @change="$emit('selected')"
      >
      <input name="agreement" type="radio" v-model="surveys.items[index].agreement" :value="3"> Strongly agree 👍<br>
      <input  name="agreement" type="radio" v-model="surveys.items[index].agreement" :value="2"> Agree<br>
      <input  name="agreement" type="radio" v-model="surveys.items[index].agreement" :value="1"> Slightly agree<br>
      <input  name="agreement" type="radio" v-model="surveys.items[index].agreement"  :value="0"> Neither agree nor disagree<br>
      <input  name="agreement" type="radio" v-model="surveys.items[index].agreement" :value="-1"> Slightly disagree<br>
      <input  name="agreement" type="radio" v-model="surveys.items[index].agreement"  :value="-2"> Disagree<br>
      <input  name="agreement" type="radio" v-model="surveys.items[index].agreement"  :value="-3"> Strongly Disagree 👎<br>
    </fieldset>
  </section>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
}



.details {
  flex: 1;
  margin-left: 1rem;
}

fieldset {
  border: 0;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
