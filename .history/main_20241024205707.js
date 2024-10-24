const { createApp, ref, computed } = Vue

const app = createApp({
    setup() {
      const premium = ref(true)
        const product = ref('Boots')
        const brand = ref('SE 331')
        const productUrl = 'http://www.camt.cmu.ac.th'
        const inventory = ref(5)
        const onSale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
        ])
        const selectedVariant = ref(0)
        const productSizes = ref([
            { id: 1, size: 'S' },
            { id: 2, size: 'M' },
            { id: 3, size: 'L' },
        ])
        const cart = ref(0)
        function addToCart() {
            cart.value += 1
        }
        const title = computed(() => {
            return brand.value + ' ' + product.value
        })
        const isOnSale = computed(() => {
            return brand.value + ' ' + product.value + ' ' + 'is on sale'
        })
        function updateCart(id) {
                     cart.value.push(id)
          
                  }
          
        function updateImage(variantImage) {
            image.value = variantImage
        }
        function updateVariant(index) {
            selectedVariant.value = index;
        }
        const image = computed(() => {
            return variants.value[selectedVariant.value].image
        })
        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity
        })
        const toggleInStock = () => {
            const currentVariant = variants.value[selectedVariant.value];
            currentVariant.quantity = currentVariant.quantity > 0 ? 0 : 50;
        }
        const reviews = ref([]);  
  
        // 假设我们有一个表单对象来存储用户的输入  
        const form = ref({  
            name: '',  
            review: '',  
            rating: 5,  
        });  
  
        // 提交表单的函数  
        const handleSubmit = (event) => {  
            event.preventDefault();  
            const recommend = prompt('Would you recommend this product? (yes/no)');  
            reviews.value.push({  
                name: form.value.name,  
                review: form.value.review,  
                rating: form.value.rating,  
                recommend: recommend.toLowerCase() === 'yes',  
            });  
            // 重置表单  
            form.value = { name: '', review: '', rating: 5 };  
        }  
        return {
            product,
            brand,
            title,
            isOnSale,
            image,
            productUrl,
            inStock,
            inventory,
            onSale,
            details,
            variants,
            selectedVariant,
            productSizes,
            cart,
            form,
            premium,  
            handleSubmit, // 将提交表单的函数暴露给模板  
            reviews,
            addToCart,
            updateImage,
            toggleInStock,
            updateVariant,
            updateCart

        }
    }

})

app.component('product-display', productDisplay)







