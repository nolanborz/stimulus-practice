// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import ClipboardController from "./clipboard_controller"
application.register("clipboard", ClipboardController)

import ContentLoaderController from "./content_loader_controller"
application.register("content-loader", ContentLoaderController)

import HelloController from "./hello_controller"
application.register("hello", HelloController)
