export default {
    dispatchLocation (ctx,location){
        ctx.commit('commitLocation',location)
    },
    dispatchScope (ctx,scope){
        ctx.commit('commitScope',scope)
    },
    dispatchTabActive (ctx,tabActive){
        ctx.commit('commitTabActive',tabActive)
    }
}