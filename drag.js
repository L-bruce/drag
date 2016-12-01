  function rnd(n,m){
            return parseInt(Math.random()*(m-n)+n);
        }
        window.onload=function(){
            for(var i=0;i<100;i++){
                var oDiv=document.createElement('div');
                oDiv.style.left=rnd(0,document.documentElement.clientWidth-100)+'px';
                oDiv.style.top=rnd(0,document.documentElement.clientHeight-100)+'px';
                oDiv.style.background='rgb('+rnd(0,256)+','+rnd(0,256)+','+rnd(0,256)+')';
                oDiv.className='drgdiv';
                oDiv.setAttribute('drag','true');
                document.body.appendChild(oDiv);
            }
            document.onmousedown=function(ev){
                var oEvent=ev||event;
                var oSrc=oEvent.srcElement||oEvent.target;
                if(oSrc.getAttribute('drag')=='true'){
                    var disX=oEvent.clientX-oSrc.offsetLeft;
                    var disY=oEvent.clientY-oSrc.offsetTop;
                    document.onmousemove=function(ev){
                        var oEvent=ev||event;
                        oSrc.style.left=oEvent.clientX-disX+'px';
                        oSrc.style.top=oEvent.clientY-disY+'px';
                    };
                    document.onmouseup=function(){
                        document.onmousemove=null;
                        document.onmouseup=null;
                    };
                    return false;
                }
            };
        };