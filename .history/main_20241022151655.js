const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots is nice')
        return {
            product
        }
    }
  
}).mount('#app')





