<template>
    <div class="comment-reply">
        <div class="comment-reply__author">
            <img src="@/assets/img/jamesben.jpg" alt="" class="comment-reply__img">
            <h5 class="comment-reply__name">{{reply.author}}</h5>
        </div>
        <div class="comment-reply__content">
            <p class="comment-reply__text">{{reply.text}}
            </p>
            <div class="comment-reply__options">
                <div class="comment-reply__rate">
                    <p class="comment-reply__rating">{{rating}}</p>   
                    <button class="comment-reply__vote" :class="{'comment-reply--voted': replyRated}" @click="rateReply" :disabled="replyRated"><span class="comment-reply__thumb"><i class="far fa-thumbs-up"></i></span> Helpful</button>
                    <span class="comment-reply__line">|</span>
                    <button class="comment-reply__report">Report abuse</button>
                </div>
                <button class="comment-reply__reply-btn" @click="toReply">Reply</button>
            </div>
        </div>        
    </div>
</template>
<script>
export default {
    props: {
        replyData: Object
    },
    data() {
        return {
            reply: this.replyData,
            rating: 0,
            replyRated: false
        }
    },
    methods: {
        toReply() {
            this.$router.push('/reply');
        },
        rateReply(){
            this.rating += 1;
            this.replyRated = true;
        }
    }
}
</script>
<style lang="scss">
.comment-reply {    
    grid-template-columns: 10% 90%;
    width: 100%;
    display: grid;
    margin:1em auto auto auto;
    font-family: $font-roboto;
    &--voted {
        color: gray;
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
@include xs-Desktop {
    .comment-reply {
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
}
</style>