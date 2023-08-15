export const useNavStore = defineStore("NavStore", {
  state: () => ({ open: false, currentPage: "" }),
  getters: {
    getNavState: (state) => state.open,
  },
  actions: {
    trigger() {
      this.open = !this.open;
    },
    setCurrentPage(slug: string) {
      this.currentPage = slug;
    },
  },
});
