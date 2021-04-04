<template>
<div class="a">
  <div class="container">
    <div class="info">
      <img class="info__img" src="@/assets/img/pic.png" />
      <h2 class="info__h2">James Benjamin</h2>
      <div class="info__profile" @click="openProfile">Profile information</div>
      <br />
      <div class="info__password" @click="openPassword">Change Password</div>
    </div>
    <div class="profile" v-if="profile">
      <h1 class="profile__h1">Your profile</h1>

      <div class="profile__info">
        <form>
          <h2>Update your profile information</h2>

          <label for="fname">First Name</label>
          <input
          class="profile__input"
            type="text"
            id="fname"
            name="firstname"
            placeholder="James"
            required
          />
          <br />

          <label for="lname">Last Name</label>
          <input
           class="profile__input"
            type="text"
            id="lname"
            name="lastname"
            placeholder="Benjamin"
            required
          />
          <br />
          <label for="lname">Email</label>
          <input
            class="profile__input"
            type="text"
            id="email"
            name="email"
            placeholder="james@info.dk"
            required
          />
          <br />
          <input class="profile__save" type="submit" value="Save" />
        </form>
      </div>
    </div>

    <div class="password" v-if="password">
      <h1 class="password__h1">Your password</h1>

      <div class="password__info" @click="showPassword($event)">
        <form>
          <h2>Change your password</h2>

          <label for="fname">Current password</label>
          <input class="password__input" :type="oldPass" name="olde password"  required />
          <i  class="password__ico fas" v-bind:class="changeOld" id="oldpass"></i>

          <label for="lname">New password</label>
          <input class=" password__input" :type="newPass" name="new password" required />
          <i class="password__ico fas" v-bind:class="changeNew" id="newpass"></i>

          <label for="password">Confirm password</label>
          <input class="password__input" :type="confirmPass" name="confirm password" required />
          <i class="password__ico fas" v-bind:class="changeConfirm" id="confirmpass"> </i>

          <input class="password__save" type="submit" value="Save" />
        </form>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      profile: true,
      password: false,
      oldPass: "password",
      newPass: "password",
      confirmPass: "password",
      hideOld: true,
      hideNew: true,
      hideConfirm: true,
      show: false,
    };
  },
  computed: {
    changeOld: function () {
      return {
       'fa-eye': this.hideOld,
       'fa-eye-slash': !this.hideOld
      };
    },
    changeNew: function () {
      return {
       'fa-eye': this.hideNew,
       'fa-eye-slash': !this.hideNew
      };
    },
    changeConfirm: function () {
      return {
       'fa-eye': this.hideConfirm,
       'fa-eye-slash': !this.hideConfirm
      };
    },
  },
  methods: {
    openProfile() {
      this.profile = true;
      this.password = false;
    },

    openPassword() {
      this.password = true;
      this.profile = false;
    },
    showPassword(event) {
      let p = event.target.id;
      switch (p) {
        
        case "oldpass":
          console.log(p + ' clicked')
          if (this.oldPass == 'text') {
            this.oldPass = 'password';
            this.hideOld = true;
          } else {
            this.oldPass = 'text';
            this.hideOld = false;
          }
          break;
        
          case "newpass":
            console.log(p + ' clicked')
             if (this.newPass == 'text') {
            this.newPass = 'password';
            this.hideNew = true;

            
          } else {
            this.newPass = 'text';
            this.hideNew = false;
 
            }
            break;
            
            case "confirmpass":
            console.log(p + ' clicked')
             if (this.confirmPass == 'text') {
            this.confirmPass = 'password';
            this.hideConfirm = true;

            
          } else {
            this.confirmPass = 'text';
            this.hideConfirm = false;

            
            }
             break;

          }

      
  
  },}
  
}
</script>

