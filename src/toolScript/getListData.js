/**
 * node操作
 * 获取当前文件夹下所有文件名和文件路径最终得到数据结构如：
 *   var globalData = [{"name":"方方先锋体","url":"../fonts/字魂/全媒体发布/字魂100号-方方先锋体.ttf"},
 *   {"name":"小确幸","url":"../fonts/字魂/全媒体发布/字魂101号-小确幸.ttf"},
 *   {"name":"妞妞体","url":"../fonts/字魂/全媒体发布/字魂102号-妞妞体.ttf"},
 *   {"name":"海棠手书","url":"../fonts/字魂/全媒体发布/字魂103号-海棠手书.ttf"}] 
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
            var obj = {};//定义一个对象存放文件的路径和名字
            obj.name = itm.replace(/.ttf/i,'').replace(/^(字魂)\d+号-/,'')//名字
            obj.url = `${path}${itm}`
            filesList.push(obj);
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

list = getFiles.getFileList('../fonts/')

//导出文件到json
fs.writeFile('../../public/fontData.js', 'var globalData = ' + JSON.stringify(list),  (err) => {
    if (err) console.log(err)
})
