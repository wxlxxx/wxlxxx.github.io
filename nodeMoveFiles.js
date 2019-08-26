const fs = require('fs')
const path = require('path')
const stat = fs.stat

let src = path.join(__dirname, './blog/dist')
let dist = path.join(__dirname, './')

let copy = function( src, dist ){
	fs.readdir(src, function(err, files){
		if(err){
			throw err
		}else{
			files.forEach(function(file){
				let _src = src+'/'+file
				let _dist = dist+'/'+file
				stat(_src, function(err, st){
					if (err) {
						throw err
					}else{
						if (st.isFile()) {
							let readerStream = fs.createReadStream(_src)
							let writerStream = fs.createWriteStream(_dist)
							readerStream.pipe(writerStream)
						}else if( st.isDirectory() ) {
							exists( _src, _dist, copy )
						}
					}
				})
			})
		}
	})
}

// 判断目标目录是否存在
let exists = function( src, dist, callback ){
    fs.exists( dist, function( exists ){
        if( exists ){
            callback( src, dist )
        }else {
        	fs.mkdir( dist, function(){
            	callback( src, dist )
            })
        }
    })
}

exists( src, dist, copy )