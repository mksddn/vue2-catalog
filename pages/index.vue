<template>
  <div>
    <b-container>

      <b-row>
        <b-col>
          <h2>Выберите элемент или воспользуйтесь поиском выше ☝️</h2>
          <hr>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="6" class="m-auto">
          <div class="overflow-auto">
            <b-pagination v-model="currentPage" :total-rows="this.posts.length" :per-page="perPage"
              aria-controls="itemList" align="center">
            </b-pagination>
          </div>
        </b-col>
      </b-row>

      <b-row>

        <b-card-group>
          <b-col :class="{ 'col-sm-6 col-md-4 col-lg-3 col-12': isCol, 'col-12': !isCol }"
            v-for="item of postsFromPaginate" :key="item.id">

            <!-- <router-link class="post-item" :to="{ path: `/posts/${post.id}`, params: { id: post.id } }">
            <b-card img-src="https://placekitten.com/300/300" :img-top="isCol" :img-left="!isCol" ref="imgCard"
              img-alt="Card image" class="mb-3">
              <b-card-text>
                {{ post.title }}
              </b-card-text>
              <b-button>Подробнее</b-button>
            </b-card>
          </router-link> -->

            <b-card :title="item.title" :img-src="'https://placekitten.com/300/300'" img-alt="Image" :img-top="isCol"
              :img-left="!isCol" tag="article" class="mb-2 mx-auto">
              <!-- <b-card-text>{{ item.title }}</b-card-text> -->
              <b-button variant="primary" @click="showModal(item);">Подробнее</b-button>
            </b-card>

          </b-col>
        </b-card-group>

        <div>
          <b-modal id="modal1" :title="selectedItem.title">
            <p class="my-4">{{ selectedItem.body }}</p>
          </b-modal>
        </div>

      </b-row>

    </b-container>
  </div>
</template>

<script>
export default {
  
  layouts: 'default',

  data: () => ({
    // loading: true,
    currentPage: '1',
    perPage: '8',
    selectedItem: {},
  }),

  computed: {
    isCol() {
      return this.$store.getters['posts/isCol']
    },
    posts() {
      return this.$store.getters['posts/posts']
    },
    postsFromPaginate() {
      return this.posts.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage,
      );
    },
  },

  methods: {
    showModal(item) {
      this.selectedItem = item;
      this.$root.$emit("bv::show::modal", "modal1");
    },
    // openPost(post) {
    //   this.$router.push('/posts/' + post.id)
    // }
  },

  async mounted() {
    await this.$store.dispatch('posts/fetchPosts')
    this.loading = false
    // console.log(this.posts)
  },

}
</script>

<style lang="scss" scoped>
.card-group {
  width: 100%;
}

a.post-item {
  color: inherit;

  &:hover {
    text-decoration: none;
  }
}

.card-img-left {
  max-width: 30%;
  object-fit: cover;
}

.card-title {
  font-size: 1.2rem;
  font-weight: 400;
}
</style>