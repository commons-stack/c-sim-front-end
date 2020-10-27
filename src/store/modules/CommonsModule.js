import { CommonsService } from '../../services/CommonsService'
import { createModule } from '../store.utils'

export const CommonsModule = createModule({
  state: {
    foundingMembers: 30,
    proposals: undefined,
    funding: 50,
    votingPower: 30,
    decisions: 90,
    exiting: 8,
    response: null,
  },
  actions: {
    fetch: ({ commit }, data) =>
      new Promise((resolve, reject) => {
        CommonsService.fetch(data)
          .then(x => {
            resolve(x)
            commit('setResponse', x)
          })
          .catch(reject)
      }),
  },
})

// curl 'http://game.commonsstack.org/api/cadcad' \
//  -H 'Accept: application/json' \
//  -H 'Content-Type: application/json' \
//  --data-binary '{"hatchers":"30","proposals":"3","hatch_tribute":"0.4","vesting_80p_unlocked":"60","exit_tribute":"0.25","kappa":"3","days_to_80p_of_max_voting_weight":"120","proposal_max_size":"0.5"}' \
//  --compressed

// hatchers":"30" // lvl1 - foundingMembers
// "proposals":"3" // lvl2 - proposals
// "hatch_tribute":"0.4" // lvl3 - funding
// "vesting_80p_unlocked":"60" //
// "exit_tribute":"0.25" // lvl6 - exiting
// "kappa":"3" //
// "days_to_80p_of_max_voting_weight":"120" // lvl5 - decisions
// "proposal_max_size":"0.5" // lvl4 - votingPower
