const { createApp, ref, computed } = Vue

const app = createApp({
    setup(){
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
        return {
            cart,
            premium,
            updateCart
        }
    }


})   

app.component('product-display', productDisplay)

app.mount('#app')






