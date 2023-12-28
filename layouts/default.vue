<script setup>
  useFont([
    {
      src: '/fonts/LibreCaslonCondensed-Medium.woff2',
      family: 'Libre Med',
      weight: '600',
      fallback: ['serif'],
      variable: 'font_libre_med',
      preload: true, 
    },
    {
      src: '/fonts/LibreCaslonCondensed-Regular.woff2',
      family: 'Libre',
      weight: '300',
      fallback: ['serif'],
      variable: 'font_libre',
      preload: true,
    },
    {
      src: '/fonts/OverusedGrotesk-Bold.woff2',
      family: 'Over Bold',
      weight: '100 900',
      fallback: ['sans-serif'],
      preload: true, 
    },
    {
      src: '/fonts/OverusedGrotesk-Medium.woff2',
      family: 'Over Med',
      weight: '100 900',
      fallback: ['sans-serif'],
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