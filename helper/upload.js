const path = require('path');
const multer= require('multer');

//set storage engine

const storage = multer.diskStorage(
    {destination:"./public/uploads/",
    filename:(req,file,cb)=>{
        cb(null,file.fieldname + "-"+ Date.now()+
        path.extname(file.originalname))
    }}
)

//init uload
const upload=multer({
    storage:storage,
    limits:{fileSize:10},
    fileFilter:(req,file,cb)=>{
        checkFileType(file,cb)

    }
}).single("file")
 
//check file type
checkFileType=(file,cb)=>{
    //allowe exit
    const filetypes = /jpeg|jpg|png|gif/;
    // check ext
    const extname= filetypes.test(path.extname(file.originalname)
    .toLowerCase())

    //check mime
    const mimetype = filetypes.test(file.mimetype) 

    if(mimetype && extname){
        return cb(null,true)
    }else{
        cb('Error:Images only!')
    }
}

