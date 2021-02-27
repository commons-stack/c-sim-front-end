<template>
  <div class="wrap">
    <transition name="test-fade" appear>
      <div class="section" v-show="currentIntro === 1">
        <div class="hero hero-1">{{ text[1] }}</div>
        <p>{{ text[1] }}</p>
        <img src="@/assets/intro_1.jpeg" alt="Intro image (1)" />
      </div>
    </transition>
    <transition name="test-fade" appear>
      <div class="section" v-show="currentIntro === 2">
        <div class="hero">{{ text[2] }}</div>
        <p>{{ text[2] }}</p>
        <img src="@/assets/intro_2.jpeg" alt="Intro image (2)" />
      </div>
    </transition>
    <transition name="test-fade" appear>
      <div v-show="[3, 4].includes(currentIntro)">
        <transition name="test-fade" appear>
          <div v-show="currentIntro === 3" class="section">
            <div class="hero">{{ text[3] }}</div>
            <p>{{ text[3] }}</p>
            <img src="@/assets/intro_3.jpeg" alt="Intro image (3)" />
          </div>
        </transition>
        <transition name="test-fade" appear>
          <div v-show="currentIntro === 4" class="section">
            <div class="hero">{{ text[4] }}</div>
            <p>{{ text[4] }}</p>
            <img src="@/assets/intro_3.jpeg" alt="Intro image (3)" />
          </div>
        </transition>
        <img src="@/assets/intro_3.jpeg" alt="Intro image (3)" />
      </div>
    </transition>
    <transition name="test-fade" appear>
      <div class="section" v-show="currentIntro === 5">
        <p>{{ text[5] }}</p>
        <img src="@/assets/intro_5.jpeg" alt="Intro image (4)" />
      </div>
    </transition>
    <transition name="test-fade" appear>
      <div class="section" v-show="currentIntro === 6">
        <p>{{ text[6] }}</p>
        <img src="@/assets/intro_6.jpeg" alt="Intro image (5)" />
      </div>
    </transition>
    <transition name="test-fade" appear>
      <div class="section" v-show="currentIntro === 7">
        <p class="t7-text" v-html="text[7]">{{ text[7] }}</p>
        <img src="@/assets/intro_7.jpeg" alt="Intro image (6)" />
      </div>
    </transition>
    <transition name="test-fade" appear>
      <div class="section" v-show="[8, 9].includes(currentIntro)">
        <transition name="test-fade" appear>
          <p class="t8-text" v-if="currentIntro === 8">{{ text[8] }}</p>
        </transition>
        <transition name="test-fade" appear>
          <p class="t9-text" v-if="currentIntro === 9">{{ text[9] }}</p>
        </transition>
        <img src="@/assets/intro_8.jpeg" alt="Intro image (7)" />
      </div>
    </transition>
    <transition name="test-fade" appear>
      <div class="section" v-show="[10, 11, 12, 13].includes(currentIntro)">
        <transition name="test-fade" appear>
          <p class="t10-text" v-if="currentIntro === 10">{{ text[10] }}</p>
        </transition>
        <transition name="test-fade" appear>
          <p class="t11-text" v-if="currentIntro >= 11">
            {{ text[11] }}
          </p>
        </transition>
        <transition name="test-fade" appear>
          <p class="t12-text" v-if="currentIntro >= 12">
            <br />
            {{ text[12] }}
          </p>
        </transition>
        <transition name="test-fade" appear>
          <p class="t13-text" v-if="currentIntro >= 13">
            <br /><br />
            {{ text[13] }}
          </p>
        </transition>
        <img src="@/assets/intro_10.jpeg" alt="Intro image (8)" />
      </div>
    </transition>
    <nav
      class="nav"
      :style="{ gridTemplateColumns: `repeat(${Object.keys(statesDuration).length}, 1fr)` }"
    >      
    <div class="bar" v-for="state in Object.keys(statesDuration)" :key="state">
        <div class="progress">&nbsp;</div>
      </div>
    </nav>
    <div class="skip-intro">
      <p @click="skip">SKIP</p>
    </div>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'
import Hammer from 'hammerjs'

