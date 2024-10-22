const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots are  nice')
        

        const image = ref('./assets/images/socks_green.jpg')
       const inStock = ref(true)
        const inventory  = ref(100)
        const OnSale = ref(true)
        const details = ref([
                       '50% cotton',
                       '30% wool',
                       '20% polyester',
                       
                   ])
            
        const sizes = ref([
                       'S,M,L for size',
        ])
        const variants = ref([
                       { id: 2234, color: 'green' },
                       { id: 2235, color: 'blue' }
                   ])
                   const cart = ref(0)
                   function addToCart() {
                                cart.value +=1
                            }
                    
        return {
            product,
            image,
            inStock,
            inventory,
            OnSale,
            details,
            variants,
            sizes,
            
        }
}
                   
            
        
    }
  
).mount('#app')





