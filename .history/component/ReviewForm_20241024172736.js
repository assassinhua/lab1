import { reactive, toRefs, defineEmits } from 'vue';  
  
const reviewForm = {  
  template: /*html*/ `  
    <form class="review-form" @submit.prevent="onSubmit">  
      <h3>Leave a review</h3>  
      <label for="name">Name:</label>  
      <input id="name" v-model="name">  
  
      <label for="review">Review:</label>      
      <textarea id="review" v-model="review"></textarea>  
  
      <label for="rating">Rating:</label>  
      <select id="rating" v-model.number="rating">  
        <option value="5">5</option>  
        <option value="4">4</option>  
        <option value="3">3</option>  
        <option value="2">2</option>  
        <option value="1">1</option>  
      </select>  
  
      <input class="button" type="submit" value="Submit">  
    </form>  
  `,  
  setup() {  
    const form = reactive({  
      name: '',  
      review: '',  
      rating: null  
    });  
  
    const emit = defineEmits(['review-submitted']);  
  
    function onSubmit() {  
      if (form.name === '' || form.review === '' || form.rating === null) {  
        alert('Review is incomplete. Please fill out every field.');  
        return;  
      }  
  
      const productReview = {  
        name: form.name,  
        review: form.review,  
        rating: form.rating  
      };  
  
      emit('review-submitted', productReview);  
  
      // 重置表单  
      form.name = '';  
      form.review = '';  
      form.rating = null;  
    }  
  
    // 使用 toRefs 将 form 的属性转换为响应式引用，并返回它们  
    return {  
      ...toRefs(form) // 这将返回 { name, review, rating } 作为响应式引用  
    };  
  }  
};  
  
export default reviewForm;