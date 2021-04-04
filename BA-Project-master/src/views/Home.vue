<template>
  <div class="marketplace">

   <div class="topnav">
  <router-link to="/" class="topnav__a">Home</router-link>
  <router-link to="/" class="topnav__a">Procedures</router-link>
  <router-link to="/" class="topnav__a">Contact</router-link>
</div>

<aside class="aside">
  <div class="aside__content">
  <img class="aside__logo" src="@/assets/img/logo1.png">
  <h1 class="aside__name">Printzlau Clinic</h1>
    <hr class="aside__hr">
    <div class="pro"> Skin cancer procedure    </div>
<div class="pro__box">
      <button class="pro__btn">Radiation therapy</button>
      <button class="pro__btn">Photodynamic therapy</button>
      <br>
      <button class="pro__btn">Chemotherapy</button>
      <button class="pro__btn">Biological therapy</button>
</div>


  </div>

  <router-link to="/favorite" class="aside__link">
   <i class=" aside__ico fas fa-heart"></i>Add to Favorites</router-link>

</aside>

<div class="content" >
  <router-link to="/" class="content__h2"> <i class="content__ico fa fa-angle-left"> </i> Skin cancer </router-link>
  
  <a class="content__back-link"> </a>
    <img class="content__img" src="@/assets/img/loc.png" />
    <h1 class="content__h1">Overview</h1>
    <p class="content__overview">Printzlau Clinic is a modern private hospital that specializes in plastic surgery
       and is ISO: 9001 accredited. The clinic is 2,200 m2 in size and is fitted with 5 treatment rooms, and a laboratory.
      Printzlau Clinic specializes in treating international patients and provides a variety of convenient services 
      including free WiFi, interpreter services, airport pick-up and drop-off, and assistance with flight, hotel, and
      local activity booking. The clinic is partnered with a number of local hotels and apartments within the vicinity
       and can provide all-inclusive package deals.

One of Printzlau Clinic Virum's most popular package deals is the free consultation package, which includes a
 one-night stay in one of the clinic's partnered hotels, a free consultation, free X-ray, and free airport 
 transfers. They also offer reimbursements for flights, up to €180, for patients receiving treatments worth
  €4,000 or more. For more information, send a free inquiry.

</p>
<h1 class="content__h1">Location</h1>
      <p class="content__loc">Virum Clinic Odense is located 22 km away from the airport, and can be reached via 
        taxi or public  transport. The nearest metro station is, which has both regional and international 
        connections and is just 2 kilometers from the clinic. Local transport connects the clinic to the rest of
         Virum, with metro, tram, and bus services within walking distance from the clinic.The clinic is located 
         in the middle of the city, with plenty of sights to see such as Virum house located less than2 km from the clinic.
        The famous Munke Mose is located 5 km from the clinic, which offers a beautiful view of the city, where the town 
       hall Building can be seen and the famous Chain Bridge.

</p>
<hr>
<div class="reviews">
  <div class="review-header">
            <h2 class="review-header__title">Top Reviews</h2>
            <router-link to="/reviews" class= "review-header__link">See All Reviews</router-link>
  </div>
  <div class="reviews-list">
    <Review v-for="review in reviews" :key="review.id" :reviewData="review"/>
  </div>
            <!-- <div class="review-list">
            <img class="review-list__img" src="@/assets/img/pic.png"/>
            <div class="review-list__comment">
            <h1 class="review-list__name">Niels Mathiesen
               <i class=" review-list__ico fas fa-star"></i>
               <i class=" review-list__ico fas fa-star"></i>
               <i class=" review-list__ico fas fa-star"></i>
               <i class=" review-list__ico fas fa-star"></i>
               <i class=" review-list__ico fas fa-star"></i>

            </h1>
            <p class="review-list__text">From the minute I arrived, I was treated with the utmost empathy, kindness
                and respect… I have nothing but praise for the care I received as a patient at H.C. Andersen Hospital.
                 I cannot believe that I would have been treated with  that same level of care, encouragement, support, 
                 sitive reinforcement, kindness and respect elsewhere.</p>
            </div>
            </div>
             <div class="comment">
              <button class="comment__help"> <i class=" comment__ico far fa-smile"></i>Helpful</button>
              <button class="comment__re">Report abuse</button>
            </div> -->

            <div class="button" @click="openBox">
            <button class="button__add-btn">Add review</button>
            </div>

            <div class="box" id="box-bg" v-if="showBox" @click="closeBox($event)">
             <aside class="aside-box">
               <img class="aside-box__img" src="@/assets/img/pic.png"/>
               <h1 class="aside-box__name">Niels Mathiesen</h1>
             </aside>

             <div class="star" @click="changeColor($event)">
             <i class="star__ico fas fa-star star-checked" id="1" ></i>
             <i class="star__ico fas fa-star unchecked" id="2"></i>
             <i class="star__ico fas fa-star unchecked" id="3"></i>
             <i class="star__ico fas fa-star unchecked" id="4"></i>
             <i class="star__ico fas fa-star unchecked" id="5"></i>

            
             </div>

             <div class="review-text">
               
              <textarea
              class="review-text__input"
            type="text"
            id="text"
            placeholder="Post contents here"
            v-model="reviewText"
            required/>
            <div class="review-text__btns">
              <button class="review-text__cancel" id="close-box">Cancel</button>
              <button class="review-text__add" @click="addReview">Add your review</button>
            </div>
             </div>

            </div>
