<template>
  <div class="layout-vertical">
    <h2 class="teko-title">
      You have been chosen to bring cadCAD back in time
    </h2>
    <p class="level-text mt-1">
      You don’t land in a different time-space so much as you appear in it, the
      sensation of gravity slowly returning to each of your trillions of cells.
    </p>
    <p class="level-text mt-1">
      Despite never being in the 21st century before, strangely enough, the
      smell is instantly familiar. The vaguely metallic and dusty aroma of this
      bygone industrialized era mingles with the odor of the back alley you find
      yourself in.
    </p>
    <img
      class="level-image"
      src="@/assets/level_0_img_1.jpg"
      alt="intro image 1"
    />
    <p class="level-text">
      Walking through the bustling pre-apocalyptic city, you are awed by the
      unanticipated warmth of sunshine and catch a glimpse of yourself in a
      store window. A cheery woman with a definitive style and charisma is
      reflected back!
    </p>
    <h2 class="teko-title mt-3">Who am I?</h2>
    <p class="level-text mt-1">
      Looking at the phone in your pocket you intuitively know how to unlock it
      and scroll through to find out that your name is Nik. When your calendar
      shows you are on your way to host a RadicalxChange meeting at the Akasha
      Hub in Barcelona, your excitement builds!
    </p>
    <img
      class="level-image"
      src="@/assets/level_0_img_2.jpg"
      alt="intro image 2"
    />
    <h2 class="teko-title mt-3">Your mission</h2>
    <p class="level-text mt-1">
      You determine that your mission is to initiate the design of a
      self-sustaining RadicalxChange Commons at a strategic open source distribution point.
      This could ripple the needed economic value throughout the concentric
      spheres of human interaction worldwide regardless of class or access.
    </p>
    <img
      class="level-image"
      src="@/assets/level_0_img_3.jpg"
      alt="intro image 3"
    />
    <h2 class="teko-title mt-3">What is a Commons?</h2>
    <p class="level-text mt1">
      A Commons is a well-engineered, community-focused economy that can reward
      value creation where business models fail to do so. They can be formed
      whenever a community is creating value for society as a whole.
    </p>
    <p class="level-text mt1">
      These Commons emerge out of the relationships between three main
      components:
      <strong>the community, their shared resources, and the protocols</strong>
      they use to make decisions and reward continued value creation.
    </p>
    <p class="level-text mt1">
      Designing the protocols that can successfully govern Commons can only be
      done by the community that is intimately connected to the shared
      resource... <br /><strong
        >your task is to guide them down that path.</strong
      >
    </p>
    <button commons @click="$router.push('/level/1/1')" class="mt-3">
      DESIGN THE COMMONS
    </button>
    <transition name="fade" appear>
      <scrollable-gfx />
    </transition>
  </div>
</template>

<script>
import ScrollableGfx from '@/components/common/ScrollableGfx.vue'

export default {
  name: 'level-0-2',
  components: { ScrollableGfx },
}
</script>

<style scoped lang="scss">
h2,
p {
  max-width: 60% !important;
}
p {
  text-align: left !important;
  @include l {
    text-align: justify !important;
  }
}
.level-image {
  margin-top: 2rem;
  background: grey;
  width: 450px;
  max-width: 100%;
  height: 450px;
  object-fit: cover;
  object-position: center;
}
</style>
