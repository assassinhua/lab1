const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots are  nice')
        const image = ref('./assets/images/socks_green.jpg')
        const productLink = ref('https://www.camt.cmu.ac.th');
        const inStock = ref(true)
        const inventory  = ref(100)
        const details = ref([
                        '50% cotton',
                        '30% wool',
                        '20% polyester'
                    ])
                    const variants = ref([
                        +            { id: 2234, color: 'green' },
                        +            { id: 2235, color: 'blue' }
                        +        ])
                        
            
        const onSale = ref(true)
        return {
            product,
            image,
            inStock,
            inventory,
            productLink,
            details
        };
    }
  
}).mount('#app')





