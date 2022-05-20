export default {
    ccc(state) {
        state.testA = state.testA + 1;
    },

    incrementKhongPayLoad(state) {
        console.log("incrementKhongPayLoad")
        state.countA = state.countA + 2;
    },
    increment(state, payload) {
        console.log("increment")
        state.countA = state.countA + payload.value;
    },
    incrementB(state, payload) {
        console.log("incrementB")
        state.countB = state.countB + payload.value;
    },
};