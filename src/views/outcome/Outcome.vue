<template>
    <div class="outcome-bg">
    <grid class="outcome-grid layout-vertical h-1-1" gtc="1fr">
        <grid class="score-grid align-self justify-items">
          <commons-header title-only />
          <p class="teko-subtitle">{{ display.title }}</p>
          <p class="x-subtitle">{{ display.subtitle }}</p>
          <p class="x-score">{{ score }}</p>

          <p class="x-improve">Try to improve your score</p>
          <button commons @click="$router.push('/')">play again</button>
          <!-- 
          <grid
            gap="1"
            gtc="repeat(4, auto)"
            align-items
            class="mt-2"
            v-if="future === 'good'"
          > 
            <p>Share your score:</p>
            <icon class="ml-1" icon="Twitter" button />
            <icon icon="LinkedIn" />
            <icon icon="Facebook" /> 
            
          </grid>
          -->
          <a 
            class="mt-2" 
            target="_blank"
            href="https://github.com/commons-stack/commons-simulator/issues/new" 
          >
            Give us feedback to help improve this game!
          </a>
          <button v-if="future === 'bad'" class="text-button mt-2" @click="$router.push('/')">
            No thanks, quit the game
          </button>
          <p	
            class="fixed bot right m-1 p-1 cursor-pointer"
            @click="toggleFuture()"
          >	
            Art of Mark Henson
          </p>
        </grid>
        <div class="x-img-wrap">
      <img :src="display.image" class="x-img" alt="outcome image background" />
    </div>
  </grid>
  </div>
</template>

<script>
export default {
  name: 'outcome',
  created() {
    this.future = this.score < 500 ? 'bad' : 'good'
  },
  data() {
    return {
      future: 'bad',
    }
  },
  methods: {
    toggleFuture() {
      this.future = this.future === 'bad' ? 'good' : 'bad'
    },
  },
  computed: {
    name() {
      return this.$store.getters['UserModule/getName']
    },
    score() {
      return this.$store.state.CommonsModule.outcome.result?.data.score
    },
    display() {
      return {
        good: {
          title: 'Good future',
          subtitle: this.name
            ? `You made a High Score, ${this.name}!`
            : 'You made a High Score!',
          image: require('@/assets/outcome_good.jpg'),
        },
        bad: {
          title: 'Bad future',
          subtitle: 'Your score',
          image: require('@/assets/outcome_bad.jpg'),
        },
      }[this.future]
    },
  },
}
</script>

<style scoped lang="scss">
.outcome-bg {
  background: #000A1A;
  margin: 0 -40px;
  padding: 20px;
  height: 100%;
}
.outcome-grid {
  @include l {
    grid-template-columns: 1fr 1fr !important; 
  }
}
.score-grid {
  z-index: 2;
}
.x-img {
  object-fit: cover;
  object-position: center;
}
.x-img-wrap {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1;
  & > img {
    width: 100vw;
    height: 100vh;
      @include l {
      width: auto;
      height: 100vh;
    }
  }
  @include l {
    width: 50vw;
    height: 50vh;
    top: 0;
    left: 50%;
  }
}
.x-subtitle {
  @extend .teko-title;
  margin-top: 3rem;
  @include s {
    margin-top: 6rem;
  }
}
.x-score {
  @extend .font-teko;
  font-size: 124px;
}
.x-improve {
  @extend .teko-subtitle;
  margin-top: 1rem;
  @include s {
    margin-top: 4rem;
  }
}
</style>
