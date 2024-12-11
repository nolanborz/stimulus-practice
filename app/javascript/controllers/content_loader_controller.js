import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="content-loader"
export default class extends Controller {
  static values = { url: String, refreshInterval: Number }
  startRefreshing() {
    this.refreshTimer = setInterval(() => {
      this.load()
    }, this.refreshIntervalValue)
  }
  
  connect() {
    this.load()

    if (this.hasRefreshIntervalValue) {
      this.startRefreshing()
    }
  }

  load() {
    fetch(this.urlValue)
    .then(response => response.text())
    .then(html => this.element.innerHTML = html)
  }

  stopRefreshing() {
    if (this.refreshTimer) {
      clearInterval(this.refreshTimer)
    }
  }

  disconnect() {
    this.stopRefreshing()
  }
}
