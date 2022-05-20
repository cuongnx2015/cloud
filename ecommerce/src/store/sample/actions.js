export default {
    increment(context, payload) {
        setTimeout(function () {
            context.commit("increment", payload);
        }, 2000);
    },
    incrementB(context, payload) {
        console.log(context);
        setTimeout(function () {
            context.commit("incrementB", payload);
        }, 2000);
    },
}