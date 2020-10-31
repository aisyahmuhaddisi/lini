<template>
  <div class="add-speakers">
    <h2 v-if="id==null">Tambah Speaker</h2>
    <h2 v-else>Edit Speaker</h2>
    <form class="m-3">
      <div class="row">
        <div class="col-6">
          <div class="form-group">
            <label for="inputEmail">Nama Speaker</label>
            <input
              v-model="speaker.name"
              type="text"
              class="form-control"
              id="inputEmail"
              aria-describedby="inputEmail"
            />
          </div>
          <div class="form-group">
            <label for="inputUniv">Universitas</label>
            <input
              v-model="speaker.univ"
              type="text"
              class="form-control"
              id="inputUniv"
              aria-describedby="inputUniv"
            />
          </div>
          <div class="form-group">
            <label for="inputKategoru">Kategori</label>
            <div v-if="speaker.category">{{speaker.category}}</div>
            <select class="selectpicker d-block" multiple v-model="speaker.category">
              <option
                v-for="(cat, index) in category"
                :key="index"
                :value="cat.index"
              >
                {{ cat.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label for="inputExperiences">Pengalaman</label>
            <input
              class="form-control mb-3"
              v-model="experience"
              id="inputExperiences"
              aria-describedby="inputExperiences"
              @keyup.enter="addExperiences"
            />
            <div
              v-for="(item, index) in speaker.experiences"
              :key="index"
              id="tag"
              class="d-block"
            >
              <div class="tag-data" style="width: max-content; padding: 4px">
                {{ item }}
                <span
                  @click="deleteExp(index)"
                  style="margin: 2px; cursor: pointer"
                  >x</span
                >
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="inputPic">Foto Pembicara</label>
            <input type="file" class="form-control-file" id="inputPic" />
          </div>
        </div>
      </div>
      <div class="float-right">
        <button
          v-if="id == null"
          type="reset"
          class="btn btn-primary"
          @click="save()"
        >
          Submit
        </button>
        <button v-else type="reset" class="btn btn-warning" @click="update(id)">
          Edit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddSpeakers",
  props: {
    msg: String,
  },
  data() {
    return {
      experience: "",
      category: [
        {
          name: "Semua",
          index: 0,
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
    };
  },
  mounted() {
    if (this.id == null) {
      this.$store.commit("SET_SPEAKER", {
        name: null,
        univ: null,
        category: [],
        experiences: [],
      });
    } else {
      this.$store.dispatch("GET_DETAIL", this.id);
    }
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    speaker() {
      return this.$store.getters.SPEAKER;
    },
  },
  methods: {
    save() {
      this.$store.dispatch("ADD_SPEAKER", this.speaker);
      this.$router.push("/admin");
    },
    addExperiences() {
      this.speaker.experiences.push(this.experience);
      this.experience = "";
    },
    update(id) {
      this.$store.dispatch("EDIT_SPEAKER", id, this.speaker);
      this.$router.push("/admin");
    },
    deleteExp(id) {
      this.speaker.experiences.splice(id, 1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add-speakers {
  margin-top: 140px;
  margin-right: 40px;
  margin-left: 40px;
}
</style>
