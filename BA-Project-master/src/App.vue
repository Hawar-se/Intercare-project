<template>
  <div id="app" >
    <div class="site-header">
      <div class="modal" id="modal-bg" v-if="showModal" @click ="closeModal($event)">
        <div class="modal__content" id="modal-content">
          <div class="side-nav">
            <div class="side-nav__languge">
              English
              <img class="side-nav__img" src="@/assets/img/uk.png" />
            </div>

            <a class="modal__close" id="modal-close"> Close X</a>
            <hr />

            <router-link to="/" class="side-nav__item"
              >Provider Profile</router-link>
            <hr />

            <router-link to="/profile" class="side-nav__item"
              >User Profile</router-link>
            <hr />
            
            <router-link to="/main" class="side-nav__item">Forum</router-link>
            <hr />
            <router-link to="/" class="side-nav__item">About us</router-link>
            <hr />

            <!-- <div class="side-nav__topic">Recint Topic</div> -->
          </div>
        </div>
      </div>

      <div class="menu" @click="openModal" >
        <i class="menu__ico fa fa-bars"></i>
        <h1 class="menu__h1">MENU</h1>
      </div>
      <div class="vl"></div>

      <div class="header-search">
        <i class="header-search__ico fa fa-search" @click="openSearch"></i>
        <div class="header-search__togglesearch" v-if="showSearch">
          <input
            type="text"
            placeholder=" Search for Treatment, Provider, or Location "
          />
          <button class="header-search__x" @click="closeSearch">X</button>
                    <input type="button" value="Search" />

        </div>
      </div>
      <router-link to="/">
        <button class="btn">FOR HEALTHCARE PROVIDERS</button>
      </router-link>
      <div class="logo">
        <router-link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="30"
            viewBox="0 0 131 37"
          >
            <g
              id="Logo_option_1"
              data-name="Logo option 1"
              transform="translate(-80 -23)"
            >
              <text
                id="Text"
                transform="translate(119 49)"
                fill="#e31836"
                stroke="#e31836"
                stroke-width="1"
                font-size="22"
                font-family="AirbnbCerealApp-Book, Airbnb Cereal App"
              >
                <tspan x="0" y="0">intercare</tspan>
              </text>
              <g id="Logo_icon" data-name="Logo icon">
                <g
                  id="Ellipse_238"
                  data-name="Ellipse 238"
                  transform="translate(80 23)"
                  fill="#e31836"
                  stroke="#e31836"
                  stroke-width="2"
                >
                  <ellipse cx="16.5" cy="18" rx="16.5" ry="18" stroke="none" />
                  <ellipse cx="16.5" cy="18" rx="15.5" ry="17" fill="none" />
                </g>
                <g
                  id="Ellipse_239"
                  data-name="Ellipse 239"
                  transform="translate(83 26.5)"
                  fill="#fff"
                  stroke="#e31836"
                  stroke-width="1"
                >
                  <ellipse
                    cx="13.5"
                    cy="14.5"
                    rx="13.5"
                    ry="14.5"
                    stroke="none"
                  />
                  <ellipse cx="13.5" cy="14.5" rx="13" ry="14" fill="none" />
                </g>
                <rect
                  id="Rectangle_1701"
                  data-name="Rectangle 1701"
                  width="33"
                  height="15"
                  transform="translate(80 45)"
                  fill="#fff"
                />
                <g id="Group_1115" data-name="Group 1115">
                  <line
                    id="Line_805"
                    data-name="Line 805"
                    y2="16"
                    transform="translate(96.5 34.5)"
                    fill="none"
                    stroke="#e31836"
                    stroke-width="4"
                  />
                  <line
                    id="Line_806"
                    data-name="Line 806"
                    x2="14"
                    transform="translate(89.5 35.5)"
                    fill="none"
                    stroke="#e31836"
                    stroke-width="3"
                  />
                  <line
                    id="Line_807"
                    data-name="Line 807"
                    x2="10"
                    transform="translate(91.5 49.5)"
                    fill="none"
                    stroke="#e31836"
                    stroke-width="3"
                  />
                </g>
              </g>
            </g>
          </svg>
        </router-link>
      </div>
    </div>
    <router-view />   
  </div>
