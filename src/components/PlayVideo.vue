<template>
  <div>
    <div>
      <video
        :key="video"
        controls="true"
        autoplay
      >
        <source
          :src="video"
          type="video/mp4"
        >
      </video>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    video: String,
  },
};
</script>
<style scoped>
video {
  width: 100% !important;
  height: 300px !important;
}
</style>