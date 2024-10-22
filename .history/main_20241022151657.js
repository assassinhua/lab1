const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots as nice')
        return {
            product
        }
    }
  
}).mount('#app')





