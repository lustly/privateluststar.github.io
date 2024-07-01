var i=0;
setInterval(function(){
    var titles=[
"|A|",
"|AJ|",
"|AJT|",
"|AJTo|",
"|AJToo|",
"|AJTooS|",
"|AJTooSt|",
"|AJTooSte|",
"|AJTooStea|",
"|AJTooSteal|",
"|AJTooStealt|",
"|AJTooStealth|",
"|AJTooStealthy|",
"|AJTooStealth|",
"|AJTooStealt|",
"|AJTooSteal|",
"|AJTooStea|",
"|AJTooSte|",
"|AJTooSt|",
"|AJTooS|",
"|AJToo|",
"|AJTo|",
"|AJT|",
"|AJ|",
"|A|",
"||",
]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 500);
