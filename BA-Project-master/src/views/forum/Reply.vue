<template>
    <div class="forum-reply">
        <h1 class="forum-reply__header">Topic Headline</h1>
        <div class="reply-box">
            <div class="reply-box__message">
                <div class="reply-box__author">
                    <img src="@/assets/img/pic.png" alt="" class="reply-box__img">
                    <h5 class="reply-box__name">Abbey Edward</h5>
                </div>
                <div class="reply-box__post">
                    <p class="reply-box__text"> <!--Message you are responding to will go here!-->
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br>
                        (Original message you respond to goes here!)
                    </p>
                    <div class="reply-box__options">
                        <!-- <div class="reply-box__rate">
                            <button class="reply-box__vote"><span class="reply-box__thumb"><i class="far fa-thumbs-up"></i></span> Helpful</button>
                            <span class="reply-box__line">|</span>
                            <button class="reply-box__report">Report abuse</button>
                        </div> -->                
                    </div>
                </div>
            </div>            
            <hr class="reply-box__divide">
            <div class="reply-box__response">
                <div class="reply-box__author">
                    <img src="@/assets/img/jamesben.jpg" class="reply-box__img">
                    <h5 class="reply-box__name">James Benjamin</h5>
                </div>
                <div class="reply-box__text-box">
                    <textarea class="reply-box__textarea" rows="8" autofocus placeholder="Type your response here"></textarea>
                    <button class="reply-box__reply" @click="toTopic">Reply</button>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        toTopic() {
            this.$router.push('/topic');
        }
    }
}
</script>
<style lang="scss">
.forum-reply {
    width: 80%;
    display: block;
    margin: auto;
}
.reply-box {
    border: solid 1px black;
    padding: 1.5em;
    width: 100%;   
    margin:auto auto 2em auto;
    font-family: $font-roboto;
    &__message {
        display: grid;
        grid-template-columns: 10% 90%;
    }
    &__author {        
        width: 80%;
    }
    &__img {
        width: 6em;
        height: 6em;
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
        width: 90%;
    }
    &__rate {
        display: flex;        
    }
    &__text {
        width: 90%;
        display: block;
        margin: 1em auto auto auto;
    }
    &__vote {
        border: none;
        background-color: white;
        color: green;
        font-size: 18px;
        cursor: pointer;
    }
    &__report {
        border: none;
        background-color: white;
        color: red;
        font-size: 18px;
        cursor: pointer;
    }
    &__line {
        margin: auto 1em auto 1em;
        font-size: 18px;
    }
    &__divide {
        width: 90%;
        background-color: black;
        display: block;
        margin: 0.5em 0 2em auto;
        //border: solid 1px black;
    }
    &__response {
        display: grid;
        grid-template-columns: 10% 90%;
    }
    &__text-box{
        width: 100%;
        display: block;
        margin: auto;
    }
    &__textarea {
        width: 90%;
        font-size: 16px;
        resize: none;
        padding: 0.3em;
        display: block;
        margin: auto;
    }
    &__reply {
        background-color: #1A7CC3;
        color: white;
        border: none;
        float: right;
        font-size: 18px;
        padding: 0.3em;
        margin-top: 0.5em;
        width: 5.5em;
        cursor: pointer;
    }
}
</style>