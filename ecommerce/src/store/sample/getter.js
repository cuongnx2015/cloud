export default {
    testGetterCongThemMuoi(state) {
        console.log("Bên trong của getter:  " + state.countA);
        //return state.countA + 10; cái này chỉ có cộng thêm thôi chứ không thay đổi state
        return (state.countA = state.countA + 10);
    },
}