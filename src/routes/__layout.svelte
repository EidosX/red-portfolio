<slot />
<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  :global(body) {
    @apply bg-black;
    @apply text-white;
    @apply overflow-x-hidden;
    font-family: "Poppins";
  }
</style>
