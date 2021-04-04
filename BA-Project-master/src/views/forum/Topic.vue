<template>
    <div class="forum-topic">
        <div class="main-post">
            <div class="main-post__author">
                <img src="@/assets/img/jamesben.jpg" alt="" class="main-post__img">
                <h5 class="main-post__name">James Benjamin</h5>
            </div>
            <div class="main-post__content">
                <h1 class="main-post__header">{{postTitle}}</h1>
                <article class="main-post__post">
                    <p class="main-post__text">{{postText}}</p>
                </article>
            </div>
        </div>
        <div class="comment">
            <button class="comment__comment-btn" @click="leaveComment">Leave comment</button>
            <select class="comment__filter">
                <option value="recent">Recent comments</option>
                <option value="rated">Most helpful</option>                
            </select>
        </div>
        <div class="comment-modal" id="com-modal" @click="closeComment($event)" v-if="commenting">
            <div class="comment-modal__content" id="com-modal-content">
                <button class="comment-modal__close" id="com-modal-close">x</button>
                <h4 class="comment-modal__header">Remember the community guidelines:</h4>
                <ul class="comment-modal__list">
                    <li class="comment-modal__item">Be polite and respectful</li>
                    <li class="comment-modal__item">No personal insults/attacks</li>
                    <li class="comment-modal__item">Don't share personal account info with others</li>
                </ul>
                <div class="comment-modal__comment">
                    <h4 class="comment-modal__header">Your Comment:</h4>
                    <textarea rows="8" class="comment-modal__comment-box" v-model="commentText"></textarea>
                    <button class="comment-modal__cancel" id="com-modal-cancel">Cancel</button>
                    <button class="comment-modal__post" @click="addComment">Post</button>
                </div>
            </div>
        </div>
        <div class="replies">
            <Comment v-for="comment in comments" :commentData="comment" :key="comment.id" />
        </div>
    </div>
</template>
<script>
import Comment from '@/components/Comment';

export default {
    components: {
        Comment
    },
    data() {
        return {
            comments: [],
            commenting: false,
            postTitle: 'Headline Lorem Ipsum',
            postText: 'Main text will go here',
            commentText: ''
        }
    },
    methods: {
        generateComment() {
            let i;
            for (i = 1; i <= 3; i++) {
                let x = {id: i, author: "Abbey Edward", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                this.comments.push(x);
            }
        },
        leaveComment() {
            this.commenting = true;
        },
        closeComment(event) {
            let id = event.target.id;
            if (id === 'com-modal' || id === 'com-modal-close' || id === 'com-modal-cancel') {
                this.commenting = false;
            }
        },
        addComment() {
            let c = {id: 4, author: "Abbey Edward", text: this.commentText};
            this.comments.unshift(c);
            this.commenting = false;
            this.commentText = '';
        },
        getAddedTopic() {
            let t = sessionStorage.getItem("addedTopic");
            if("addedTopic" in sessionStorage) {
                let p = JSON.parse(t);
                this.postTitle = p.title;
                this.postText = p.text;
            }
        }
    },
    created() {
        this.generateComment();
        this.getAddedTopic();
    }
}
</script>
<style lang="scss">
.forum-topic {
    width: 80%;
    font-family: $font-roboto;
    display: block;
    margin: auto;
}
.main-post {
    display: grid;
    grid-template-columns: 10% 90%;
    margin: auto auto 2em auto;
    padding: 0.5em;
    background-color: lightgrey;
    &__img {
        width: 7em;
        height: 7em;
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
        padding-left: 1em;
        width: 100%;
    }
}
.comment {
    width: auto;
    display: block;
    overflow: hidden;
    margin-bottom: 2em;
    &__comment-btn {
        background-color: #1A7CC3;
        color: white;
        border: none;
        float: left;
        font-size: 16px;
        padding: 0.4em;
        width: auto;
        cursor: pointer;
    }
    &__filter {
        margin-left: 1em;
        height: 2.4em;
        width: auto;
    }
}
.comment-modal {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    &__content {
        position: absolute;
        top: 10%;
        left: 20%;
        background-color: white;
        border-radius: 15px;
        height: auto;
        padding: 0.4em 0.4em 1em 0.4em;
        width: 60%;
        overflow: hidden;
    }
    &__close {
        color: red;
        background-color: white;
        border: none;
        float: right;
        font-size: 24px;
        cursor: pointer;
    }
    &__header {
        margin-left: 5%;
    }
    &__list {
        margin-left: 5%;
    }
    &__comment {
        margin-top: 3em;
    }
    &__comment-box {
        width: 90%;
        display: block;
        margin: auto;
        resize: none;
        font-size: 16px;
        padding: 0.3em;
    }
    &__cancel {
        background-color: red;
        color: white;
        border: none;
        float: right;
        font-size: 16px;
        padding: 0.4em;
        width: 6em;
        margin: 1em 5% auto auto;
        cursor: pointer;
    }
    &__post {
        background-color: #1A7CC3;
        color: white;
        border: none;
        float: right;
        font-size: 16px;
        padding: 0.4em;
        width: 6em;
        margin: 1em 1em auto auto;
        cursor: pointer;
    }
}
@include xs-Desktop {
    .main-post {
        &__name {
            font-size: 12px;
        }
        &__img {
            width: 5em;
            height: 5em;
        }
        &__header {
            font-size: 26px;
        }
    }
}
</style>