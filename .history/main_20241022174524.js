const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots are  nice')
        

        const image = ref('./assets/images/socks_green.jpg')
      const inStock = ref(true)
        const inventory  = ref(100)
        return {
            product,
            image,
            inStock,
            inventory
        }
}
       
                    const variants = ref([
                                    { id: 2234, color: 'green' },
                                    { id: 2235, color: 'blue' }
                                ])
                        
            
        
    }
  
}).mount('#app')





