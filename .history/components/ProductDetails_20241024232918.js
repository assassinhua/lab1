const { createVNode } = Vue
const productDetails = {
    props: {
        details: {
            type: Array,
        }
    },
    template: 
    /*html*/
    `
        <div class="product-details">
        <ul>
          <li v-for="(detail, index) in details" :key="index">{{ detail }}</li>
        </ul>
        </div>
    `
   
}