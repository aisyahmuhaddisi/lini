<template>
  <div class="admin">
    <div class="row m-3 speaker-header">
      <h2>Daftar Pembicara</h2>
      <router-link :to="{ name: 'TambahPembicara' }"
        ><button class="btn btn-primary">Tambah</button></router-link
      >
    </div>
    <table
      id="example"
      class="datatable table table-hover table-bordered text-center"
      style="width: 100%"
    >
      <thead>
        <tr>
          <th>Nama</th>
          <th>Kategori</th>
          <th>Universitas</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in speakers" :key="index">
          <td>{{ item.name }}</td>
          <td>
            <p v-for="(cat, id) in item.category" :key="id">
              {{ category[cat].name }}
            </p>
          </td>
          <td>{{ item.univ }}</td>
          <td class="text-center">
            <button class="btn m-2 btn-success" @click="seeDetail(item._id)">
              <i class="fa fa-eye" style="color: white"></i>
            </button>
            <button class="btn m-2 btn-warning" @click="edit(item._id)">
              <i class="fa fa-pencil" style="color: white"></i>
            </button>
            <button
              class="btn m-2 btn-danger"
              data-toggle="modal"
              data-target="#globalModal"
              @click="id = item._id"
            >
              <i class="fa fa-trash" style="color: white"></i>
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>Nama</th>
          <th>Kategori</th>
          <th>Universitas</th>
          <th>Aksi</th>
        </tr>
      </tfoot>
    </table>
    <div
      class="modal fade"
      id="globalModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered p-3">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close m-0 p-0"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div>
              <div class="d-flex flex-column">
                <form>
                  <h3 class="text-center">Apakah Anda Yakin?</h3>
                  <div class="d-flex">
                    <button
                      class="btn m-2 w-50 btn-outline-warning mb-3"
                      data-dismiss="modal"
                      data-backdrop="false"
                    >
                      Tidak
                    </button>
                    <button
                      class="btn m-2 w-50 btn-warning mb-3"
                      data-dismiss="modal"
                      data-backdrop="false"
                      @click="confirm()"
                    >
                      Ya
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Admin",
  props: {
    msg: String,
  },
  components: {},
  data() {
    return {
      id: "",
    };
  },
  mounted() {
    this.getSpeakers();
  },
  computed: {
    speakers() {
      return this.$store.getters.SPEAKERS;
    },
    category() {
      return this.$store.getters.CAT;
    },
  },
  methods: {
    getSpeakers() {
      this.$store.dispatch("GET_SPEAKERS");
    },
    seeDetail(id) {
      this.$router.push({ name: "DetailPembicara", params: { id: id } });
    },
    edit(id) {
      this.$router.push({ name: "TambahPembicara", params: { id: id } });
    },
    async confirm() {
      await this.$store.dispatch("DELETE_SPEAKER", this.id);
      await this.getSpeakers();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.admin {
  margin-top: 20px;
  margin-right: 40px;
  margin-left: 40px;
}
.modal-header {
  justify-content: flex-end;
}
.speaker-header {
  justify-content: space-between;
}
</style>
