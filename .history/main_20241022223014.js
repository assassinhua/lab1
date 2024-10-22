const { createApp, ref, computed } = Vue

const app = createApp({
    setup(){
        const cart = ref(0)
        const premium = ref(true)
        const details = ref(true)
        return {
            cart,
            premium,
            detailss
        }
    }


})   

app.component('product-display', productDisplay)
app.component('product-detailss', productDisplay)
app.mount('#app')






