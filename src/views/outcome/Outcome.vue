<template>
    <div class="outcome-bg">
    <grid class="outcome-grid layout-vertical h-vh" gtc="1fr">
      <grid class="score-grid align-self justify-items">
        <commons-header title-only />
        <p class="teko-title" style="max-width: 80%;">{{ display.title }}</p>
        <p class="x-subtitle">{{ display.subtitle }}</p>
        <p class="x-score">{{ score }}<span>/1000</span></p>
        <a class="x-text-button mb-2" @click="$refs.score.show()">
          Your Score: What does this mean?
        </a>
        <modal :bg="false" overlay="dark" ref="score">
          <div class="layout-modal">
            <h2 class="teko-title">Your Score: What Does it Mean?</h2>
            <p class="level-text mt-1">
              Your score is a number out of 1000 representing the success of your Commons. A score 
              of 500 or greater indicates that you have selected parameters that, according to 
              cadCAD, will Hatch a Commons that will save the world from ecosystem collapse!
            </p>
            <p class="level-text">
              Based on the parameters you selected in each level, cadCAD builds your score using a 
              series of equally weighted metrics. The score, therefore depends on the following:
            </p>
            <ul>
              <li class="level-text">
                Final Token Price compared to Token Price at Hatch
              </li>
              <li class="level-text">
                Final Sentiment
              </li>
              <li class="level-text">
                Number of Funded Proposals compared to number of Initial Proposals
              </li>
              <li class="level-text">
                Total spent by the Funding Pool compared to the amount in the Funding Pool at Hatch
              </li>
              <li class="level-text">
                Average amount in the Funding Pool compared to the amount in the Funding Pool at Hatch
              </li>
              <li class="level-text">
                Average Token Price compared to the Token Price at Hatch
              </li>
              <li class="level-text">
                Average Sentiment</li>
              <li class="level-text">
                Ratio of Successful Projects to Failed Projects
              </li>
              <li class="level-text">
                Number of Final Participants compared to the number of Hatchers
              </li>
            </ul>
            <p class="level-text">
              You gain points if your Commons grows, gains popularity and positive sentiment, 
              passes and completes value-adding projects, gains stability - you get the idea - and 
              you lose points for the opposite. How did you do?
            </p>
            <p class="level-text" style="width: 100%;">
              Share Your Score or Play Again to improve your results!
            </p>
            <grid gtc="1fr 1fr" gap="3" style="min-width: 100%">
              <div>
                <p class="teko-subtitle" style="text-align: start;">
                  Share your score
                </p>
                <p class="x-score">{{ score }}<span>/1000</span></p>
                <grid
                  gap="1"
                  gtc="repeat(4, 40px)"
                  align-items
                >
                  <ShareNetwork
                    network="twitter"
                    :url="url"
                    :title="text"
                  >
                    <icon icon="Twitter" />
                  </ShareNetwork>
                  <ShareNetwork
                    network="facebook"
                    :url="url"
                    :quote="text"
                  >
                    <icon icon="Facebook" />
                  </ShareNetwork>
                  <ShareNetwork
                    network="linkedin"
                    :url="url"
                  >
                    <icon icon="LinkedIn" />
                  </ShareNetwork>
                </grid>
              </div>
              <div>
                <p class="teko-subtitle" style="text-align: start;">
                  Improve your score
                </p>
                <div>
                  <button commons @click="$router.push('/level/1/1')" class="mt-1">play again</button>
                  <a 
                    style="display: block;"
                    class="x-text-button mt-1" 
                    @click="$router.push('/results')">
                    Analyze your charts again
                  </a>
                </div>
              </div>
            </grid>
            <button commons class="mt-2" @click="$refs.score.hide()">OK</button>
          </div>
        </modal>
        <p class="x-improve">Try to improve your score.</p>
        <button commons @click="$router.push('/level/1/1')">play again</button>
        <a class="x-text-button mt-1" @click="$router.push('/results')">Analyze your charts again</a>
        <grid
          gap="0.5"
          gtc="repeat(5, auto)"
          align-items
          class="mt-2"
        >
          <p class="x-text">Share your score:</p>
          <ShareNetwork
            network="twitter"
            :url="url"
            :title="text"
          >
            <icon class="ml-1" icon="Twitter" />
          </ShareNetwork>
          <ShareNetwork
            network="facebook"
            :url="url"
            :quote="text"
          >
            <icon class="ml-1" icon="Facebook" />
          </ShareNetwork>
          <ShareNetwork
            network="telegram"
            :url="url"
            :title="text"
          >
            <icon class="ml-1" icon="Telegram" />
          </ShareNetwork>
          <ShareNetwork
            network="linkedin"
            :url="url"
          >
            <icon class="ml-1" icon="LinkedIn" />
          </ShareNetwork>
        </grid>
        <p class="mt-2 x-improve">
          <a
            class="x-text-button"
            target="_blank"
            href="https://github.com/commons-stack/commons-simulator/issues/new"
          >
            Give us feedback
          </a>
        to help improve this game!
        </p>
        <p class="credits m-1 p-1">
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
      url: 'https://sim.commonsstack.org/',
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
    text() {
      return `I'm helping design a regenerative future for humanity on the Commons Simulator and scored ${this.score}! Can you do better?`
    },
    title() {
      if (this.score <= 124) {
        return 'Your future is so bad you must have tried to fail!'
      }
      else if (this.score >= 125 && this.score <= 249) {
        return 'Oh no! Life on earth will not survive with these conditions, try again!'
      }
      else if (this.score >= 250 && this.score <= 374) {
        return 'You clearly need help. Try again, with very different choices!'
      }
      else if (this.score >= 375 && this.score <= 499) {
        return 'Not quite! You are so close to saving the planet, please play again.'
      }
      else if (this.score >= 500 && this.score <= 624) {
        return "Oh Yeah! You've saved the planet, play again to improve your score!"
      }
      else if (this.score >= 625 && this.score <= 749) {
        return 'You made great choices! The future looks bright for your Commons.'
      }
      else if (this.score >= 750 && this.score <= 874) {
        return 'Congratulations, you nailed it! Humanity is saved thanks to you!'
      }
      return "Amazing, you win! You've clearly been doing your homework!"
    },
    display() {
      return {
        good: {
          title: this.title,
          subtitle: this.name
            ? `You made a High Score, ${this.name}!`
            : 'You made a High Score!',
          image: require('@/assets/outcome_good.jpeg'),
        },
        bad: {
          title: this.title,
          subtitle: 'Your score',
          image: require('@/assets/outcome_bad.jpeg'),
        },
      }[this.future]
    },
  },
}
</script>

<style scoped lang="scss">
ul {
  list-style: none; 
}

ul li::before {
  content: "\2022";  
  color: #EAFAEA; 
  font-weight: bold; 
  display: inline-block; 
  width: 1em; 
  margin-left: -1em; 
}
.level-text, ul {
  text-align: left !important;
}
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
      width: 100%;
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
  @extend .teko-subtitle;
  margin-top: 1rem;
  @include s {
    margin-top: 3rem;
  }
}
.x-score {
  @extend .font-teko;
  font-size: 64px;
  span {
    color: #FFF;
    font-size: 36px;
    @include l {
      color: #4D4D4D;
    }
  }
}
.x-improve {
  font-size: 16px;
  margin-bottom: 1rem;
}
.x-text {
  font-size: 16px;
}
.credits {
  @include m {
    position: fixed;
    bottom: 0;
    right: 0;
  }
}
</style>
