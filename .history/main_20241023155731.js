const { createApp, ref, computed } = Vue
//const { createApp, ref, computed } = Vue

const app = createApp({
    setup(){
        //const product = ref('Boots')
        //const brand = ref('SE 331')
        //const image = computed(() => {
                       //return variants.value[selectedVariant.value].image
                   //})
            
        //const image = ref('./assets/images/socks_green.jpg')
        //const product1 = ref('they are used for wearing')
       // const url = ref('https://www.camt.cmu.ac.th')
        //const inStock = computed(() => {
                       //return variants.value[selectedVariant.value].quantity
                  // })
            
       // const inStock = ref(true)
       //const onSale=ref(true)
       //const inventory  = ref(8)
        //const details = ref([
                        //'50% cotton',
                       // '30% wool',
                       // '20% polyester',
                       // 'S',
                       // 'M',
                       // 'L'
                   // ])
      //  const variants = ref([
           // { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                      // { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
                 // ])
                   //const selectedVariant = ref(0)
            
                   const cart = ref([])
              const premium = ref(true)
              function updateCart(id) {
              
                const index = cart.value.findIndex(item => item.id === id);
                if (index > -1) {
                  
                  cart.value[index].quantity += 1;
                } else {
                  
                  cart.value.push({ id, quantity: 1 });
                }
              }
                
  const handleRemoveFromCart = (id) => {
   
    const index = cart.value.findIndex(item => item.id === id);
    if (index > -1) {
      if (cart.value[index].quantity > 1) {
        cart.value[index].quantity -= 1;
      } else {
        cart.value.splice(index, 1);
      }
    }
}
        //function addToCart() {
                    // cart.value +=1
                   // }
        
       // function updateImage(variantImage){
              //image.value = variantImage
           // }
            //function updateVariant(index){
                      //    selectedVariant.value = index;
                     // }
                
                      
       // const title = computed(() =>{
                          // return brand.value + ' ' + product.value
                      // })
                       //const saleMessage = computed(() => {
                        //return onSale.value ? `${brand.value} ${product.value} is on sale` : '';
                      //});
//const imageStyle = computed(() => {
    //return inStock.value ? {} : { filter: 'grayscale(100%)' };
  //});
        return {
            //title,
            //product1,
           // image,
           // url,
            //inStock,
            //inventory,
           // details,
            //variants,
            cart,
            premium,
            handleRemoveFromCart,
            updateCart
            //addToCart,
            //updateImage,
            //selectedVariant,
            //updateVariant,
           // onSale,
            //saleMessage,
            //imageStyle
            
        }
    }
  
})
app.component('product-display', productDisplay)
app.component('review-form',reviewForm)
app.component('review-list',reviewList)
app.mount('#app')







