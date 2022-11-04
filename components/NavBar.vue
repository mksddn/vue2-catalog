<template>
  <b-navbar toggleable="lg" type="dark">
    <b-container>
      <b-navbar-brand to="">NavBar</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-form @click.prevent="">
          <b-form-input size="sm" class="mr-sm-2" placeholder="Начните вводить..." v-model="search"
            @input="searchPosts"></b-form-input>
          <!-- <b-button size="sm" class="my-2 my-sm-0" type="submit">Поиск</b-button> -->
        </b-nav-form>
      </b-navbar-nav>
      <b-navbar-nav class="ml-3">
        <div class="card-modes">
          <span data-tooltip="Вертикальные карточки" class="icon grid-vertical" :class="{ actived: isCol }"
            @click="$store.commit('posts/setView', true)"></span>
          <span data-tooltip="Горизонтальные карточки" class="icon grid-horizontal" :class="{ actived: !isCol }"
            @click="$store.commit('posts/setView', false)"></span>
        </div>
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>

<script>
export default {

  data() {
    return {
      search: '',
    }
  },

  computed: {
    isCol() {
      return this.$store.getters['posts/isCol']
    }
  },

  methods: {
    searchPosts() {
      this.$store.commit('posts/filteredPosts', this.search)
    }
  }

}
</script>

<style lang="scss" scoped>
nav.navbar {
  margin-bottom: 50px;
  background-color: #3f51b5;
}
.card-modes {
  display: flex;
  flex-grow: 0;
}
.icon {
  display: block;
  width: 24px;
  height: 24px;
  background-color: #fff;
  margin-right: 2px;
  cursor: pointer;
}
.icon.actived {
  background-color: rgb(58, 199, 255);
}
.icon.grid-vertical {
  -webkit-mask-image: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDMuNzVIM3Y3aDd2LTd6bTExIDBoLTd2N2g3di03em0wIDExaC03djdoN3YtN3ptLTExIDBIM3Y3aDd2LTd6IiBzdHJva2U9IiMxRTFFMUUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==);
  mask-image: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDMuNzVIM3Y3aDd2LTd6bTExIDBoLTd2N2g3di03em0wIDExaC03djdoN3YtN3ptLTExIDBIM3Y3aDd2LTd6IiBzdHJva2U9IiMxRTFFMUUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==);
}
.icon.grid-horizontal {
  -webkit-mask-image: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIxIDMuOTA1SDN2N2gxOHYtN3ptMCAxMUgzdjdoMTh2LTd6IiBzdHJva2U9IiM4MThDQTkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==);
  mask-image: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIxIDMuOTA1SDN2N2gxOHYtN3ptMCAxMUgzdjdoMTh2LTd6IiBzdHJva2U9IiM4MThDQTkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==);
}
</style>