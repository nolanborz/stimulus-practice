import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "name" ]
  greet() {
    console.log(`Hello, ${this.name}, you son of a b%$#^`)
  }
  get name() {
    return this.nameTarget.value
  }
}
