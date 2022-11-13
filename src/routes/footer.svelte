<script lang="ts">
  import TextLink from '$lib/components/text-link.svelte';
</script>

<footer class="bg-gray-100 px-4 pt-4 pb-1 flex flex-col md:flex-row justify-between items-center">
  <p class="text-xs mt-[2px]">© Lukas Stracke, 2022</p>
  <div class="flex flex-row gap-4 md:gap-12 items-center">
    <TextLink href="https://twitter.com/ThunderStrack24">
      <img
        class="inline"
        src="https://img.icons8.com/color/36/null/twitter--v1.png"
        alt="Twitter icon"
      />
      <span>Twitter</span>
    </TextLink>
    <TextLink href="https://github.com/Lms24">
      <img
        class="inline"
        src="https://img.icons8.com/ios-glyphs/30/null/github.png"
        alt="GitHub icon"
      />
      <span>GitHub</span>
    </TextLink>
    <TextLink href="https://www.linkedin.com/in/lukas-stracke/">
      <img
        class="inline"
        src="https://img.icons8.com/color/36/null/linkedin-circled--v1.png"
        alt="LinkedIn icon"
      />
      <span>LinkedIn</span>
    </TextLink>
  </div>
</footer>
