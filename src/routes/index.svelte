<script>
  import { lang } from "../lang/lang";

  import Typewriter from "svelte-typewriter";
</script>

<div class="flex justify-center">
  <nav
    class="flex absolute items-center justify-center top-10 px-8 w-full max-w-3xl gap-6 flex-wrap"
  >
    <p class="text-blue-300 opacity-60 hidden sm:block uppercase tracking-wide mr-auto">
      <a href="/">Diego Imbert</a>
    </p>
    <p class="text-blue-300 opacity-60"><a href="/">{$lang.navbar.skills}</a></p>
    <p class="text-blue-300 opacity-60"><a href="/">{$lang.navbar.projects}</a></p>
    <p class="text-pink-500 relative z-10">
      <strong><a href="/">{$lang.navbar.contactMe}</a></strong>
    </p>
  </nav>
</div>

<div class="pointer-events-none select-none w-screen h-screen">
  <img
    id="bg-img"
    src="/night-sky.webp"
    alt=""
    class="w-screen h-screen object-cover absolute"
    style="z-index: -1;"
  />

  <div class="w-screen h-screen grid place-items-center absolute pb-12 overflow-hidden">
    <Typewriter loop interval={64} delay={600} cursor={false}>
      {#each $lang.typewriterHeadlines as title}
        <h1
          style="font-family: 'Oswald';"
          class="text-3xl lg:text-8xl xl:text-9xl tracking-widest uppercase font-extralight text-center relative break-words"
        >
          {title}
        </h1>
      {/each}
    </Typewriter>
  </div>

  <div class="w-screen h-screen flex justify-center overflow-hidden absolute">
    <div id="bg-curve" class="w-screen bg-black absolute bottom-0" />
    <img
      id="character"
      src="/character/typing-1.png"
      alt=""
      class="absolute -bottom-8 sm:-bottom-16 max-w-xl sm:max-w-2xl 2xl:max-w-3xl max-h-full object-contain"
    />
  </div>
</div>

<style>
  @keyframes bg-curve-intro {
    0% {
      transform: scaleX(130%) translateY(100%);
    }
    100% {
      transform: scaleX(130%) translateY(50%);
    }
  }
  @keyframes character-intro {
    0%,
    10% {
      transform: translateY(32rem);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes bg-img-intro {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100%;
    }
  }

  #bg-curve {
    filter: blur(0.1rem);
    border-radius: 100% 100% 0 0;
    height: calc(min(32rem, 72vh));
    min-width: 80rem;
    animation: bg-curve-intro 0.8s forwards 0s ease-out;
  }
  #character {
    transform: translateY(100000rem);
    animation: character-intro 0.6s forwards 0.2s ease-out;
  }
  #bg-img {
    animation: bg-img-intro 1.2s forwards 0s ease-in-out;
  }
</style>
