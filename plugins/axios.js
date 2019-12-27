export default function ({ $axios }) {
  $axios.setToken(document.cookie, "Bearer");
}