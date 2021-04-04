<template>
<div class="content">
    <h1 class="content__h1"> Favorites list</h1>
<div class="tile-content">
    <div class="tile" v-for="location in pageArray" :key="location.id">


                <div class="tile__left">
                    <img class="tile__img" src="@/assets/img/loc2.png" />  
                      <i class=" tile__ico fa fa-heart"></i>

              <div class="tile__left-info">
                    <p class="tile__area">Virum, Denmark</p>
                    <p class="tile__adress">street</p>
                </div>
            </div>
            <div class="tile__right">
                <h3 class="tile__name">Printzlau Privathospital</h3>
                <p class="tile__discription">In this text box hospitals can shortly present who they are, what they specialize in, which treatments they offer and why patients should choose to be treated at their facilities. Patients can determine whether or not the given hospital is worth learning more about. If so the patient can press the "learn more" button and be directed to the hospitals own destination.</p>
                <div class="term-price">
                    <p class="term-price__price">From €4200</p>
                </div>
            </div>
       
    </div>
    </div>
    <div class="pagination">
                <button class="pagination__prev pagination--btn" @click="prev">&#10094;</button>
                <button class="pagination__num pagination--btn" v-for="i in pages" :key="i" @click="selectPage($event)">{{i}}</button>
                <button class="pagination__next pagination--btn" @click="next">&#10095;</button>
            </div>
</div>

</template>
<script>
export default {
    data() {
        return {
            locations: [],
            testArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            pageArray: [],
            currentPage: 1,
            pages: 0
        }
    },
    methods:{
         generateLoc() {
            let i;
            let t = this.locations;
            for (i = 1; i <= 8; i++){
                let x = {id: i};
                t.push(x);
            }
        },
        setMaxPages(){
            // return array.slice((3 - 1) * 4, 3 * 4);
            this.pages = Math.ceil(this.locations.length / 4);
        },
        setPaginationList(){
            let first = ((this.currentPage - 1) * 4);
            let last = first + 4;

            this.pageArray = this.locations.slice(first, last);            
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
        }
    },
    created() {
        this.generateLoc();
        this.setMaxPages();
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
.content{
    font-family: $font-roboto;
       display:block;
       height: 100%;
       padding: 4em 0;

       &__h1{
           margin:2em 0 0 5em;
           font-size:1em;
           }
}

    .activePage {
        font-weight: bold;
        background-color: #1a7cc3;
        color: white;
        font-size: 20px;
    }


    .tile:nth-child(even) {
        margin-left: 2em;
    }

    .tile:not(:first-child, :nth-child(2)) {
        margin-top: 2em;
    }
.tile-content{
    display:grid;
    grid-template-columns: 50% 50%;
    margin:0em 5em ;
    height: 100%;
}
    .tile {
        width: 95%;
        box-shadow: 0 0 7px lightgray;
        background-color: white;
        display: flex;
        flex-direction: row;
        border-radius: 15px;
        margin-top: 2em;

        &__h1{ 
        margin: 1em;
        font-size: 2em;
        }

    /* LEFT SIDE */

    &__left {
        height: 13em;
        width: 40%;
        display: flex;
        flex-direction: column;
        background-color: rgb(241, 241, 241);
        border-radius: 10px;
    }

    &__img {
         height: 13em;
         width: 100%;
         margin: auto;
    }

    &__left-info {
        margin-top: -3.4em;
        padding: 0.5em;
        height: 30%;
        display: flex;
        flex-direction: column;
        padding-left: 5px;
        background-color: rgba(0, 0, 0, 0.6);
        color: white;
        border-radius: 10px;
    }

    &__rating {
        width: 120px;
        margin-left: 34%;
        color: white;
        padding-top: 20px;
    }

        &__rating > .checked {
            color: orange;
        }

    &__area {
        font-weight: 500;
        text-align: center;
        margin: 0;
    }

    &__adress {
        text-align: center;
        margin: 0;
        font-weight: 300;
    }

    &__ico {
        color: #eec302;
        font-size: 2em;
        padding:0.2em 0 0 1em;
        margin: 0 0 0 10%;
        position: absolute;
    }

    /*RIGHT SIDE */

    &__right {
        height: 100%;
        width: 60%;
        background-color: white;
        padding-left: 15px;
        padding-top: 10px;
        font-family: Roboto;
    }

    &__name {
        margin-top: 10px;
        margin-left: 10px;
        color: #1a7cc3;
        font-weight: bold;
        font-size: 1em;
    }

    &__discription {
        text-align: left;
        padding-left: 0;
        padding-right: 0;
        font-weight: 400;
        max-height: 4em;
        overflow: hidden;
        padding-bottom: 3em;
        color: rgb(170, 170, 170);
    }
    }

    .tile__show-more > a {
        font-weight: 300 !important;
    }

    .term-price {
       float: right;

    &__price{
        font-size: 1em;
         margin: 0 1em 0.5em 0;

    }

    }

    #result-tiles {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
.pagination {
    text-align: center;
    margin: 2em;
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