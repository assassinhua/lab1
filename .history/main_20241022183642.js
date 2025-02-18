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
        const variants = ref([
                       { id: 2234, color: 'green' },
                       { id: 2235, color: 'blue' }
                   ])
            
        return {
            product,
            image,
            inStock,
            inventory,
            OnSale,
            details,
            
        }
}
                   
            
        
    }
  
).mount('#app')





