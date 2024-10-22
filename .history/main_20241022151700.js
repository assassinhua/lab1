const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots are s nice')
        return {
            product
        }
    }
  
}).mount('#app')