</template>
<script>
export default {
  data() {
    return {
      showModal: false,
      showSearch: false,
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },

    closeModal(event) {
      let e = event.target.id;
      if (e === 'modal-bg' || e === 'modal-close') {
        this.showModal = false;
      }
    },
    openSearch() {
      this.showSearch = true;
    },
    closeSearch() {
      this.showSearch = false;
    },
  
  },
};
</script>


<style lang="scss">
/* .main-content {
  height: 100%;
  width: 100%;
} */
 @include  xs-Desktop {
  
  body {
  margin: 0;
     font-family: $font-roboto;

}

.vl {
  border-left: 1px solid lightgray;
    height: inherit;
    position: absolute;
    left: 6%;
    margin-left: 0;
    top: 0;
}

.site-header {
  position:sticky;
  top: 0;
  background-color:white;
  padding: 0;
  width: 100%;
  height: 3em;
  border-bottom: 1px solid lightgray;
}

.site-header * {
    display: inline;
  
}

.header-search {
    margin: 0.4em 0 0 6em;
    cursor: pointer;
    position: absolute;

  &__ico {
    font-size: 0.7em;
  }

  &__togglesearch {
   background: #ffffff;
   position:fixed;
   top: 0;
   left: 6em;
   width: 93%;
   height: 2em;
    line-height: 0;
  }
 
  &__togglesearch input[type="text"] {
    width: 50.5em;
    padding: 0.4em;
    margin-top: 0.1em;;
  }
  &__togglesearch input[type="button"] {
    width: 7em;
    height: 2.5em;
    padding: 5px 0;
    background: gray;
    color: #fff;
    float:right;
    border: 1px solid gray;
    outline: none;
    cursor: pointer;
  }

  &__x {
     float:right;
    width: 4em;
    height: 2.5em;
    padding: 5px 0;
    background: #0a0a0a;
    color: #fff;
    border: 1px solid gray;
    outline: none;
    cursor: pointer;
  }
}

.logo {
  margin: 0 0 0 43%;
}

.menu{
        padding: 0.9em 2em 01em 0.2em;
    font-size: 0.5em;
    cursor: pointer;
    position: absolute;

  &__ico {
    font-size: 1.2em;
    padding:1em;
  }

  &__h1 {
    font-size: 1.2em;
    font-family: $font-roboto;
    display: inline-block;
  }
}

.btn {
  padding: 0;
  height: 99%;
  width: 18em;
  float: right;
  background-color: red;
  border: none;
  color: white;
  font-size: 0.6em;
  margin: 0;
}

.side-nav {
  &__languge {
    padding: 1.7em 0 0 1em;
    font-size: 0.7em;
    font-weight: 600;
    color: black;
    text-decoration: underline;
    display: flex;
  }
  &__img {
    margin: 0 0 0 1em;
    height: 1.2em;
  }

  &__item {
    padding: 1.5em 0 0.5em 1em;
    display: block;
    text-decoration: none;
    font-size: 0.9em;
    font-weight: 600;
    color: black;
    border-bottom: 0.5px solid lightgray;
  }
  &__topic {
    padding: 1em 0 0 6em;
    font-size: 1em;
    font-weight: 400;
    color: black;
    display: flex;
  }
}
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.6);

  &__content {
    background-color: white;
    height: 100vh;
    width: 13em;
    position: absolute;
  }
  &__close {
    margin: -1.4em 0 0 12em;
    font-size: 0.8em;
    padding: 0 0 0.5em 0;
    display: block;
    text-decoration: none;
    cursor: pointer;
  }
}
hr {
  height: 1px;
  background-color: #f0f0f0;
  border: none;
}
}
@include small-desktop {
   font-family: $font-roboto;
  
  body {
  margin: 0;
}
.vl {
  border-left: 1px solid lightgray;
    height: 3em;
    position: absolute;
    left: 6%;
    top: 0;
}

.site-header {
  position: sticky;
  top: 0;
  padding: 0;
  width: 100%;
  height: 3em;
  border-bottom: 1px solid lightgray;
  background-color: white;
}

.site-header * {
    display: inline;
}

.header-search {
    margin: 0.4em 0 0 6em;
    cursor: pointer;
    position: absolute;

  &__ico {
    font-size: 0.7em;
  }

  &__togglesearch {
   background: #ffffff;
position:fixed;
    top: 0;
    left: 6em;
    width: 92.5%;
    height: 3.5em;
    line-height: 0;
  }
 
  &__togglesearch input[type="text"] {
    width: 50.5em;
    padding: 0.5em;
    margin-top: 1%;  
    }

  &__togglesearch input[type="button"] {
    width: 7em;
    height: inherit;
    padding: 5px 0;
    background: gray;
    color: #fff;
    float:right;
    border: 1px solid gray;
    outline: none;
    cursor: pointer;
  }

  &__x {
        float:right;

    width: 4em;
    height: inherit;
    padding: 5px 0;
    background: #0a0a0a;
    color: #fff;
    border: 1px solid gray;
    outline: none;
    cursor: pointer;
  }
}

.logo {
  margin: 0 0 0 37%;
}

.menu{
        padding: 0.9em 2em 01em 0.2em;
    font-size: 0.5em;
    cursor: pointer;
    position: absolute;

  &__ico {
    font-size: 1.2em;
    padding:1em;
  }

  &__h1 {
    font-size: 1.2em;
    font-family: $font-roboto;
    display: inline-block;
  }
}

.btn {
  padding: 0;
  height: 99%;
  width: 18em;
  float: right;
  background-color: red;
  border: none;
  color: white;
  font-size: 0.6em;
  margin: 0;
}

.side-nav {
  &__languge {
    padding: 1.7em 0 0 1em;
    font-size: 0.7em;
    font-weight: 600;
    color: black;
    text-decoration: underline;
    display: flex;
  }
  &__img {
    margin: 0 0 0 1em;
    height: 1.2em;
  }

  &__item {
    padding: 1.5em 0 0 1em;
    display: block;
    text-decoration: none;
    font-size: 0.9em;
    font-weight: 600;
    color: black;
  }
  &__topic {
    padding: 1em 0 0 6em;
    font-size: 1em;
    font-weight: 400;
    color: black;
    display: flex;
  }
}
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.6);

  &__content {
    background-color: white;
    height: 100vh;
    width: 13em;
    position: absolute;
  }
  &__close {
    margin: -1.4em 0 0 12em;
    font-size: 0.8em;
    padding: 0 0 0.5em 0;
    display: block;
    text-decoration: none;
    cursor: pointer;
  }
}
hr {
  height: 1px;
  background-color: #f0f0f0;
  border: none;
}
  }


