<template>
  <div class="container">
    <div class="row">
      <play-video
        :video="videoData"
        class="column"
      />
    </div>
    <div
      v-if="playList.length"
      class="row"
    >
      <div
        v-for="(item, index) in playList"
        :key="index"
        class="column"
      >
        <div class="tooltip-movie card">
          <img
            class="card-img"
            :src="item.image"
            @click="setVideoData(item)"
          >
          <span class="tooltiptext"> {{ item.description }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MovieServices from "../services/MovieServices.js";
import PlayVideo from "./PlayVideo";

export default {
  name: "PlayList",
  components: {
    PlayVideo,
  },
  data() {
    return {
      playList: [],
      videoData: "",
    };
  },
  created() {
    this.getPlayList();
  },
  methods: {
    getPlayList() {
      MovieServices.getPlayList()
        .then((response) => {
          if (response.data) {
            this.playList = response.data;
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    setVideoData(videoToPlay) {
      if (videoToPlay.video) {
        this.videoData = videoToPlay.video;
      }
    },
  },
};
</script>

<style scoped>
/* Container for flexboxes */
.row {
  display: flex;
  flex-wrap: wrap;
}

/* Create four equal columns */
.column {
  flex: 25%;
  padding: 5px;
}

/* On screens that are 992px wide or less, go from four columns to two columns */
@media screen and (max-width: 992px) {
  .column {
    flex: 50%;
  }
}

/* On screens that are 600px wide or less, make the columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .row {
    flex-direction: column;
  }
}
.tooltip-movie {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}
.tooltip-movie .tooltiptext {
  visibility: hidden;
  width: 100%;
  background-color: grey;
  color: #fff;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  text-align: start;
  border-radius: 6px;
}

.tooltip-movie:hover .tooltiptext {
  visibility: visible;
}
img {
  cursor: pointer;
}
</style>