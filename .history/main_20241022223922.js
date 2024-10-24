const { createApp, ref, computed } = Vue

const app = createApp({
    setup(){
        const cart = ref(0)
        const premium = ref(true)
        const details = ref(true)
        function updateCart() {
            +            cart.value += 1
            +        }
            
        return {
            cart,
            premium,
            details
        }
    }


})   

app.component('product-display', productDisplay)
app.component('product-details', productDisplay)
app.mount('#app')






