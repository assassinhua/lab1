const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots are  nice')
        

        const image = ref('./assets/images/socks_green.jpg')
       const inStock = ref(true)
        const inventory  = ref(100)
        const inStock = ref(true)
        return {
            product,
            image,
            inStock,
            inventory
        }
}
                   
            
        
    }
  
).mount('#app')