@include medium-desktop {
  body {
  margin: 0;
}

.vl {
  border-left: 1px solid lightgray;
    height: inherit;
    position: absolute;
    left: 6%;
    margin-left: 0;
    top: 0;
}
.site-header {
  padding: 0;
  width: 100%;
  height: 3em;
  border-bottom: 1px solid lightgray;
}

.site-header * {
    display: inline;
}


.header-search {
  margin: 0 0 0 2.5em;
  cursor: pointer;
  font-size:1.3em;

  &__ico {
    padding-top: 1.3em;
    font-size: 0.7em;
  }
  &__togglesearch {
    background: #ffffff;
    position: fixed;
    padding:  0;
    left: 5em;
    width: 94%;
    height: 3.3em;
    line-height: 0;

  }
  &__togglesearch:before {
    content: "";
    position: absolute;
    top: -32px;
    right: 13px;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-top: 14px solid transparent;
    border-bottom: 14px solid #d80b15;
  }
  &__togglesearch input[type="text"] {
   width: 50.5em;
    padding: 0.5em;
    margin-top: 1%;
  }
  &__togglesearch input[type="button"] {
   width: 7em;
    height: inherit;
    padding:  0;
    background: gray;
    color: #fff;
    float:right;
    border: 1px solid gray;
    outline: none;
    cursor: pointer;
  }

  &__x {
        float:right;

    width: 4em;
    height: inherit;
    padding: 5px 0;
    background: #0a0a0a;
    color: #fff;
    border: 1px solid gray;
    outline: none;
    cursor: pointer;
  }
}

.logo {
  margin: 0.0 0 0 37%;
}

.menu {
  padding:0;
  font-size: 0.9em;
  cursor: pointer;

  &__ico {
    font-size: 1em;
    padding:1em;
  }

  &__h1 {
    font-size: 1em;
    font-family: $font-roboto;
    display: inline-block;
  }
}

.btn {
  padding: 0;
    height: 99%;
  width: 18em;
  float: right;
  background-color: red;
  border: none;
  color: white;
  font-size: 0.9em;
  // margin: 0 0 0 38em;
}

.side-nav {
  &__languge {
    padding: 1.7em 0 0 1em;
    font-size: 0.7em;
    font-weight: 600;
    color: black;
    text-decoration: underline;
    display: flex;
  }
  &__img {
    margin: 0 0 0 1em;
    height: 1.2em;
  }

  &__item {
    padding: 1.5em 0 0 1em;
    display: block;
    text-decoration: none;
    font-size: 0.9em;
    font-weight: 600;
    color: black;
  }
  &__topic {
    padding: 1em 0 0 6em;
    font-size: 1em;
    font-weight: 400;
    color: black;
    display: flex;
  }
}
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.6);

  &__content {
    background-color: white;
    height: 100vh;
    width: 13em;
    position: absolute;
  }
  &__close {
    margin: -1.4em 0 0 12em;
    font-size: 0.8em;
    padding: 0 0 0.5em 0;
    display: block;
    text-decoration: none;
    cursor: pointer;
  }
}
hr {
  height: 1px;
  background-color: #f0f0f0;
  border: none;
}
}