<style lang="scss" scoped>
.a{
    width:100%;
        background-color: #f2f2f2;
        height: 92vh;
  }
  .container {
    font-family: $font-roboto;
    display: grid;
    grid-template-columns: 20% 80%;
    height: auto;
    width:80%;
    margin: auto;
    padding: 8em 0 0 15em;
    }
.profile {
  padding-left: 5em;
  &__h1 {
    /* text-align: center;
    margin: 2em 16em 1em 4em; */
    font-size: 2em;
    color: black;
    font-weight: bold;
  }
  &__info {
    width: 53%;
    height: auto;
    // float: right;
    border: 1px solid black;
    padding: 0.5em 2em 1em 2em;
    overflow: auto;   
  }
  &__input{
  width: 100%;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin: 2em 0 2em 0em;
  resize: vertical;

  }
   &__save{
  background-color: lightgray;
  color: white;
  padding: 15px 33px;
  // margin: 2em 89.5%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;

}}
.password {
  padding-left: 5em;
  &__h1 {
    /* text-align: center;
    margin: 2em 15em 1em 4em; */
    font-size: 2em;
    color: black;
    font-weight: bold;
  }
  &__info {
    width: 53%;
    height: auto;
    // float: right;
    border: 1px solid black;
    padding: 0.5em 2em 1em 2em;
    overflow: auto; 
    
  }
  &__btn {
    margin: 0 0 0 55em;
    font-size: 0.7em;
    cursor: pointer;
  }
   &__input{
   width: 100%;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin: 2em 0 2em 0em;
  resize: vertical;
  }
  &__ico{
    display: flex;
    margin: -3em 0 2em 97%;
    cursor: pointer;
  }
  &__save{
  background-color: lightgray;
  color: white;
  padding: 15px 33px;
  // margin: 2em 89.5%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
  }
}



input[type="submit"]:hover {
  background-color: #1a7cc3;
}

.info {
  // padding: 0;
  
  &__img {
    height: 11em;
    width: 11em;
    // margin: 10em 0 0 10em;
    border: 1px solid gray;
    border-radius: 50%;
    display: block;
    margin: auto;
  }
  &__h2 {
  // padding: 1em 0 1em 3em;
    color: black;
    font-weight: bold;
    font-size: 26px;
    // margin: 0 0 0 2em;
    // width:12em;
    text-align: center;
  }
  &__profile {
    border: 2px solid;
    padding: 0.5em;
    width: 70%;
    font-size: 20px;
    cursor: pointer;
    text-align: center;
    // margin: 0 0 0 7em;
    display: block;
    margin: auto;

  }
  &__password {
  border: 2px solid;
    padding: 0.5em;
    width: 70%;
    font-size: 20px;
    cursor: pointer;
    text-align: center;
    // margin: 0 0 0 7em;
    display: block;
    margin: auto;
  }
}

@include medium-desktop {
  .info {
    &__img {
      height: 10em;
      width: 10em;
    }
    &__h2 {
      font-size: 22px;
    }
    &__profile {
      font-size: 18px;
    }
    &__password {
      font-size: 18px;
    }
  }
}

@include small-desktop {
  .info {
    &__img {
      height: 10em;
      width: 10em;
    }
    &__h2 {
      font-size: 22px;
    }
    &__profile {
      font-size: 18px;
    }
    &__password {
      font-size: 18px;
    }
  }
  .profile {
    &__info {
      width: 80%;
    }
  }

  .password {
    &__info {
      width: 80%;
    }
  }
}

@include xs-Desktop {
  .container {
    padding: 8em 0 0 8em;
  }
  
  .info {
    &__img {
      height: 9em;
      width: 9em;
    }
    &__h2 {
      font-size: 20px;
    }
    &__profile {
      width: 100%;
      font-size: 16px;
    }
    &__password {
      width: 100%;
      font-size: 16px;
    }
  }

  .profile {
    &__info {
      width: 80%;
    }
  }
  .password {
    &__info {
      width: 80%;
    }
  }
}
</style>