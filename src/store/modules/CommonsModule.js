import { CommonsService } from '../../services/CommonsService'
import { createModule } from '../store.utils'

const simulationDefaults = {
  kappa: Number(process.env.VUE_APP_SIM_KAPPA ?? 3),
  vesting_80p_unlocked: Number(process.env.VUE_APP_SIM_VESTING_80P_UNLOCKED ?? 60),
}

export const CommonsModule = createModule({
  state: {
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
      decisions: { min: 1, max: 120 },
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
      proposal_max_size: state.form.votingPower / 100,
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

// curl 'http://game.commonsstack.org/api/cadcad' \
//  -H 'Accept: application/json' \
//  -H 'Content-Type: application/json' \
//  --data-binary '{"hatchers":"30","proposals":"3","hatch_tribute":"0.4","vesting_80p_unlocked":"60","exit_tribute":"0.25","kappa":"3","days_to_80p_of_max_voting_weight":"120","proposal_max_size":"0.5"}' \
//  --compressed

// hatchers":"30" // lvl1 - foundingMembers // 3 - 150
// "proposals":"3" // lvl2 - proposals // 1 - 50
// "hatch_tribute":"0.4" // lvl3 - funding // 1% - 99%
// "vesting_80p_unlocked":"120" //
// "exit_tribute":"0.25" // lvl6 - exiting // 0.1% - 80%
// "kappa":"2" //
// "days_to_80p_of_max_voting_weight":"120" // lvl5 - decisions // 1 - 60
// "max_proposal_request":"0.5" // lvl4 - votingPower // %5 - 50%
