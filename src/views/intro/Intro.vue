<template>
  <div class="wrap">
    <transition name="test-fade" appear>
      <div class="section" v-show="xstate === '1'">
        <div class="hero hero-1">{{ text[1] }}</div>
        <p>{{ text[1] }}</p>
        <img src="@/assets/intro_1.jpg" alt="Intro image (1)" />
      </div>
    </transition>
    <transition name="test-fade" appear>
      <div class="section" v-show="xstate === '2'">
        <div class="hero">{{ text[2] }}</div>
        <p>{{ text[2] }}</p>
        <img src="@/assets/intro_2.jpg" alt="Intro image (2)" />
      </div>
    </transition>
    <transition name="test-fade" appear>
      <div v-show="['3', '4'].includes(xstate)">
        <transition name="test-fade" appear>
          <div v-show="xstate === '3'" class="section">
            <div class="hero">{{ text[3] }}</div>
            <p>{{ text[3] }}</p>
            <img src="@/assets/intro_3.jpg" alt="Intro image (3)" />
          </div>
        </transition>
        <transition name="test-fade" appear>
          <div v-show="xstate === '4'" class="section">
            <div class="hero">{{ text[4] }}</div>
            <p>{{ text[4] }}</p>
            <img src="@/assets/intro_3.jpg" alt="Intro image (3)" />
          </div>
        </transition>
        <img src="@/assets/intro_3.jpg" alt="Intro image (3)" />
      </div>
    </transition>
    <transition name="test-fade" appear>
      <div class="section" v-show="xstate === '5'">
        <p>{{ text[5] }}</p>
        <img src="@/assets/intro_5.jpg" alt="Intro image (4)" />
      </div>
    </transition>
    <transition name="test-fade" appear>
      <div class="section" v-show="xstate === '6'">
        <p>{{ text[6] }}</p>
        <img src="@/assets/intro_6.jpg" alt="Intro image (5)" />
      </div>
    </transition>
    <transition name="test-fade" appear>
      <div class="section" v-show="xstate === '7'">
        <p class="t7-text" v-html="text[7]">{{ text[7] }}</p>
        <img src="@/assets/intro_7.jpg" alt="Intro image (6)" />
      </div>
    </transition>
    <transition name="test-fade" appear>
      <div class="section" v-show="['8', '9'].includes(xstate)">
        <transition name="test-fade" appear>
          <p class="t8-text" v-if="xstate === '8'">{{ text[8] }}</p>
        </transition>
        <transition name="test-fade" appear>
          <p class="t9-text" v-if="xstate === '9'">{{ text[9] }}</p>
        </transition>
        <img src="@/assets/intro_8.jpg" alt="Intro image (7)" />
      </div>
    </transition>
    <transition name="test-fade" appear>
      <div class="section" v-show="['10', '11', '12', '13'].includes(xstate)">
        <transition name="test-fade" appear>
          <p class="t10-text" v-if="xstate === '10'">{{ text[10] }}</p>
        </transition>
        <transition name="test-fade" appear>
          <p class="t11-text" v-if="xstate >= '11'">
            {{ text[11] }}
          </p>
        </transition>
        <transition name="test-fade" appear>
          <p class="t12-text" v-if="xstate >= '12'">
            <br />
            {{ text[12] }}
          </p>
        </transition>
        <transition name="test-fade" appear>
          <p class="t13-text" v-if="xstate >= '13'">
            <br /><br />
            {{ text[13] }}
          </p>
        </transition>
        <img src="@/assets/intro_10.jpg" alt="Intro image (8)" />
      </div>
    </transition>
    <div class="skip-intro">
      <p @click="skip">SKIP</p>
    </div>
  </div>
</template>

<script>
import * as xstate from 'xstate'

const createState = (next, delay = 5000) => ({
  on: { NEXT: next },
  after: [{ delay: delay, target: next }]
})

