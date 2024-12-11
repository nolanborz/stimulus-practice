import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = [ "source" ]

  connect() {
    console.log("Clippy connected for 3!")
  }
  copy(event) {
    event.preventDefault()
    console.log("Copy method called!")
    navigator.clipboard.writeText(this.sourceTarget.value)
  }
}