export default {
  name: 'intro',
  data() {
    const timeline = anime.timeline({
      autoplay: true,
      easing: 'linear',
      loop: false,
    })

    return {
      timeline,
      currentIntro: 1,
      statesDuration: {
        1: 3000,
        2: 5000,
        3: 5000,
        4: 3000,
        5: 5000,
        6: 8000,
        7: 5000,
        8: 5000,
        9: 5000,
        10: 5000,
        11: 3000,
        12: 3000,
        13: 3000,
      },
      text: {
        1: 'Greed. War. Violence.',
        2: 'Extraction, pollution and poor decision making have rendered the water and air toxic to life.',
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
        13: 'of creating a self-governing, regenerative Commons?',
      },
    }
  },
  methods: {
    elapsedTime() { 
        return Object.values(this.statesDuration).slice(0, this.currentIntro - 1).reduce((acc, cur) => acc + cur, 0)
    },
    resetState() {
      this.timeline.pause()
      this.timeline.seek(this.elapsedTime())
      this.timeline.play()
    },
    skip() {
      this.timeline.pause()
      this.timeline.seek(0)
      this.hammer.destroy()
      if (this.$route.path !== '/level/0/1') this.$router.push('/level/0/1')
    },
  },
  mounted() {
    const $timeline = this.$el.getElementsByClassName('nav')[0]

    Object.entries(this.statesDuration).forEach(([index, duration]) => {
      this.timeline.add({
        targets: $timeline.getElementsByClassName('bar')[index - 1].getElementsByClassName('progress'),
        width: '100%',
        duration,
        changeBegin: () => {
          this.currentIntro = Number(index)
        },
        complete: () => {
          if (this.currentIntro === Object.keys(this.statesDuration).length) {
            this.skip()
            this.timeline.pause()
          }
        }
      })
    })

    this.hammer = new Hammer.Manager(window, {
      recognizers: [
        [Hammer.Tap],
        [Hammer.Press, { time: 1, threshold: 1000000 }]
      ]
    })

    this.hammer.on('press', () => {
      this.timeline.pause()
    })

    this.hammer.on('pressup tap', () => {
      this.timeline.play()
    })

    this.hammer.on('tap', e => { 
      if (e.center.x > window.innerWidth / 2) {
        if (this.currentIntro < Object.keys(this.statesDuration).length) {
          this.timeline.pause()
          this.currentIntro++
          this.resetState()
        }
        else {
          this.skip()
        }
      } else {
        if (this.currentIntro > 1) {
          this.timeline.pause()
          this.currentIntro--
          this.resetState()
        }
      }
    })
  },
}
</script>

<style scoped lang="scss">
.nav {
  box-sizing: border-box;
  display: grid;
  grid-column-gap: 0.2em;
  height: 0.2em;
  padding: 0 1em;
  position: fixed;
  top: 1em;
  width: 100%;
}
.bar {
  background: rgba(0,0,0,0.25);
  border-radius: 10em;
  height: 100%;
}
.progress {
  background: #EAFAEA;
  height: 100%;
  width: 0%;
}
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
  @media (max-width: 400px) {
    margin-top: 15rem !important;
  }
  @media (min-width: 400px)
    and (max-width: 800px) {
    margin-top: 15rem !important;
  }
  @media (min-width: 800px)
    and (max-width: 1180px) {
    margin-top: 12rem !important;
  }
}
.t12-text {
  @media (max-width: 400px) {
    margin-top: 22rem !important;
  }
  @media (min-width: 400px)
    and (max-width: 800px) {
    margin-top: 19rem !important;
  }
  @media (min-width: 800px)
    and (max-width: 1180px) {
    margin-top: 16rem !important;
  }
}
.t13-text {
  @media (max-width: 400px) {
    margin-top: 32rem !important;
  }
  @media (min-width: 400px)
    and (max-width: 800px) {
    margin-top: 25.5rem !important;
  }
  @media (min-width: 800px)
    and (max-width: 960px) {
    margin-top: 20rem !important;
  }
  @media (min-width: 960px)
    and (max-width: 1180px) {
    margin-top: 24rem !important;
  }
}
.disable-select {
  -webkit-user-select:none;
  -khtml-user-select:none;
  -moz-user-select:none;
  -o-user-select:none;
  user-select:none;
}
img {
  position: fixed;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  @extend .image-center;
  @extend .disable-select;
  pointer-events:none;
}
p, .hero, .bar, .progress {
  @extend .disable-select;
}
</style>
