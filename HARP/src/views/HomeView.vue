<script setup lang="ts">
import { useSurveyStore } from '@/stores/survey';

const props = defineProps<{
  test: boolean
}>();

const state = useSurveyStore();
state.initState(props.test);
</script>


<template>
  <main>
    <h1>HARP Survey</h1>
    There are 30 questions in the questionairre.
    At the end, you will be shown some results about your alignment with the different research philosophies.
    Click the Survey tab at the top to begin.

    <h1>About HARP</h1>
    HARP (heightened awareness of research philosophy) is a questionairre that helps researchers understand their own personal inclinations and how these match up with the prevaling research philosophies.

    <h2>Open source project</h2>
    This is an open-source project, so if you need to modify it, you can do so.
    You can find the <a href='https://github.com/danieltallentire/vuejs-harp-reflexive-survey' target="_blank">project on github</a>.
    This project is licensed under the <a href='https://github.com/danieltallentire/vuejs-harp-reflexive-survey/blob/main/LICENSE.md'>GNU GPL</a>.

    <h2>References</h2>
    <span class="reference pure-u-1">Bristow, A. and Saunders, M. (2014) Heightening awareness of research philosophy: the development of a reflexive tool for use with students. In: British Academy of Management Conference Proceedings 2014. British Academy of Management Conference Proceedings 2014. [Online]. 9 September 2014 British Academy of Management. p. Available at: <a href='https://www.bl.uk/collection-items/heightening-awareness-of-research-philosophy-the-development-of-a-reflexive-tool-for-use-with-students' target='_blank'>https://www.bl.uk/collection-items/heightening-awareness-of-research-philosophy-the-development-of-a-reflexive-tool-for-use-with-students</a>.</span>

    <span class="reference pure-u-1" >Saunders, M.N.K., Lewis, P. and Thornhill, Adrian. (2019) Research methods for business students. Eighth Edition. New York, Pearson.</span>
  </main>
</template>

<style>
.reference {
   margin-top: 2em;
}
</style>