<script>

    import Home from "../routes/Home.svelte";
    import Projects from "../routes/Projects.svelte";
    import About from "../routes/About.svelte";
    import Misc from "../routes/Misc.svelte";


    let currentView = 'home';
    const changeView = (view) => {
        currentView = view;
    };

</script> 

<nav class="py-4 flex space-x-5 underline">
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