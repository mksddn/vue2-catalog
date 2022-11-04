export const state = () => ({
  allPosts: [],
  posts: [],
  isCol: true
})

export const mutations = {
  setPosts(state, posts) {
    state.allPosts = posts
    state.posts = posts
  },
  setView(state, isCol) {
    state.isCol = isCol
  },
  filteredPosts(state, search) {
    state.posts = state.allPosts.filter((post) => {
      const computedObj = {
        ...post
      }
      return Object.keys(computedObj)
        .some(key => ('' + computedObj[key]).toLowerCase().includes(search.toLowerCase()))
    })
  },
}

export const actions = {
  async fetchPosts({ commit }) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=50')
    const posts = await res.json()
    commit('setPosts', posts)

    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': '6e0d58b175mshe069a3a1556a1b3p1fff3djsnc21b88ba93f8',
    //     'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    //   }
    // };

    // const res = await fetch('https://imdb8.p.rapidapi.com/title/find?q=simpsons', options)

    // const posts = await res.json()
    // console.log(posts.results);
    // commit('setPosts', posts.results)
  }
}

export const getters = {
  posts: state => state.posts,
  postById: (state) => (id) => {
    return state.posts.find(post => post.id == id)
  },
  isCol: state => state.isCol
}

