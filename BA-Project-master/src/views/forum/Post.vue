<template>
    <div class="forum-post">
        <div class="guidelines">
            <h2 class="guidelines__header">Remember our community guidelines</h2>
            <ul class="guidelines__list">
                <li class="guidelines__point">Be kind and respectful</li>
                <li class="guidelines__point">No personal insults or attacks</li>
                <li class="guidelines__point">No links to unsafe or offensive content</li>
                <li class="guidelines__point">Do not share your account information publicly or within the community</li>
            </ul>
        </div>
        <div class="post">
            <div class="post__user">
                <img src="@/assets/img/jamesben.jpg" class="post__user-img">
                <h5 class="post__user-name">James Benjamin</h5>
            </div>
            <div class="post__main">
                <div class="post__info">
                    <input type="text" placeholder="Title" class="post__title" v-model="postTitle">
                    <textarea name="" rows="10" placeholder="Post contents here" class="post__text" v-model="postText"></textarea>
                </div>
                <div class="post__btns">
                    <button class="post__cancel-btn" @click="forumBack">Cancel</button>
                    <button class="post__post-btn" @click="addTopic">Post</button>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            postTitle: '',
            postText: ''
        }
    },
    methods: {
        forumBack() {
            this.$router.push('/main');
        },
        toTopic() {
            this.$router.push('/topic');
        },
        addTopic() {
            let t = {title: this.postTitle, text: this.postText};
            sessionStorage.setItem("addedTopic", JSON.stringify(t));
            this.toTopic();
        }
    }
}
</script>
<style lang="scss" scoped>
.forum-post {
    width: 70%;
    display: block;
    margin: auto;
    font-family: $font-roboto;
}
.guidelines {
    margin-bottom: 3em;
    /* &__header {
        
    } */
    &__list {
        line-height: 2em;
    }
}
.post {
    border: solid 1px black;
    padding: 1.5em;
    grid-template-columns: 10% 90%;
    width: 90%;
    display: grid;
    margin:auto;
    &__user {        
        width: 100%;
    }
    &__user-img {
        width: 7em;
        height: 7em;
        border-radius: 50%;
        border: solid 1px black;
        display: block;
        margin: auto;
    }
    &__user-name {
        text-align: center;
        font-size: 16px;
    }
    &__info {
        width: 85%;
        display: block;
        margin: auto;   
    }
    &__title {
        height: 2.5em;
        font-size: 18px;
        border: solid 1px black;
        display: block;
        width: 100%;
        margin-bottom: 0.5em;
        padding-left: 0.3em;
    }
    &__text {
        width: 100%;
        border: solid 1px black;
        font-size: 16px;
        margin-bottom: 1.5em;
        font-family: $font-roboto;
        padding: 0.3em;
        resize: none;
    }
    &__btns {
        float: right;
        margin-right: 7.5%
    }
    &__cancel-btn {
        background-color: #BF3B3B;
        color: white;
        font-size: 16px;
        width: 6em;
        height: 2em;
        border: none;
        margin-right: 1.5em;
    }
    &__post-btn {
        background-color: #00B579;
        color: white;
        font-size: 16px;
        width: 6em;
        height: 2em;
        border: none;
    }
}
@include xs-Desktop {
    .post {
        padding: 1em;
        &__user-img {
            width: 5em;
            height: 5em;
        }
    }
}
@include small-desktop {
    .post {
        &__user-img {
            width: 6em;
            height: 6em;
        }
    }
}
</style>