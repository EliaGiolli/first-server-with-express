const middlewareProva = (req,res,next)=>{
    const {method,url} = req;
    const time = new Date().getMilliseconds()
    console.log(method,url,time)
    next()
}
module.exports = middlewareProva