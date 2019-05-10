export default function ({ store, redirect }) {
  if(!store.state._id && ! store.state.token) {
    return redirect('/login')
  }
}
