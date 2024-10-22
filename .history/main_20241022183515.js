const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots are  nice')
        

        const image = ref('./assets/images/socks_green.jpg')
       const inStock = ref(true)
        const inventory  = ref(100)
        const details = ref([
                       '50% cotton',
                       '30% wool',
                       '20% polyester'
                   ])
            
        const OnSale = ref(true)
        return {
            product,
            image,
            inStock,
            inventory,
            OnSale,
            details
        }
}
                   
            
        
    }
  
).mount('#app')





