<template>
    <div class="forum-layout">
        <div class="forum-nav">
            <!-- <div class="forum-nav__back" v-if="goesBack">
                <router-link :to="backRoute" class="forum-nav__back-link"><span class="forum-nav__back-arrow">&#10094;</span> {{backLink}}</router-link>
            </div> -->
            <div class="search">
                <input type="text" class="search__bar" placeholder="Search Forum">
                <button class="search__btn"><i class="fas fa-search"></i></button>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentRoute: '',
            backRoute: '',
            goesBack: true,
            backLink: ''
        }
    },
    /* methods: {
        setBackRoute(route) {
            switch(route) {
                case '/main':
                    this.goesBack = false;                    
                    break;
                case '/post':
                    this.backRoute = '/main';
                    this.backLink = 'Forum';
                    break;
                case '/topic':
                    this.backRoute = '/main';
                    this.backLink = 'Forum';
                    break;
                case '/reply':
                    this.backRoute = '/topic';
                    this.backLink = 'Topic';
                    break;
            }
        }
    }, */    
    mounted() {
        this.currentRoute = this.$route.path;
        this.setBackRoute(this.currentRoute);
        //console.log(this.currentRoute);
    }
}
</script>
<style lang="scss">
.forum-layout {
    width: 100%;
    height: auto;
}
.forum-nav{
    margin: 1.5em auto 5em auto;
    overflow: hidden;
    //margin-bottom: 5em;
    &__back {
        float: left;
        margin-left: 10%;
        &-link {
            color: #0093FF;
            font-family: $font-roboto;
            font-style: italic;
            font-size: 18px;
            text-decoration: none;
            
        }
        &-arrow {
            font-style: normal;
        }
    }
}
.search {
    width: 25%;
    height: 2em;
    border: solid 1px black;
    float: right;
    margin-right: 10%;
    font-family: $font-roboto;
    &__bar {
        width: 85%;
        height: 90%;
        border: none;
        margin-left: 0; 
        font-size: 14px;
    }
    &__btn {
        background-color: white;
        color: black;
        outline: none;
        border: none;
        height: 100%;
        cursor: pointer; 
        font-size: 14px;      
    }
}
</style>