<template>
  <div class="wrap h-1-1" @click="$send('NEXT')">
    <transition name="fade" appear>
      <div v-if="xstate === 'i1'">
        <div class="hero">{{text[1]}}</div>
        <p>{{text[1]}}.</p>
        <img src="@/assets/intro1.png" alt="Intro image (1)">
      </div>
    </transition>
    <transition name="fade">
      <div v-if="xstate === 'i2'">
        <div class="hero">{{text[2]}}</div>
        <p>{{text[2]}}</p>
        <img src="@/assets/intro2.png" alt="Intro image (1)">
      </div>
    </transition>
    <transition name="fade">
      <div v-if="xstate === 'i3'">
        <div class="hero">{{text[3]}}</div>
        <p>{{text[3]}}</p>
        <img src="@/assets/intro3.png" alt="Intro image (1)">
      </div>
    </transition>
    <transition name="fade">
      <div v-if="xstate === 'i4'">
        <div class="hero">{{text[4]}}</div>
        <p>{{text[4]}}</p>
        <img src="@/assets/intro3.png" alt="Intro image (1)">
      </div>
    </transition>
    <transition name="fade">
      <div v-if="xstate === 'i5'">
        <p>{{text[5]}}</p>
        <img src="@/assets/intro5.png" alt="Intro image (1)">
      </div>
    </transition>
    <transition name="fade">
      <div v-if="xstate === 'i6'">
        <p>{{text[6]}}</p>
        <img src="@/assets/intro6.png" alt="Intro image (1)">
      </div>
    </transition>
    <transition name="fade">
      <div v-if="xstate === 'i7'">
        <p class="t7-text">{{text[7]}}</p>
        <img src="@/assets/intro7.png" alt="Intro image (1)">
      </div>
    </transition>
    <transition name="fade">
      <div v-if="xstate === 'i8'">
        <p>{{text[8]}}</p>
        <img src="@/assets/intro8.png" alt="Intro image (1)">
      </div>
    </transition>
    <transition name="fade">
      <div v-if="xstate === 'i9'">
        <p>{{text[9]}}</p>
        <img src="@/assets/intro8.png" alt="Intro image (1)">
      </div>
    </transition>
    <transition name="fade">
      <div v-if="xstate === 'i10'">
        <p>{{text[10]}}</p>
        <img src="@/assets/intro10.png" alt="Intro image (1)">
      </div>
    </transition>
    <transition name="fade">
      <div v-if="xstate === 'i11'">
        <p>{{text[11]}}</p>
        <img src="@/assets/intro10.png" alt="Intro image (1)">
      </div>
    </transition>
  </div>
</template>

<script>
import * as xstate from 'xstate'

const machine = xstate.Machine({
  initial: 'i1',
  states: {
    i1: { on: { NEXT: 'i2' }, after: { 5000: 'i2' } },
    i2: { on: { NEXT: 'i3' }, after: { 5000: 'i3' } },
    i3: { on: { NEXT: 'i4' }, after: { 5000: 'i4' } },
    i4: { on: { NEXT: 'i5' }, after: { 5000: 'i5' } },
    i5: { on: { NEXT: 'i6' }, after: { 5000: 'i6' } },
    i6: { on: { NEXT: 'i7' }, after: { 5000: 'i7' } },
    i7: { on: { NEXT: 'i8' }, after: { 5000: 'i8' } },
    i8: { on: { NEXT: 'i9' }, after: { 5000: 'i9' } },
    i9: { on: { NEXT: 'i10' }, after: { 5000: 'i10' } },
    i10: { on: { NEXT: 'i11' }, after: { 5000: 'i11' } },
    i11: { on: { NEXT: 'end' }, after: { 5000: 'end' } },
    end: { type: 'final' }
  }
})

export default {
  name: 'intro',
  created() {
  },
  data() {
    return {
      machine: xstate.interpret(machine),
      text: {
        1: 'Greed. War. Violence.',
        2: 'Extraction, pollution and poor decision-making have rendered the water and air toxic to life.',
        3: 'The sun has been blotted out. Millions of life forms have gone extinct.',
        4: 'yet pockets of humanity survived...',
        5: '...mostly basement gamers, held up in secret bunkers, many of whom have never seen the sun.',
        6: 'These visionary geeks turned their remote control into cadCAD; a computational prediction tool and time travel machine that can be used to prevent the catastrophic outcomes of the 21st century!',
        7: 'They can now send someone back to a point in the past to save the planet, but when?',
        8: 'With cadCAD in hand, new incentivized economic systems can be created.',
        9: 'YOU have been chosen to bring cadCAD back in time, but there’s a twist...',
        10: '... your consciousness will have to inhabit a human of that time period, and there’s no way to know who in advance!',
        11: 'When and where will you end up, and what social movement has the greatest chance of creating a self-governing, regenerative Commons?'
      }
    }
  },
  watch: {
    xstate(x) {
      if (x === 'end') this.$router.push('level-0-1')
    }
  }
}
</script>

<style scoped lang="scss">
.wrap > div {
  position: absolute;
  top: 0;
  left: 0;
  @extend .container-expand;
}
.hero {
  font-size: 90px;
  letter-spacing: -4px;
  opacity: 20%;
}
p {
  position: absolute;
  top: 0;
  margin-top: 325px;
  font-size: 44px;
  @include m {
    width: 50%;
  }
}
.t7-text {
  width: 100% !important;
}
img {
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  @extend .image-center;
}
</style>
