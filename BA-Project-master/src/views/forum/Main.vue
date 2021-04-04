<template>
    <div class="forum-main">
        <h1 class="forum-main__header">Welcome to the InterCare community.</h1>

        <div class="options">
            <button class="options__add" @click="postTopic">Add Topic</button>
            <select name="" id="" class="options__filter">
                <option value="recent">Recent topics</option>
                <option value="rated">Highest rated</option>
                <option value="viewed">Most viewed</option>
            </select>
        </div>

        <div class="topics">
            <h2 class="topics__header">Current topics</h2>

            <div class="topic-list">
                <div class="topic-list__bar" v-for="topic in pageArray" :key="topic.id">
                    <div class="topic-list__stats">
                        <p class="topic-list__replies"><i class="far fa-comment"></i> 1</p>
                        <p class="topic-list__views"><i class="far fa-eye"></i> 1</p>
                    </div>
                    <router-link to="/topic" class="topic-list__header">{{topic.title}}</router-link>
                    <p class="topic-list__author">by {{topic.author}}</p>                    
                </div>
            </div>
            <div class="pagination">
                <button class="pagination__prev pagination--btn" @click="prev">&#10094;</button>
                <button class="pagination__num pagination--btn" v-for="i in pages" :key="i" @click="selectPage($event)">{{i}}</button>
                <!-- <button class="pagination__num pagination--btn">2</button>
                <button class="pagination__num pagination--btn">3</button> -->
                <button class="pagination__next pagination--btn" @click="next">&#10095;</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            topics: [],
            testArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            pageArray: [],
            currentPage: 1,
            pages: 0
        }
    },
    methods: {
        generateTopics() {
            let i;
            let t = this.topics;
            for (i = 1; i <= 16; i++){
                let x = {id: i, title: 'Headline Lorem Ipsum ' + i, author: 'Online Community Manager'};
                t.push(x);
            }
        },
        postTopic() {
            this.$router.push('/post');
        },
        setMaxPages(){
            // return array.slice((3 - 1) * 4, 3 * 4);
            this.pages = Math.ceil(this.topics.length / 4);
        },
        setPaginationList(){
            let first = ((this.currentPage - 1) * 4);
            let last = first + 4;

            this.pageArray = this.topics.slice(first, last);            
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
        }
    },
    created() {
        this.generateTopics();
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
.active {
    
    background-color: highlight;
    color: white;
}
.forum-main {
    display:block;
    margin: auto;
    width: 80%;
    &__header {
        text-align: left;
        font-family: $font-roboto;
    }
}
.options {
    float: right;    
    font-family: $font-roboto;
    &__add {
        background-color: #1A7CC3;
        color: white;
        height: 2.5em;
        width: 8.5em;
        margin-right: 2em; 
        outline: none;
        border: none;
    }
    &__filter {
        height: 2.5em;
        width: 8.5em;
    }
}
.topics {
    margin-top: 5em;
    width: 100%;
    text-align: left;
    font-family: $font-roboto;
}
.topic-list {
    margin: 2.5em auto 2em auto;
    &__bar {
        border-bottom: solid 1px black;
        margin-bottom: 3em;
    }
    &__header {
        color: highlight;
        //margin-bottom: 3em;
        text-decoration: none;
        font-size: 20px;
    }
    
    &__stats {
        display: flex;
        float: right;
        margin: 1.5em auto 0 auto; 
        font-size: 20px;
    }
    &__replies {
        margin-right: 2em;
    }
    &__views {
        margin-right: 1em;
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
</style>