<template>
<div class="review-box">
    <div class="review-content">
            <img class="review-content__img" src="@/assets/img/pic.png"/>
            <div class="review-content__comment">
            <h1 class="review-content__name">{{review.author}}
               <i class=" review-content__ico fas fa-star"></i>
               <i class=" review-content__ico fas fa-star"></i>
               <i class=" review-content__ico fas fa-star"></i>
               <i class=" review-content__ico fas fa-star"></i>
               <i class=" review-content__ico fas fa-star"></i>

            </h1>
        <p class="review-content__text">{{review.text}}</p>
        <p class="review-content__rating">{{rating}} people found this helpful</p>
        </div>
    </div>
    <div class="review-options">
        <button class="review-options__help" @click="rateReview" :disabled="reviewRated"><i class=" review-options__ico far fa-smile"></i> Helpful</button>
        <button class="review-options__re">Report abuse</button>
    </div>
</div>
</template>
<script>
export default {
    props: {
        reviewData: Object
    },
    data() {
        return {
            review: this.reviewData,
            reviewRated: false,
            rating: 0
        }
    },
    methods: {
        rateReview() {
            this.rating += 1;
            this.reviewRated = true;
        }
    }
}
</script>
<style lang="scss">
.review-box {
    margin-bottom: 1em;
}
.review-content{
      display:flex;


  &__img{
    height: 5em;
    width: 5em;
    margin: 1em 2em 0 0;
    border: 1px solid gray;
    border-radius: 56%    }
&__comment{
  margin-top: 0.5em;
}
  &__name{
    font-size:1em;
    }

    &__ico{
      color:#EED602;
    }
  &__text{font-size:16px;}
  &__rating {
      font-size: 14px;
      color: grey;
  }
}
.review-options{
display: inline-block;
margin: 0.5em 0 0 7em;
&__rating {
    font-size: 12px;
}
&__help{
    margin-right: 2em;
    text-decoration: none;
    background: transparent;
    border: none;
    color:green;
    cursor: pointer;
    }


  &__re{
    margin-right: 2em;
    text-decoration: none;
    background: transparent;
    border: none;
    color: red;
    padding-left: 2em;
    border-left: 2px solid black;
    cursor: pointer;
    }
    &__ico{
    padding-right: 0.5em;
    }
}
</style>