</div>
</div>



  </div>
</template>

<script>
import Review from '@/components/Review'
export default {
  components: {
    Review
  },
  data(){
    return{
      showBox: false,
      reviews:[],
      reviewText: ''
 }
  },
  methods : {
    generateReviews() {
      let i;
      for (i = 1; i <= 2; i++){
        let x = {id: i, author: "Abbey Edwards", text: "From the minute I arrived, I was treated with the utmost empathy, kindness and respect… I have nothing but praise for the care I received as a patient at H.C. Andersen Hospital. I cannot believe that I would have been treated with that same level of care, encouragement, support, positive reinforcement, kindness and respect elsewhere."};
        this.reviews.push(x);
      }
    },
  openBox(){ 
    this.showBox=true
  },
  closeBox(event){
     let e = event.target.id;
      if (e === 'box-bg' || e === 'close-box') {
      this.showBox=false
      }
  },
  changeColor(event){
      let c = parseInt(event.target.id);
      let stars = c - 1;
      this.selectStars(stars);
    },
    selectStars(num) {
      let i;
      let cls = document.getElementsByClassName("star__ico");
      for (i = 0; i <= cls.length; i++) {
        if (i <= num) {
          cls[i].classList.remove("unchecked");
          cls[i].classList.add("star-checked");
        } else if (i > num) {
          cls[i].classList.remove("star-checked");
          cls[i].classList.add("unchecked");
        }

      }
    },
    addReview() {
      let r = {id: 3, author: "Abbey Edwards", text: this.reviewText};
      this.reviews.unshift(r);
      sessionStorage.setItem("addedReview", this.reviewText);
      this.showBox=false;
      this.reviewText = '';
    }
  },  
  created() {
    this.generateReviews();
  },
}
  

 


