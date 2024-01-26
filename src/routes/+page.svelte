<script>

import { onMount } from 'svelte';
onMount(() => {
  document.title = 'sahil sait';
});

import Home from './Home.svelte';
import Projects from './Projects.svelte';
import About from './About.svelte'
import Misc from './Misc.svelte';

let currentView = 'home';
const changeView = (view) => {
    currentView = view;
};

</script>

<style>
    :global(html, body) {
        color: limegreen;
        background-color: black;
    }
</style>

<div>
    <div>hi, i'm sahil</div>
    <div>software engineer</div>
    <div>
        <a href='https://twitter.com/sahilsaitn' target='_blank' rel='norefferer'>twt</a>
        <a href='https://github.com/sahilsait' target='_blank' rel='norefferer'>github</a>
        <a href='https://www.linkedin.com/in/sahilsait/' target='_blank' rel='norefferer'>linkedin</a>
        <a href='mailto:sahilsaitdev@gmail.com' target='_blank' rel='norefferer'>email</a>
    </div>
    <nav>
        <button on:click={() => changeView('home')}>home</button>
        <button on:click={() => changeView('projects')}>projects</button>
        <button on:click={() => changeView('about')}>about</button>
        <button on:click={() => changeView('misc')}>miscellanea</button>
    </nav>
    <div>
        {#if currentView === 'home'}
            <Home />
        {:else if currentView === 'projects'}
            <Projects />
        {:else if currentView === 'about'}
            <About />
        {:else if currentView === 'misc'}
            <Misc />
        {/if}
    </div>
</div>