const machine = xstate.Machine({
  initial: '1',
  states: {
    1: createState('2', 3000),
    2: createState('3'),
    3: createState('4'),
    4: createState('5', 3000),
    5: createState('6'),
    6: createState('7', 8000),
    7: createState('8'),
    8: createState('9'),
    9: createState('10'),
    10: createState('11'),
    11: createState('12', 3000),
    12: createState('13', 3000),
    13: createState('end', 3000),
    end: { type: 'final' },
  },
})

export default {
  name: 'intro',
  mounted() {
    setTimeout(() => window.addEventListener('click', this.clickHandler), 750)
  },
  beforeDestroy() {
    window.removeEventListener('click', this.clickHandler)
  },
  data() {
    return {
      machine: xstate.interpret(machine),
      text: {
        1: 'Greed. War. Violence.',
        2: 'Extraction, pollution and poor decision-making have rendered the water and air toxic to life.',
        3: 'The sun has been blotted out. Millions of life forms have gone extinct.',
        4: 'yet pockets of humanity survived...',
        5: '...mostly basement gamers, holed up in secret bunkers, many of whom have never seen the sun.',
        6: 'These visionary geeks turned their remote control into cadCAD; a computational prediction tool and time travel machine that can be used to prevent the catastrophic outcomes of the 21st century!',
        7: 'They can now send someone back to a pivotal point in the past... <br /><br /> ...but to when?',
        8: 'With cadCAD in hand, new incentivized economic systems can be created that appropriately value the precious resources of our planet.',
        9: 'YOU have been chosen to bring cadCAD back in time, but there’s a twist...',
        10: '... your consciousness will have to inhabit a human of that time period, and there’s no way to know who in advance!',
        11: 'When and where will you land?',
        12: 'What social impact movement has the greatest chance',
        13: 'of Creating a self-governing, regenerative Commons?',
      },
    }
  },
  methods: {
    clickHandler() {
      this.$send('NEXT')
    },
    skip() {
      this.$router.push('/level/0/1')
    },
  },
  watch: {
    xstate(x) {
      if (x === 'end') this.skip()
    },
  },
}
</script>

<style scoped lang="scss">
.skip-intro {
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100vw;
  flex-direction: row-reverse;
  & > p {
    margin: 1rem;
    padding: 0.2rem;
    cursor: pointer;
  }
}
.wrap {
  position: absolute;
  left: 0;
  height: 100%;
}
.section {
  position: absolute;
  width: 100vw;
}
.hero {
  @extend .font-teko;
  position: absolute;
  mix-blend-mode: overlay;
  opacity: 0.3;
  width: 100vw;
  line-height: 1.2;
  letter-spacing: -4px;
  padding: 2rem 1.5rem;
  font-size: 60px;
  @include m {
    padding: 3rem 2rem;
    font-size: 80px;
  }
}
.hero-1 {
  text-align: center;
  line-height: 0.8;
  @include m {
    font-size: 160px;
  }
}
.section > p {
  @extend .font-teko;
  position: absolute;
  width: 80vw;
  padding: 0 1.5rem;
  margin-top: 6rem;
  font-size: 36px;
  @include m {
    margin-top: 16.5rem;
    padding: 0 2rem;
    font-size: 44px;
    width: 65vw;
  }
  @include l {
    width: 55vw;
  }
  @include xl {
    margin-top: 25.5rem;
  }
}
.t7-text {
  @include l {
    width: 35% !important;
  }
}
.t8-text,
.t9-text {
  @include l {
    width: 45% !important;
    text-align: justify;
  }
}
.t10-text, 
.t11-text {
  @media (max-width: 640px) {
    margin-top: 15rem !important;
  }
}
.t12-text {
  @media (max-width: 640px) {
    margin-top: 19rem !important;
  }
}
.t13-text {
  @media (max-width: 640px) {
    margin-top: 25.5rem !important;
  }
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
