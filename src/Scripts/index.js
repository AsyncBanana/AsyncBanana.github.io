const MessageTable = ["Hello and welcome to my (awesomebanana2018) website!","I'm a beginner full stack developer with BIG ambitions!",
"I have worked on projects in Roblox (Lua), Flutter (Dart), and the web!","This website was built using Parcel with PostCSS and icons from FlatIcon and it is open source on Github!",
"More is coming soon to this website!"]
const Left3d = document.getElementById('Left3dText')
const CharWait = 50
function IterateChar(String, Index){
  if (String.length < Index) {
    Left3d.innerHTML = Left3d.innerHTML + '<br>'
    return
  }
  Left3d.innerHTML = Left3d.innerHTML + String.charAt(Index)
  setTimeout(() => {IterateChar(String,Index+1)},CharWait)
}
function AddText(index){
  if (MessageTable.length <= index){
    document.getElementById('MoreStuff').style.display = 'block'
    return
  }
  const String = MessageTable[index]
  IterateChar(String,0)
  setTimeout(() => {AddText(index+1)},(String.length * CharWait) + 1000)
}
AddText(0)
