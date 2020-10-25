<template>
  <div class="wrap h-1-1" @click="$send('NEXT')">
    <transition name="fade" appear>
      <div v-show="xstate === '1'">
        <div class="hero">{{ text[1] }}</div>
        <p>{{ text[1] }}.</p>
        <img src="@/assets/intro_1.png" alt="Intro image (1)" />
      </div>
    </transition>
    <transition name="fade" appear>
      <div v-show="xstate === '2'">
        <div class="hero">{{ text[2] }}</div>
        <p>{{ text[2] }}</p>
        <img src="@/assets/intro_2.png" alt="Intro image (2)" />
      </div>
    </transition>
    <transition name="fade" appear>
      <div v-show="['3', '4'].includes(xstate)">
        <transition name="fade" appear>
          <div v-if="xstate === '3'" class="absolute">
            <div class="hero">{{ text[3] }}</div>
            <p>{{ text[3] }}</p>
          </div>
        </transition>
        <transition name="fade" appear>
          <div v-if="xstate === '4'" class="absolute">
            <div class="hero">{{ text[4] }}</div>
            <p>{{ text[4] }}</p>
          </div>
        </transition>
        <img src="@/assets/intro_3.png" alt="Intro image (3)" />
      </div>
    </transition>
    <transition name="fade" appear>
      <div v-show="xstate === '5'">
        <p v-if="xstate === '5'">{{ text[5] }}</p>
        <img src="@/assets/intro_5.png" alt="Intro image (5)" />
      </div>
    </transition>
    <transition name="fade" appear>
      <div v-show="xstate === '6'">
        <p v-if="xstate === '6'">{{ text[6] }}</p>
        <img src="@/assets/intro_6.png" alt="Intro image (6)" />
      </div>
    </transition>
    <transition name="fade" appear>
      <div v-show="xstate === '7'">
        <p v-if="xstate === '7'" class="t7-text">{{ text[7] }}</p>
        <img src="@/assets/intro_7.png" alt="Intro image (7)" />
      </div>
    </transition>
    <transition name="fade" appear>
      <div v-show="['8', '9'].includes(xstate)">
        <transition name="fade" appear>
          <p v-if="xstate === '8'">{{ text[8] }}</p>
        </transition>
        <transition name="fade" appear>
          <p v-if="xstate === '9'">{{ text[9] }}</p>
        </transition>
        <img src="@/assets/intro_8.png" alt="Intro image (8)" />
      </div>
    </transition>
    <transition name="fade" appear>
      <div v-show="['10', '11'].includes(xstate)">
        <transition name="fade" appear>
          <p v-if="xstate === '10'">{{ text[10] }}</p>
        </transition>
        <transition name="fade" appear>
          <p v-if="xstate === '11'">{{ text[11] }}</p>
        </transition>
        <img src="@/assets/intro_10.png" alt="Intro image (10)" />
      </div>
    </transition>
  </div>
</template>

<script>
import * as xstate from 'xstate'

const createState = next => ({ on: { NEXT: next }, after: { 4000: next } })
const machine = xstate.Machine({
  initial: '1',
  states: {
    1: createState('2'),
    2: createState('3'),
    3: createState('4'),
    4: createState('5'),
    5: createState('6'),
    6: createState('7'),
    7: createState('8'),
    8: createState('9'),
    9: createState('10'),
    10: createState('11'),
    11: createState('end'),
    end: { type: 'final' },
  },
})

export default {
  name: 'intro',
  created() {},
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
        11: 'When and where will you end up, and what social movement has the greatest chance of creating a self-governing, regenerative Commons?',
      },
    }
  },
  watch: {
    xstate(x) {
      if (x === 'end') this.$router.push('/level/0/1')
    },
  },
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
  position: fixed;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  @extend .image-center;
}
</style>
