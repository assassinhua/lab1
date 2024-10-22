const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots are  nice')
        const image = ref('./assets/images/socks_green.jpg')
        const productLink = ref('https://www.camt.cmu.ac.th');
        const inStock = ref(true)
        return {
            product,
            image,
            inS
            productLink
        };
    }
  
}).mount('#app')





