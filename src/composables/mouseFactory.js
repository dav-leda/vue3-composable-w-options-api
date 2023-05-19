
const { floor, random } = Math

export const UseMouse = (x = 0, y = 0) => ({

  x, y,

  rand: floor(random() * 100),

  update(event) {
    this.x = event.pageX
    this.y = event.pageY
  }
})

