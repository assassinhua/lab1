const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots are  nice')
        return {
            product
        }
    }
  
}).mount('#app')





