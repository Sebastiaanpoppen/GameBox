<template>
  <div class="container-fluid">
    <div class="row margin-tp-100">
      <div class="col-sm-12">
        <div v-for="i in Math.ceil(Object.keys(items).length / 3)" class="row justify-content-center">
          <div v-for="item in Object.keys(items).slice((i-1) * 3, i * 3)" v-bind:class="{active: isActive}" @click="squareClicked(item)" class="col-sm-4 squared">
            <div>
              {{checkClicked(item)}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      playerOne: true,
      isActive: false,
      items: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
      }
    }
  },
  methods: {
    squareClicked(number) {
      this.items[number] = true;
      this.playerOne = this.playerOne ? false : true;
    },
    checkClicked(item) {
      if ((this.items[item] === true) && this.playerOne) {
        return "X"
      } else if ((this.items[item] === true) && !this.playerOne) {
        return "O"
      } else {
        return
      }
    }
  },
};
</script>
