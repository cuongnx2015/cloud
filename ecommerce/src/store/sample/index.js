import sampleMutations from './mutation.js';
import sampleGetters from './getter.js';
import sampleActions from './actions.js';

export default {
    namespaced: true,
    state: () => ({
        testA: 0,
        countA: 0,
        countB: 1,
    }),
    mutations: sampleMutations,
    actions: sampleActions,
    getters: sampleGetters
};
