import store from '@/store'

export default {
  buttonid: {
    inserted (el, binding) {
      const buttons = store.state.d2admin.user.info.buttons.map(e => e._id)
      if (!buttons.includes(binding.value)) {
        el.remove()
      }
    }
  }
}
