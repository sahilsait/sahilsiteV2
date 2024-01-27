<script>

import { onMount } from 'svelte';

onMount(() => {
  document.title = 'sahilsait';
});


import Topbar from '../components/Topbar.svelte';
import Navbar from '../components/Navbar.svelte';

</script>

<style>
    :global(html, body) {
        color: limegreen;
        scroll-behavior: smooth;
    }
</style>

<div class="mx-4 sm:m-6 md:m-8 lg:m-10 xl:m-12 2xl:m-16">
    <Topbar />
    <Navbar />
</div>

