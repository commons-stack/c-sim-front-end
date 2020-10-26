<template>
  <div class="layout-vertical relative">
    <icon icon="CircleNet" class="bg-net" />
    <form-navigation @help="$refs.modal.show()" @restart="() => {}" :help="false" />
    <p text-xl text-center>Inputs Received by cadCAD!</p>
    <p text-center>
      Will the Commons succeed, the Movement take off, and new economy creation cascade around the
      world?
    </p>
    <div class="layout-form">
      <form-progress style="grid-area: nav;" />
      <flex class="text-center flex-center" style="grid-area: field;">
        <grid class="sim-data">
          <div>
            <p>{{ $store.state.CommonsModule.foundingMembers }}</p>
            <p>FOUNDING MEMBERS</p>
          </div>
          <div>
            <p>{{ $store.state.CommonsModule.proposals }}</p>
            <p>PROPOSALS</p>
          </div>
          <div>
            <p>{{ $store.state.CommonsModule.funding }}</p>
            <p>FUNDING</p>
          </div>
          <div>
            <p>{{ $store.state.CommonsModule.votingPower }}</p>
            <p>VOTING POWER</p>
          </div>
          <div>
            <p>{{ $store.state.CommonsModule.decisions }}</p>
            <p>DECISITONS</p>
          </div>
          <div>
            <p>{{ $store.state.CommonsModule.exiting }}</p>
            <p>EXITING</p>
          </div>
        </grid>
      </flex>
    </div>

    <button @click="$router.push('/submit')">run simulation</button>

    <modal ref="modal" bg="" overlay="dark">
      <div class="layout-modal">
        <h2 class="level-title">Exit Tribute</h2>
        <p class="level-text mt-1">
          Members choose to pass good proposals that produce valuable outcomes for the community.
          They contribute time and resources in exchange for their governance tokens. They continue
          to grow the Commons and raise the price of the token.
        </p>
        <p class="level-text">
          Some members may not like the results of the proposals passed by the RadicalxChange
          Commons, or may need to sell some of their tokens to cover their expenses. When they sell
          their RxC token, the overall price of the token decreases as value is being withdrawn from
          the community. At the same time, a portion of the withdrawal (5%, for example) feeds into
          the community funding pool, as an ‘exit tribute’ to the RadicalxChange community. This
          protects the Commons from profit-extracting behaviour, and ensures continuous funding for
          the community pool of funds that can be put towards proposals.
        </p>
        <p class="level-text">
          What percentage of the released Reserve goes to the Funding Pool when an exiting member
          sells their tokens, and how much of the value remains for the contributor to receive?
        </p>
        <button class="mt-2" @click="$refs.modal.hide()">OK</button>
      </div>
    </modal>
  </div>
</template>

<script>
import FormNavigation from '../../components/common/FormNavigation.vue'
import FormProgress from '../../components/common/FormProgress.vue'

export default {
  name: 'level-6-1',
  components: {
    FormNavigation,
    FormProgress,
  },
  props: {},
  methods: {},
}
</script>

<style scoped lang="scss">
.bg-net {
  position: fixed;
  bottom: -200px;
  left: 0;
  @include l {
    bottom: -100px;
  }
  @include xl {
    bottom: 0;
  }
}
.layout-form {
  grid-template-areas: 'nav field field';
  @include m {
    grid-template-areas: 'nav field nothing';
  }
}
.sim-data {
  @include s {
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(3, auto);
    justify-self: flex-end;
  }
  @include m {
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(2, auto);
  }
  gap: 1rem;
  & > div {
    border: 2px solid #143b5f;
    height: 70px;
    width: 120px;
    @include s {
      width: 130px;
      height: 90px;
    }
    display: grid;
    justify-items: center;
    align-content: center;
    padding: 10px;
    & > * {
      &:first-child {
        font-size: 18px;
        @include s {
          font-size: 22px;
        }
      }
      &:last-child {
        font-size: 12px;
      }
    }
  }
}
</style>
