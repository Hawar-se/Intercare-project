<template>

    <div class="reviews">

  <div class="review-header">
      <i class=" review-header__ico fa fa-chevron-left"></i>
            <router-link to="/" class="review-header__link">Back</router-link>

            <div class="btn>">
              <select name="" id="" class="btn__filter">
                <option value="recent">Most recent</option>
                <option value="rated">Highest rated</option>
            </select>

            </div>
  </div>
  <h2 class="reviews__header">All reviews for this location</h2>

            <div class="review-list">
                <Review v-for="review in pageArray" :reviewData="review" :key="review.id"/>
            <!-- <img class="review-list__img" src="@/assets/img/pic.png"/>
            <div class="review-list__comment">
            <h1 class="review-list__name">{{review.name}}
               <i class=" review-list__ico fas fa-star"></i>
               <i class=" review-list__ico fas fa-star"></i>
               <i class=" review-list__ico fas fa-star"></i>
               <i class=" review-list__ico fas fa-star"></i>
               <i class=" review-list__ico fas fa-star"></i>

            </h1>
            <p class="review-list__text">{{review.text}}</p>

                 <span class="review-list__num">22 People find this helpful</span>
            </div>
           
             <div class="comment">
              <button class="comment__help"> <i class=" comment__ico far fa-smile"></i>Helpful</button>
              <button class="comment__re">Report abuse</button>
            </div> -->
             </div>

 <div class="pagination">
                <button class="pagination__prev pagination--btn" @click="prev">&#10094;</button>
                <button class="pagination__num pagination--btn" v-for="i in pages" :key="i" @click="selectPage($event)">{{i}}</button>
                <button class="pagination__next pagination--btn" @click="next">&#10095;</button>
            </div>
          
           
</div>


</template>
<script>
import Review from '@/components/Review';
export default {
    components: {
        Review
    },
    data() {
        return {
            reviews: [],
            //testArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            pageArray: [],
            currentPage: 1,
            pages: 0
        }
    },
    methods: {
        generatereviews() {
            let i;
            let t = this.reviews;
            for (i = 1; i <= 12; i++){
                let x = {id: i, author: 'Hawar A. A.' + i, text: 'Lorem Ipsum is simply dummy text'};
                t.push(x);
            }
        },
        setMaxPages(){
            // return array.slice((3 - 1) * 4, 3 * 4);
            this.pages = Math.ceil(this.reviews.length / 4);
        },
        setPaginationList(){
            let first = ((this.currentPage - 1) * 4);
            let last = first + 4;

            this.pageArray = this.reviews.slice(first, last);            
        },
        next(){
            let p = this.currentPage += 1;            
            if (p > this.pages) {
                this.currentPage = this.pages;
                this.setPaginationList();
                this.checkActivePage();
            } else {
                this.setPaginationList();                
                this.checkActivePage();
            }
            /* this.currentPage += 1;
            this.setPaginationList();  
            this.checkActivePage();  */      
        },
        prev(){
            let p = this.currentPage -= 1;            
            if (p < 1) {
                this.currentPage = 1;
                this.setPaginationList();
                this.checkActivePage();
            } else {
                this.setPaginationList();
                this.checkActivePage();
            }
            /* this.currentPage -= 1;
            this.setPaginationList();
            this.checkActivePage(); */    
        },
        checkActivePage(){
            let btns = document.getElementsByClassName('pagination__num');            
            let p = this.currentPage;
            let i;
            for (i = 1; i <= this.pages; i++) {
                let x = i - 1;
                if (btns[x].innerHTML == p) {
                    btns[x].classList.add('active')
                }
                else if (btns[x].innerHTML != p) {
                    btns[x].classList.remove('active');
                }
            }
        },
        selectPage(event){
            let x = parseInt(event.target.innerHTML);
            this.currentPage = x;
            this.setPaginationList();
            this.checkActivePage();
        },
        getAddedReview() {
            let r = sessionStorage.getItem("addedReview");
            if ("addedReview" in sessionStorage) {
                let x = {id: 13, author: "Abbey Edwards", text: r};
                this.reviews.unshift(x);
            }
        }
    },
    created() {
        this.generatereviews();
        this.setMaxPages();
        this.getAddedReview();
    },
    mounted() {
        /* let x = this.paginateArray(this.testArray);
        console.log(x); */
        this.setPaginationList();
        this.checkActivePage();
        
    }
}
</script>
<style lang="scss" scoped>


.btn{
    display: flex;
    width: 100%;

&__filter{
      width: 10em;
    float: right;
    height: 3em;
    margin: -2em 0 0 0;
    cursor: pointer;
    padding-left: 0.2em;
}
}
.review-header{

    &__link{
    font-size:18px;
    margin: 0 0 0 1em;
    color:#4bb3fe;
    cursor: pointer;
  }

&__ico{
    color: #4bb3fe;
    margin: 1em 0 0 1em;
    font-size: 18px;
}
}
.reviews{
    font-family: $font-roboto;
    padding:2em;
    &__header {
        margin-top: 2em;
    }
}

.review-list{
    //display:flex;
     margin: 3em 0;


  &__img{
    height: 5em;
    width: 5em;
    margin: 1em 2em 0 0;
    border: 1px solid gray;
    border-radius: 56%   
     }

&__comment{
margin:0.5em 0 2em 0;
}

  &__name{
    font-size:0.7em;
    }

    &__ico{
      color:#EED602;
    }
  &__text{
      font-size:0.7em;
  }

  &__num{
      font-size:0.7em;
  }
}
.aside{
    margin: 7.3em 0 0 56em;
    float: right;
    position: absolute;

  &__content{
    border: 0.1px solid lightgray;
    border-radius: 3%;

  }

  &__btn{
    height: 3em;
    width: 24em;
    margin: 2em 0 0 0;
    border: 0.1px solid black;
    background-color:white;
    border-radius: 3%;
  }

  &__logo{
   height: 14em;
    width: 14em;
    padding: 0 3em;
  }

  &__name{ 
    font-size: 1.3em;
    font-weight: 900;
    text-align: center;
    color: black;
    }
    &__ico{
    color: #EED602;
    font-size: 2em;
}
}

.pro{
  text-align: center;
      padding: 2em;

  &__btn{
    display: inline;
    padding: 0.3em;
    margin: 0 0 0.5em 2em;
    background-color: white;
    border: 1px solid lightgray;

    }

}

.comment{
    position: absolute;
    margin:5.5em 0 0 6.5em;


&__help{
    margin-right: 2em;
        font-size: 0.7em;
    text-decoration: none;
    background: transparent;
    border: none;

    }


  &__re{
    margin: 0 2em 3em 0;
    text-decoration: none;
    background: transparent;
    border: none;
        font-size: 0.7em;
    padding-left: 2em;
    border-left: 2px solid black;
    }
    &__ico{
    padding-right: 0.5em;
        cursor: pointer;
            font-size: 1.2em;


    }
}
.pagination {
    text-align: center;
    &--btn {
        height: 2.5em;
        width: 2.5em;
        border-radius: 50%;
        border: solid 1px black;
        outline: none;
        margin: auto 0.3em auto 0.3em;
        cursor: pointer;
    }
}
.active {
    
    background-color: highlight;
    color: white;
}
</style>