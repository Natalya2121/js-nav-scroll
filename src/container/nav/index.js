class Nav {
  static #HOME_PAGE = 'https://google.com'

  static #back = () => {
    return history.back()
  }
  static #forward = () => {
    return history.forward()
  }
  static #reload = () => {
    return location.reload()
  }
  static #home = () => {
    return this.#changePage(this.#HOME_PAGE)
  }
  static #go = () => {
    try {
      const url = new URL(window.input.value)
      this.#changePage(url.href)
    } catch (err) {
      alert('Введіть коректну URL адресу')
    }
  }
  static #changePage = (href) => {
    return location.assign(href)
  }
  static init = () => {
    window.back.onclick = this.#back
    window.forward.onclick = this.#forward
    window.reload.onclick = this.#reload
    window.home.onclick = this.#home
    window.go.onclick = this.#go
    // .bind(this)

    window.input.value = location.href
  }
}

Nav.init()
