
// function getfolder(e) {
//     var files = e.target.files;
//     var path = files[0].webkitRelativePath;
//     var Folder = path.split("/");
//     alert(Folder[0]);
// }
const defaultPath = "C:\\dev\\Core\\web\\LDC.Core.Navigator";
const folderSelector = document.createElement('input');
folderSelector.setAttribute("type", "text");
folderSelector.value = defaultPath;
// folderSelector.setAttribute('onChange', getfolder(event));

export default folderSelector