function toggleMode() {
 const html = document.documentElement
 html.classList.toggle('light')

//pegar a tag img
const img = document.querySelector("#profile img")

//substituir imagem
if(html.classList.contains('light')){
  //se tiver light mode, adicionar a imagem light
 img.setAttribute('src', './assets/avatar-light.png.jpg')
} else {
  //se tiver sem light mode, manter a imagem original
  img.setAttribute('src', './assets/avatar.png.jpg')

}
}