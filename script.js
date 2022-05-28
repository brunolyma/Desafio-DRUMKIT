"use strict"
const text = ["A", "S", "D", "F", "G", "H", "J", "K"]
const sounds = {
  A: "ride.wav",
  S: "clap.wav",
  D: "hihat.wav",
  F: "kick.wav",
  G: "openhat.wav",
  H: "boom.wav",
  J: "snare.wav",
  K: "tom.wav",
}
let worked = false

function divCreator(text) {
  text.forEach((character) => {
    const div = document.createElement("div")
    div.classList.add("key")
    div.id = character
    div.textContent = character
    document.getElementById("container").appendChild(div)
  })
}

function playSounds(event) {
  const audio = new Audio(`sounds/${sounds[event]}`)
  if (event != "container") audio.play()
}

const activeButton = (event) => {
  const char = event.target.id
  if (char == "start") {
    start()
  } else {
    playSounds(char)
  }
}

document.getElementById("container").addEventListener("click", activeButton)
addEventListener("keypress", (event) => {
  const key = event.key.toUpperCase()
  const keyExist = text.indexOf(key)

  if (key == "ENTER" || key == " ") {
    start()
  } else if (keyExist != -1) {
      playSounds(key)
    } else {
      console.log(
        `[ERRO] Tecla pressionada não é válida\nTente uma das seguintes (${text})`
      )
    }
  }
)

function start() {
  if (worked == false) {
    document.getElementById("start").classList.add("start")
    divCreator(text)
    worked = true
  }
}
