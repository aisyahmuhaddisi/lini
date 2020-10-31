<template>
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
</template>

<script>
export default {
  name: "Modal",
  props: {
    caseName: String,
    id: String,
  },
  methods: {
    confirm() {
      switch (this.caseName) {
        case "deleteSpeaker":
          this.$store.dispatch("DELETE_SPEAKER", this.id);
          break;
        default:
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-header {
  justify-content: flex-end;
}
</style>
