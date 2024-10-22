const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots is')
        return {
            product
        }
    }
  
}).mount('#app')





