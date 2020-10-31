import Vue from 'vue'
import Vuex from 'vuex'
// import data from '../data'
import axios from 'axios'

Vue.use(Vuex)

let user = window.localStorage.getItem('user')

export default new Vuex.Store({
  state: {
    speakers: [],
    speaker: {
      name: null,
      univ: null,
      category: [],
      experiences: [],
    },
    user: user == null ? null : JSON.parse(user),
    category: [
      {
        name: "Semua",
        index: null,
      },
      {
        name: "Pengembangan Diri",
        index: 1,
      },
      {
        name: "Politik Kampus",
        index: 2,
      },
      {
        name: "Public Speaking",
        index: 3,
      },
    ],
    header: 1
  },
  getters: {
    SPEAKERS: state => {
      return state.speakers
    },
    USER: state => {
      return state.user
    },
    SPEAKER: state => {
      return state.speaker
    },
    CAT: state => {
      return state.category
    },
    HEADER: state => {
      return state.header
    }
  },
  mutations: {
    SET_SPEAKER: (state, payload) => {
      state.speaker = payload
    },
    SET_SPEAKERS: (state, payload) => {
      state.speakers = payload
    },
    SET_USER: (state, payload) => {
      window.localStorage.setItem('user', JSON.stringify(payload))
    },
    SET_HEADER: (state, payload) => {
      state.header = payload
    }
  },
  actions: {
    async LOGIN(context, payload) {
      try {
        const { data } = await axios.post("http://localhost:5000/api/users/signin", payload)
        console.log(data)
        window.localStorage.setItem('user', JSON.stringify(data))
        location.reload()
      } catch (error) {
        console.log(error)
      }
    },
    async SIGNUP(context, payload) {
      try {
        const { data } = await axios.post("http://localhost:5000/api/users/signup", payload)
        console.log(data)
        window.localStorage.setItem('user', JSON.stringify(data))
        location.reload()
      } catch (error) {
        console.log(error)
      }
    },
    async ADD_SPEAKER(context, payload) {
      try {
        const { data } = await axios.post("http://localhost:5000/api/speakers", payload, {
          headers: {
            Authorization: 'Bearer ' + this.state.user.token
          }
        })
        console.log(this.state.user.token)
        context.commit("SET_SPEAKERS", data.data)
      } catch (error) {
        console.log(error)
      }
    },
    async GET_SPEAKERS(context, cat) {
      try {
        cat = cat == null ? '' : cat
        // cat = ''
        const { data } = await axios.get("http://localhost:5000/api/speakers?category="+cat)
        context.commit("SET_SPEAKERS", data)
        console.log(this.state.speakers)
      } catch (error) {
        console.log(error)
      }
    },
    async GET_DETAIL(context, payload) {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/speakers/${payload}`)
        context.commit("SET_SPEAKER", data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    },
    async EDIT_SPEAKER(context, id, payload) {
      try {
        const { data } = await axios.put(`http://localhost:5000/api/speakers/${id}`, payload, {
          headers: {
            Authorization: 'Bearer ' + this.state.user.token
          }
        })
        console.log(this.state.user.token)
        context.commit("SET_SPEAKERS", data.data)
      } catch (error) {
        console.log(error)
      }
    },
    async DELETE_SPEAKER(context, payload) {
      try {
        const { data } = await axios.delete(`http://localhost:5000/api/speakers/${payload}`, {
          headers: {
            Authorization: 'Bearer ' + this.state.user.token
          }
        })
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    },
  },
  modules: {
  }
})
