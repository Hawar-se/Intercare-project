<template>
    <div class="comment-box">
        <div class="comment-box__main">
            <div class="comment-box__author">
                <img src="@/assets/img/pic.png" alt="" class="comment-box__img">
                <h5 class="comment-box__name">{{comment.author}}</h5>
            </div>
            <div class="comment-box__content">
                <p class="comment-box__text">{{comment.text}}
                </p>
                <div class="comment-box__options">
                    <div class="comment-box__rate">
                        <p class="comment-box__rating">{{rating}}</p>   
                        <button class="comment-box__vote" :class="{'comment-box--voted': commentRated}" @click="rateComment" :disabled="commentRated"><span class="comment-box__thumb"><i class="far fa-thumbs-up"></i></span> Helpful</button>
                        <span class="comment-box__line">|</span>
                        <button class="comment-box__report">Report abuse</button>
                    </div>
                    <button class="comment-box__reply-btn" @click="toReply">Reply</button>
                </div>
            </div>
        </div>
        <div class="comment-replies" v-if="replies" >
            <div class="comment-replies__replies" v-for="reply in replies" :key="reply">
                <hr class="comment-replies__divide">
                <Reply :replyData="reply"/>
            </div>
        </div>
    </div>
</template>
<script>
import Reply from '@/components/TheReply';
export default {
    components: {
      Reply  
    },
    props: {
        commentData: Object
    },
    data() {
        return {
            comment: this.commentData,
            rating: 0,
            commentRated: false,
            replies: [
                {author: "James Benjamin", text: "Something something, I may or may not disagree with this comment!"}
            ]
        }
    },
    methods: {
        toReply() {
            this.$router.push('/reply');
        },
        rateComment(){
            this.rating += 1;
            this.commentRated = true;
        }
    }
}
</script>
<style lang="scss">
.comment-box {
    border: solid 1px black;
    padding: 1.5em;    
    width: 100%;    
    margin:auto auto 2em auto;
    font-family: $font-roboto;
    &--voted {
        color: gray;
    }
    &__main {
        display: grid;
        grid-template-columns: 10% 90%;
    }
    &__author {        
        width: 80%;
    }
    &__img {
        width: 5.5em;
        height: 5.5em;
        border-radius: 50%;
        border: solid 1px black;
        display: block;
        margin: auto;
    }
    &__name {
        text-align: center;
        font-size: 14px;
    }
    &__content {
        font-size: 16px;
    }
    &__options {
        width: 100%;
    }
    &__rate {
        display: flex;
        font-size: 18px;      
    }
    &__rating {
        //font-size: 18px;
        color: green;
    }
    &__vote {
        border: none;
        background-color: white;
        color: green;
        //font-size: 18px;
        cursor: pointer;
    }
    &__report {
        border: none;
        background-color: white;
        color: red;
        //font-size: 18px;
        cursor: pointer;
    }
    &__line {
        margin: auto 1em auto 1em;
        //font-size: 18px;
    }
    &__reply-btn {
        background-color: #1A7CC3;
        color: white;
        border: none;
        float: right;
        font-size: 18px;
        padding: 0.3em;
        width: 5.5em;
        cursor: pointer;
    }
}
.comment-replies {
    &__divide {
        width: 100%;
        background-color: black;
        display: block;
        margin: 1em auto 2em auto;
    }
}
@include xs-Desktop {
    .comment-box {
        padding: 1em;
        &__img {
            width: 4em;
            height: 4em;
        }
        &__name {
            font-size: 12px;
        }
        &__rate {
            font-size: 16px;
        }
    }
    .comment-replies {
        &__img {
            width: 4em;
            height: 4em;
        }
        &__name {
            font-size: 12px;
        }
    }
}
</style>