<script setup>
  useFont([
    {
      src: '~assets/fonts/LibreCaslonCondensed-Medium.woff2',
      family: 'Libre Med',
      weight: '600',
      variable: 'font_libre_med',
      preload: true, 
    },
    {
      src: '~assets/fonts/LibreCaslonCondensed-Regular.woff2',
      family: 'Libre',
      weight: '300',
      variable: 'font_libre',
      preload: true,
    },
    {
      src: '~assets/fonts/OverusedGrotesk-Bold.woff2',
      family: 'Over Bold',
      weight: '100 900',
      preload: true, 
    },
    {
      src: '~assets/fonts/OverusedGrotesk-Medium.woff2',
      family: 'Over Med',
      weight: '100 900',
      preload: true, 
    },
  ])
</script>
	<template>
		<div class="layout">
			<div id="main" class="page">
				<Nav />
				<slot />	
			</div>
		</div>
	</template>
<style lang="scss" scoped>
</style>