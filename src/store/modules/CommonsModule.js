import { CommonsService } from '../../services/CommonsService'
import { createModule } from '../store.utils'

const simulationDefaults = {
  kappa: Number(process.env.VUE_APP_SIM_KAPPA ?? 3),
  vesting_80p_unlocked: Number(process.env.VUE_APP_SIM_VESTING_80P_UNLOCKED ?? 60),
  timesteps_days: Number(process.env.VUE_APP_SIM_TIMESTEPS_DAYS ?? 90),
}

export const CommonsModule = createModule({
  state: {
    conviction: {
      halfLife: 0.8,
      inflectionPoint: 0.99,
    },
    form: {
      foundingMembers: 30,
      proposals: 3,
      funding: 40,
      votingPower: 50,
      decisions: 10,
      exiting: 25,
    },
    minmax: {
      foundingMembers: { min: 3, max: 150 },
      proposals: { min: 1, max: 50 },
      funding: { min: 1, max: 99 },
      votingPower: { min: 5, max: 50 },
      decisions: { min: 3, max: 120 },
      exiting: { min: 1, max: 80 },
    },
    outcome: {
      input: {},
      result: { data: [] },
    },
    response: null,
  },
  getters: {
    formData: state => ({
      hatchers: state.form.foundingMembers,
      proposals: state.form.proposals,
      hatch_tribute: state.form.funding / 100,
      exit_tribute: state.form.exiting / 100,
      days_to_80p_of_max_voting_weight: state.form.decisions,
      max_proposal_request: state.form.votingPower / 100,
      ...simulationDefaults,
    }),
  },
  actions: {
    fetch: ({ commit, getters }) =>
      new Promise((resolve, reject) => {
        CommonsService.fetch(getters.formData)
          .then(x => {
            resolve(x)
            commit('setOutcomeInput', getters.formData)
            commit('setOutcomeResult', x)
          })
          .catch(reject)
      }),
    runSimulation: ({ dispatch }) => {
      const timer = new Promise(resolve => setTimeout(() => resolve(true), 2500))
      return Promise.all([timer, dispatch('fetch')])
        .then(() => {
          dispatch('NotificationModule/success', 'Simulation finished')
          this.$router.push('/results')
        })
        .catch(() => {
          dispatch('NotificationModule/error', 'Simulation failed')
          this.$router.push('/level/7/1')
        })
    },
  },
})
