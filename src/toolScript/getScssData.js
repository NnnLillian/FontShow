/**
 * node操作
 * 获取当前文件夹下所有文件名和文件路径最终得到数据结构如
 * $stars: (
 *   ("font-name": '方方先锋体', "font-url": url(../fonts/字魂/全媒体发布/字魂100号-方方先锋体.ttf)),
 *   ("font-name": '小确幸', "font-url": url(../fonts/字魂/全媒体发布/字魂101号-小确幸.ttf)),
 *   ("font-name": '妞妞体', "font-url": url(../fonts/字魂/全媒体发布/字魂102号-妞妞体.ttf)),
 *   ("font-name": '海棠手书', "font-url": url(../fonts/字魂/全媒体发布/字魂103号-海棠手书.ttf))
 * ) 
 */ 

//引用文件系统模块
fs = require('fs')

function readFileList(path, filesList) {
    var files = fs.readdirSync(path);
    files.forEach(function (itm, index) {
        var stat = fs.statSync(path + itm);
        if (stat.isDirectory()) {
            //递归读取文件
            readFileList(path + itm + "/", filesList)
        } else {
            var font = `("font-name": '${itm.replace(/.ttf/i,'').replace(/^(字魂)\d+号-/,'')}', "font-url": url(${path}${itm.replace("(","%28").replace(")","%29")}))\n`
            filesList.push(font);
        }

    })

}
var getFiles = {
    //获取文件夹下的所有文件
    getFileList: function (path) {
        var filesList = [];
        readFileList(path, filesList);
        return filesList;
    },
};

var list = getFiles.getFileList('../fonts/')

var a = `
$stars: (
    ${list.join(',')}
);
`

//导出文件到json
fs.writeFile('../fontStyles/_fontStore.scss', a,  (err) => {
    if (err) console.log(err)
})
