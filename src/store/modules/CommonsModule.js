import { createModule } from '../store.utils'

export const CommonsModule = createModule({
  state: {
    foundingMembers: 30,
    proposals: undefined,
    funding: 50,
    votingPower: 30,
    decisions: undefined,
    exiting: 8,
  },
})