</script>
<style lang="scss" scoped>
@include xs-Desktop{
body{
  font-family: $font-roboto;
}
.checked{
  color: #EED602;
}
.unchecked{
  color: lightgray;
}
.marketplace
 {
  // padding-top:2em;
}
.topnav {
  overflow: hidden;
  background-color: #767676;
   width: 100%;
 
&__a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 0.5em 1em;
  text-decoration: none;
  font-size: 1em;
  margin-left: 5em;
&:hover,&:active {
  background-color: #EED602;
  color: white;
}
}
}
.content{
  padding: 2em 6em;
  width: 60%;
  &__back-link{
    color: #4bb3fe;
    padding:1em;
    display:block
  }
  &__h2{
    font-size: 1em;
    color: #4bb3fe;
    text-decoration: none;
  }
&__overview{
     margin: 0 4em 0 0;
    font-size: 0.8em;
}
 &__loc{
       margin: 0 4em 0 0;
    font-size: 0.8em;
 }
  &__ico{
    color: #4bb3fe;
  }
  &__img{
    width: 90%;
    max-height:22em;
    margin-top: 2em;
  }
  &__h1{font-size: 1.3em;
    font-weight: 900;
  }
&__p{
  color: black;
  font-weight: bold;
}
}
.reviews{
}
.review-header{
    display: flex;
    width: 100%;
 &__title{
    font-size:1.7em;
    margin:2em 0 1em 0 ;
  }
  &__link{
    float: right;
    color: #00b570;
    text-decoration: underline;
    margin: 4em 0 0 30em;
    cursor: pointer;
  }
  }
  .review-list{
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
  &__text{font-size:0.7em;}
}
.aside{
    margin: 7em 2em auto auto;
    float: right;
    //position: absolute;
  &__content{
    border: 0.1px solid lightgray;
    border-radius: 3%;
  }
  &__link{
  float: left;
    color: black;
    text-align: center;
    padding: 0.5em 5em;
    text-decoration: none;
    font-size: 1em;
    border: 1px solid;
    cursor: pointer;
    margin: 1em 0em 0 0.5em;
     cursor: pointer;
  }
  &__logo{
   height: 12em;
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
    font-size: 1.7em;
    margin: 1em auto 1em auto;
 &__box{
  margin-bottom: 2em;
  }
  &__btn{
    display: inline;
    padding: 0.3em;
    margin: 0 0 0.5em 2em;
    background-color: white;
    border: 1px solid lightgray;
    }
}
.comment{
display: inline-block;
margin: 1em 0 0 7em;
&__help{
    margin-right: 2em;
    text-decoration: none;
    background: transparent;
    border: none;
    }
  &__re{
    margin-right: 2em;
    text-decoration: none;
    background: transparent;
    border: none;
    padding-left: 2em;
    border-left: 2px solid black;
    }
    &__ico{
    padding-right: 0.5em;
    }
}
.button{
  padding: 2em 0 0 5em;
  &__add-btn{
  padding: 0.6em 2em;
  color: #00b570;
  text-decoration: underline;
  background-color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
  }
}
.filled{
  fill:#EED602;
}
.box{
   border: 1px solid black;
   padding:3em;
   margin-top: 2em;
   display:flex;
}
.star{
    position: absolute;
    margin:1em 0 0 35em;
    &__ico{
      color: lightgray;
         font-size: 1em;
         cursor: pointer;
   }
   &__yellow{
     color: yellow;
      font-size: 1em;
        cursor: pointer;
   }
   &-checked {
     color: #EED602;
   }
   }
  
  .aside-box{
  
  &__img{
    height: 5em;
    width: 5em;
    margin: 1em 2em 0 0;
    border: 1px solid gray;
    border-radius: 56%    
  }
  &__name{
    font-size:0.7em;
  }
}
.review-text{
  &__input{
      height: 11em;
    width: 41em;
    margin: 4em 0 2em 0;
  }
  &__cancel{
    display: inline;
    padding: 0.5em;
    margin: 0 0 0.5em 2em;
    background-color: red;
    color:white;
    border: 1px solid lightgray;
    float: right;
    cursor: pointer;
  }
  &__add{
    display: inline;
    padding: 0.5em;
    margin: 0 0 0.5em 2em;
    color:white;
    background-color:#00b570;
    border: 1px solid lightgray;
    float: right;
    cursor: pointer;
  }
}
}
@include small-desktop{
body{
  font-family: $font-roboto;
}
.checked{
  color: #EED602;
}
.unchecked{
  color: lightgray;
}
.marketplace
 {
  padding-top: 0;
    font-family: $font-roboto;
}
.topnav {
  overflow: hidden;
  background-color: #767676;
   width: 100%;
&__a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 0.5em 1em;
  text-decoration: none;
  font-size: 1em;
  margin-left: 5em;
&:hover,&:active {
  background-color: #EED602;
  color: white;
}
}
}
.content{
  padding: 2em 6em;
  width: 60%;
  &__back-link{
    color: #4bb3fe;
    padding:1em;
    display:block
  }
  &__h2{
    font-size: 1.3em;
    color: #4bb3fe;
    text-decoration: none;
  }
&__overview{
     margin: 0 4em 0 0;
    font-size: 0.8em;
}
 &__loc{
       margin: 0 4em 0 0;
    font-size: 0.8em;
 }
  &__ico{
    color: #4bb3fe;
  }
  &__img{
    width: 90%;
    max-height:22em;
    margin-top: 2em;
  }
  &__h1{font-size: 1.3em;
    font-weight: 900;
  }
&__p{
  color: black;
  font-weight: bold;
}
}
.reviews{
}
.review-header{
    display: flex;
    width: 100%;
 &__title{
    font-size:1.7em;
    margin:2em 0 1em 0 ;
  }
  &__link{
    float: right;
    color: #00b570;
    text-decoration: underline;
    margin: 4em 0 0 30em;
    cursor: pointer;
  }
  }
  .review-list{
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
  &__text{font-size:0.7em;}
}
.aside{
    margin: 7em 4em auto auto;
    float: right;
    //position: absolute;
  &__content{
    border: 0.1px solid lightgray;
    border-radius: 3%;
  }
  &__link{
  float: left;
    color: black;
    text-align: center;
    padding: 0.5em 5em;
    text-decoration: none;
    font-size: 1.3em;
    border: 1px solid;
    cursor: pointer;
    margin: 1em 0 0 0;;
  }
  &__logo{
   height: 12em;
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
 &__box{
  margin-bottom: 2em;
  }
  &__btn{
    display: inline;
    padding: 0.3em;
    margin: 0 0 0.5em 2em;
    background-color: white;
    border: 1px solid lightgray;
    }
}
.comment{
display: inline-block;
margin: 1em 0 0 7em;
&__help{
    margin-right: 2em;
    text-decoration: none;
    background: transparent;
    border: none;
    }
  &__re{
    margin-right: 2em;
    text-decoration: none;
    background: transparent;
    border: none;
    padding-left: 2em;
    border-left: 2px solid black;
    }
    &__ico{
    padding-right: 0.5em;
    }
}
.button{
  padding: 2em 0 0 5em;
  &__add-btn{
  padding: 0.6em 2em;
  color: #00b570;
  text-decoration: underline;
  background-color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
  }
}
.filled{
  fill:#EED602;
}
.box{
   border: 1px solid black;
   padding:3em;
   margin-top: 2em;
   display:flex;
}
.star{
    position: absolute;
    margin:1em 0 0 35em;
    &__ico{
      color: lightgray;
         font-size: 1em;
         cursor: pointer;
   }
   &__yellow{
     color: yellow;
      font-size: 1em;
        cursor: pointer;
   }
   &-checked {
     color: #EED602;
   }
   }
  
  .aside-box{
  
  &__img{
    height: 5em;
    width: 5em;
    margin: 1em 2em 0 0;
    border: 1px solid gray;
    border-radius: 56%    
  }
  &__name{
    font-size:0.7em;
  }
}
.review-text{
  &__input{
      height: 11em;
    width: 41em;
    margin: 4em 0 2em 0;
  }
  &__cancel{
    display: inline;
    padding: 0.5em;
    margin: 0 0 0.5em 2em;
    background-color: red;
    color:white;
    border: 1px solid lightgray;
    float: right;
    cursor: pointer;
  }
  &__add{
    display: inline;
    padding: 0.5em;
    margin: 0 0 0.5em 2em;
    color:white;
    background-color:#00b570;
    border: 1px solid lightgray;
    float: right;
    cursor: pointer;
  }
}
}
@include medium-desktop{
body{
  font-family: $font-roboto;
}
.checked{
  color: #EED602;
}
.unchecked{
  color: lightgray;
}
.marketplace
 {
  // padding-top: 0;
  font-family: $font-roboto;
}
.topnav {
  overflow: hidden;
  background-color: #767676;
   width: 100%;
   height: 4em;
&__a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 1em;
    text-decoration: none;
    font-size: 1.3em;
  margin-left: 5em;
&:hover,&:active {
  background-color: #EED602;
  color: white;
}
}
}
.content{
  padding: 2em 6em;
  width: 60%;
  &__back-link{
    color: #4bb3fe;
    padding:1em;
    display:block
  }
  &__h2{
    font-size: 24px;
    color: #4bb3fe;
    text-decoration: none;
  }
&__overview{
     margin: auto auto 2em 0;
    font-size: 20px;
}
 &__loc{
       margin: auto auto 2em 0;
    font-size: 20px;
 }
  &__ico{
    color: #4bb3fe;
  }
  &__img{
    width: 90%;
    height:25em;
    margin: 1.5em auto 3em auto;
    display: block;
  }
  &__h1{
    font-size: 26px;
    font-weight: 900;
  }
&__p{
  color: black;
  font-weight: bold;
}
}
.reviews{
}
.review-header{
    display: flex;
    width: 100%;
 &__title{
    font-size:26px;
    margin: 1.5em auto 1em 0;
  }
  &__link{
    float: right;
    color: #00b570;
    text-decoration: underline;
    margin-top: 1.8em;
    cursor: pointer;
    font-size:22px;
  }
  }
  .review-list{
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
  &__text{font-size:0.7em;}
}
.aside{
    margin: 7em 7em auto auto;
    float: right;
    //position: absolute;
  &__content{
    border: 0.1px solid lightgray;
    border-radius: 3%;
      // width:30vw;
    height:auto;
    padding-bottom: 1em;
  }
  &__link{
    float: right;
    width:9em;
    color: black;
    text-align: center;
    padding: 0.5em 4em;
    text-decoration: none;
    font-size: 24px;
    border: 1px solid;
    cursor: pointer;
    margin: 1em 0em 0 0.5em;
  }
  &__logo{
   height: 15em;
    width: 17em;
    // padding: 0 5em;
    display: block;
    margin: auto;
  }
  &__name{ 
    font-size: 26px;
    font-weight: 900;
    text-align: center;
    color: black;
    }
&__hr{
  width:77%;
  height:2px;
}
    
    &__ico{
    color: #EED602;
    // font-size: 2em;
}
}
.pro{
  text-align: center;
  // padding: 2em;
  font-size: 24px;
  margin: 1em auto 1em auto;
 &__box{
  // margin-bottom: 2em;
  }
  &__btn{
       display: inline;
    padding: 0.5em;
    font-size: 18px;
    margin: 0px 0 0.5em 1em;
    background-color: white;
    border: 2px solid lightgray;
    border-radius: 0.4em;
    }
}
.comment{
display: inline-block;
margin: 1em 0 0 7em;
&__help{
    margin-right: 2em;
    text-decoration: none;
    background: transparent;
    border: none;
    }
  &__re{
    margin-right: 2em;
    text-decoration: none;
    background: transparent;
    border: none;
    padding-left: 2em;
    border-left: 2px solid black;
    }
    &__ico{
    padding-right: 0.5em;
    }
}
.button{
  padding: 2em 0 0 5em;
  &__add-btn{
  padding: 0.6em 0;
  color: #00b570;
  text-decoration: underline;
  background-color: white;
  border: none;
  font-size: 1.3em;
  cursor: pointer;
  }
}
.filled{
  fill:#EED602;
}
.box{
   border: 1px solid black;
   padding:3em;
   margin-top: 2em;
   display:flex;
}
.star{
    position: absolute;
    margin:1em 0 0 35em;
    &__ico{
      color: lightgray;
         font-size: 1em;
         cursor: pointer;
   }
   &__yellow{
     color: yellow;
      font-size: 1em;
        cursor: pointer;
   }
   &-checked {
     color: #EED602;
   }
   }
  
  .aside-box{
  
  &__img{
    height: 5em;
    width: 5em;
    margin: 1em 2em 0 0;
    border: 1px solid gray;
    border-radius: 56%    
  }
  &__name{
    font-size:0.7em;
  }
}
.review-text{
  &__input{
      height: 11em;
    width: 41em;
    margin: 4em 0 2em 0;
  }
  &__cancel{
    display: inline;
    padding: 0.5em;
    margin: 0 0 0.5em 2em;
    background-color: red;
    color:white;
    border: 1px solid lightgray;
    float: right;
    cursor: pointer;
  }
  &__add{
    display: inline;
    padding: 0.5em;
    margin: 0 0 0.5em 2em;
    color:white;
    background-color:#00b570;
    border: 1px solid lightgray;
    float: right;
    cursor: pointer;
  }
}
}
@include large-desktop{
body{
  font-family: $font-roboto;
}
.checked{
  color: #EED602;
}
.unchecked{
  color: lightgray;
}
.marketplace
 {
  // padding-top: 0;
  font-family: $font-roboto;
}
.topnav {
  overflow: hidden;
  background-color: #767676;
   width: 100%;
   height: 4em;
&__a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 1em;
    text-decoration: none;
    font-size: 1.3em;
  margin-left: 5em;
&:hover,&:active {
  background-color: #EED602;
  color: white;
}
}
}
.content{
  padding: 2em 6em;
  width: 60%;
  &__back-link{
    color: #4bb3fe;
    padding:1em;
    display:block
  }
  &__h2{
    font-size: 24px;
    color: #4bb3fe;
    text-decoration: none;
  }
&__overview{
     margin: auto auto 2em 0;
    font-size: 20px;
}
 &__loc{
       margin: auto auto 2em 0;
    font-size: 20px;
 }
  &__ico{
    color: #4bb3fe;
  }
  &__img{
    width: 90%;
    height:25em;
    margin: 1.5em auto 3em auto;
    display: block;
  }
  &__h1{
    font-size: 26px;
    font-weight: 900;
  }
&__p{
  color: black;
  font-weight: bold;
}
}
.reviews{
}
.review-header{
    display: flex;
    width: 100%;
 &__title{
    font-size:26px;
    margin: 1.5em auto 1em 0;
  }
  &__link{
    float: right;
    color: #00b570;
    text-decoration: underline;
    margin-top: 1.8em;
    cursor: pointer;
    font-size:22px;
  }
  }
  .review-list{
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
  &__text{font-size:0.7em;}
}
.aside{
    margin: 7em 7em auto auto;
    float: right;
    //position: absolute;
  &__content{
    border: 0.1px solid lightgray;
    border-radius: 3%;
      // width:30vw;
    height:auto;
    padding-bottom: 1em;
  }
  &__link{
    float: right;
    width:9em;
    color: black;
    text-align: center;
    padding: 0.5em 4em;
    text-decoration: none;
    font-size: 24px;
    border: 1px solid;
    cursor: pointer;
    margin: 1em 0em 0 0.5em;
  }
  &__logo{
   height: 15em;
    width: 17em;
    // padding: 0 5em;
    display: block;
    margin: auto;
  }
  &__name{ 
    font-size: 26px;
    font-weight: 900;
    text-align: center;
    color: black;
    }
&__hr{
  width:77%;
  height:2px;
}
    
    &__ico{
    color: #EED602;
    // font-size: 2em;
}
}
.pro{
  text-align: center;
  // padding: 2em;
  font-size: 24px;
  margin: 1em auto 1em auto;
 &__box{
  // margin-bottom: 2em;
  }
  &__btn{
       display: inline;
    padding: 0.5em;
    font-size: 18px;
    margin: 0px 0 0.5em 1em;
    background-color: white;
    border: 2px solid lightgray;
    border-radius: 0.4em;
    }
}
.comment{
display: inline-block;
margin: 1em 0 0 7em;
&__help{
    margin-right: 2em;
    text-decoration: none;
    background: transparent;
    border: none;
    }
  &__re{
    margin-right: 2em;
    text-decoration: none;
    background: transparent;
    border: none;
    padding-left: 2em;
    border-left: 2px solid black;
    }
    &__ico{
    padding-right: 0.5em;
    }
}
.button{
  padding: 2em 0 0 5em;
  &__add-btn{
  padding: 0.6em 0;
  color: #00b570;
  text-decoration: underline;
  background-color: white;
  border: none;
  font-size: 1.3em;
  cursor: pointer;
  }
}
.filled{
  fill:#EED602;
}
.box{
   border: 1px solid black;
   padding:3em;
   margin-top: 2em;
   display:flex;
}
.star{
    position: absolute;
    margin:1em 0 0 35em;
    &__ico{
      color: lightgray;
         font-size: 1em;
         cursor: pointer;
   }
   &__yellow{
     color: yellow;
      font-size: 1em;
        cursor: pointer;
   }
   &-checked {
     color: #EED602;
   }
   }
  
  .aside-box{
  
  &__img{
    height: 5em;
    width: 5em;
    margin: 1em 2em 0 0;
    border: 1px solid gray;
    border-radius: 56%    
  }
  &__name{
    font-size:0.7em;
  }
}
.review-text{
  &__input{
      height: 11em;
    width: 41em;
    margin: 4em 0 2em 0;
  }
  &__cancel{
    display: inline;
    padding: 0.5em;
    margin: 0 0 0.5em 2em;
    background-color: red;
    color:white;
    border: 1px solid lightgray;
    float: right;
    cursor: pointer;
  }
  &__add{
    display: inline;
    padding: 0.5em;
    margin: 0 0 0.5em 2em;
    color:white;
    background-color:#00b570;
    border: 1px solid lightgray;
    float: right;
    cursor: pointer;
  }
}
}
</style>