@include large-desktop {
  body {
  margin: 0;
}

.vl {
  border-left: 1px solid lightgray;
    height: inherit;
    position: absolute;
    left: 6%;
    margin-left: 0;
    top: 0;
}
.site-header {
  position: sticky;
  top: 0;
  padding: 0;
  width: 100%;
  height: 3em;
  border-bottom: 1px solid lightgray;
  background-color: white;
}

.site-header * {
    display: inline;
}


.header-search{
  margin: 0 0 0 4em;
  cursor: pointer;

  &__ico {
    font-size: 1.5em;
  }
  &__togglesearch {
    background: #ffffff;
    position: fixed;
    margin-left: 1em;
    left: 7.5em;
    width: 93%;
    height: 5em;
    line-height: 0;
  }
  &__togglesearch:before {
    content: "";
    position: absolute;
    top: -32px;
    right: 13px;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-top: 14px solid transparent;
    border-bottom: 14px solid #d80b15;
  }
  &__togglesearch input[type="text"] {
 width: 50.5em;
    padding: 0.5em;
    margin-top: 1%;
  }
  &__togglesearch input[type="button"] {
    width: 7em;
    height: inherit;
    padding: 5px 0;
    background: gray;
    color: #fff;
    float:right;
    border: 1px solid gray;
    outline: none;
    cursor: pointer;
  }

  &__x {
    width: 4em;
    height: inherit;
        float:right;

    padding: 5px 0;
    background: #0a0a0a;
    color: #fff;
    border: 1px solid gray;
    outline: none;
    cursor: pointer;
  }
}

.logo {
  margin: 0.5em 0 0 44em;
}

.menu {
  padding: 0 0 0 0.2em;
  font-size: 0.5em;
  cursor: pointer;

  &__ico {
    font-size: 2em;
    padding:1em;
  }

  &__h1 {
    font-size: 2em;
    font-family: $font-roboto;
    display: inline-block;
  }
}

.btn {
  padding: 0;
  height: 99%;
     width: 20em;
    float: right;
    background-color: #c32e2e;
    border: none;
    color: white;
    font-size: 1em;
}

.side-nav {
  &__languge {
    padding: 1.7em 0 0 1em;
    font-size: 0.7em;
    font-weight: 600;
    color: black;
    text-decoration: underline;
    display: flex;
  }
  &__img {
    margin: 0 0 0 1em;
    height: 1.2em;
  }

  &__item {
    padding: 1.5em 0 0 1em;
    display: block;
    text-decoration: none;
    font-size: 0.9em;
    font-weight: 600;
    color: black;
  }
  &__topic {
    padding: 1em 0 0 6em;
    font-size: 1em;
    font-weight: 400;
    color: black;
    display: flex;
  }
}
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.6);

  &__content {
    background-color: white;
    height: 100vh;
    width: 13em;
    position: absolute;
  }
  &__close {
    margin: -1.4em 0 0 12em;
    font-size: 0.8em;
    padding: 0 0 0.5em 0;
    display: block;
    text-decoration: none;
    cursor: pointer;
  }
}
hr {
  height: 1px;
  background-color: #f0f0f0;
  border: none;
}
}

</style>
