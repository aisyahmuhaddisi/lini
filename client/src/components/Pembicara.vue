<template>
  <div class="speaker">
    <div
      class="search-bar input-group mb-4 border rounded-pill p-1 w-50 mx-auto"
    >
      <input
        v-model="search"
        type="search"
        placeholder="Ayo cari pembicara"
        aria-describedby="button-addon3"
        class="form-control bg-none border-0"
      />
      <div class="input-group-append border-0">
        <button
          id="button-addon3"
          type="button"
          class="btn btn-link text-success"
        >
          <i class="fa fa-search"></i>
        </button>
      </div>
    </div>
    <div class="category">
      <ul class="nav nav-pills justify-content-center">
        <li
          class="nav-item m-2"
          v-for="(cat, index) in category"
          :key="index"
          @click="selected = index"
        >
          <a
            class="nav-link rounded-pill"
            :class="{ active: selected == index }"
            href="#"
            >{{ cat.name }}</a
          >
        </li>
      </ul>
    </div>
    <div class="ps">
      <div
        class="card"
        v-for="(speaker, index) in pagination"
        :key="index"
        @click="toDetail(speaker._id)"
      >
        <div class="circle-photo">
          <img :src="speaker.image" alt class="t" width="180" height="180px" />
        </div>
        <div class="paragarph-center">
          <h1 class="title">{{ speaker.name }}</h1>
          <small
            class="positon d-block"
            v-for="(cat, id) in speaker.category"
            :key="id"
            style="color: gray"
            >{{ category[cat].name }}
          </small>
        </div>
      </div>
    </div>
    <nav aria-label="Page navigation example" class="mb-5">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            v-if="page != 1"
            @click="page--"
          >
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li
          class="page-item"
          v-for="(pageNumber, id) in pages.slice(page - 1, page + 5)"
          :key="id"
          @click="page = pageNumber"
        >
          <a
            class="page-link"
            href="#"
            :class="{ active: page == pageNumber }"
            >{{ pageNumber }}</a
          >
        </li>
        <li class="page-item">
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click="page++"
            v-if="page < pages.length"
          >
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Speaker",
  props: {
    msg: String,
  },
  data() {
    return {
      page: 1,
      perPage: 1,
      pages: [],
      selected: 0,
      search: "",
    };
  },
  mounted() {
    this.getSpeakers();
    this.$store.commit("SET_HEADER", 4)
  },
  computed: {
    speakers() {
      return this.$store.getters.SPEAKERS;
    },
    pagination() {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      let speakers;
      console.log(page, perPage, from, to, speakers);
      if (this.search == "") {
        speakers = this.speakers.slice(from, to);
      } else {
        speakers = this.speakers.filter((speaker) => {
          return speaker.name.match(this.search);
        });
      }
      return speakers;
    },
    category() {
      return this.$store.getters.CAT;
    },
  },
  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.speakers.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    toDetail(id) {
      this.$router.push({ name: "DetailPembicara", params: { id: id } });
    },
    getSpeakers() {
      this.$store.dispatch("GET_SPEAKERS", this.category[this.selected].index);
    },
  },
  watch: {
    selected() {
      console.log("change");
      if (this.pages != []) {
        this.page = 1
        this.pages = [];
        this.setPages();
      } else {
        this.setPages();
      }
      this.getSpeakers();
    },
    speakers() {
      if (this.pages != []) {
        this.pages = [];
        this.setPages();
      } else {
        this.setPages();
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.speaker {
  margin-top: 120px;
}
.ps {
  margin-top: 120px;
}
.card {
  box-shadow: none;
}
.card :hover {
  cursor: pointer;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  background: teal;
}
a {
  color: teal;
}
input {
  margin: 3px;
}
.active {
  background: teal;
  color: white;
}
@media only screen and (max-width: 700px) {
  .speaker {
    margin-top: 175px;
  }
  .card {
    width: 150px;
    height: 200px;
    margin-bottom: 60px;
  }
  img {
    width: 100px;
    height: 100px;
  }
  .circle-photo {
    margin: -60px 0px 0px 12px;
    width: 104px;
    height: 104px;
  }
  .ps {
    margin-top: 70px;
    justify-content: center;
  }
}
</style>
