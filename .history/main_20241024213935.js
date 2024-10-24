const { createApp, ref, computed, reactive, toRefs } = Vue
const app = createApp({
    setup() {
        const cart = reactive([])
        const premium = ref(false)

        function updateCart(id) {
            const itemIndex = cart.findIndex(item => item.id === id)
            if (itemIndex === -1) {

                cart.push({ id, quantity: 1 })
            } else {

                cart[itemIndex].quantity++
            }
        }


        function removeFromCart(id) {
            const itemIndex = cart.findIndex(item => item.id === id)
            if (itemIndex !== -1) {
                if (cart[itemIndex].quantity > 1) {

                    cart[itemIndex].quantity--
                } else {

                    cart.splice(itemIndex, 1)
                }
            }
        }

        return {
            cart,
            premium,
            updateCart,
            removeFromCart

        }
    }
})

app.component('product-display', productDisplay)
app.component('review-form', reviewForm)
app.component('review-list', reviewList)
app.mount('#app')






