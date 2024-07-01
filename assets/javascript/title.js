var i=0;
setInterval(function(){
    var titles=[
"l",
"u",
"s",
"t",
"s",
"t",
"a",
"r",
"luststar's",
"private",
"instagram",
"higher",
"than",
"a",
"balloon",
"shoutout",
"mysterio",
"zach",
"zakk",
"torn",
"wessai",
"noshi",
"and",
"more",
"the reveloution",
"will not be televised",
]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 500);
