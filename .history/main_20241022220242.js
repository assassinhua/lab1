const { createApp, ref, computed } = Vue

const app = createApp({
    setup(){
        const cart = ref(0)
        const premium = ref(true)
        return {
            cart,
            p
        }
    }


})   

app.component('product-display', productDisplay)

app.mount('#app')






