// Scholara demo server - plain Node.js, nothing to install.
const http=require('http'),fs=require('fs'),path=require('path'),{exec}=require('child_process');
const DIR=path.join(__dirname,'public');
const TYPES={'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml','.json':'application/json'};
let port=+process.env.PORT||3000;
const srv=http.createServer((req,res)=>{
  let u=decodeURIComponent(req.url.split('?')[0]);if(u==='/')u='/index.html';
  const f=path.join(DIR,path.normalize(u));
  if(!f.startsWith(DIR)||!fs.existsSync(f)||fs.statSync(f).isDirectory()){res.writeHead(404);return res.end('Not found')}
  res.writeHead(200,{'Content-Type':TYPES[path.extname(f)]||'application/octet-stream'});fs.createReadStream(f).pipe(res);
});
srv.on('error',e=>{if(e.code==='EADDRINUSE'&&port<3020){port++;srv.listen(port)}else console.log('Could not start:',e.message)});
srv.on('listening',()=>{
  const url='http://localhost:'+port;
  console.log('\n  Scholara demo is running at '+url+'\n  Your browser should open by itself.\n  Keep this window open while using the demo. Close it to stop.\n');
  exec((process.platform==='win32'?'start ""':process.platform==='darwin'?'open':'xdg-open')+' '+url);
});
srv.listen(port);
