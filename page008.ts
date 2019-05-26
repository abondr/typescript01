let obj1={
    a:"string1",
    b:123,
    c:"string2"
}
let {a,c,b} = obj1;
console.log(b);
console.log(a);
console.log(c);
let user = {
    fname : "Abon",
    lname : "Duttaroy",
    skills:{
        php:{
            name:"php",
            tags:"php,codeigniter,laravel"
        },
        mysql:{
            name:"mysql",
            tags:"mysql,trigger,stored precedure,stored function"
        },
        script:{
            name:"Vanila Script",
            tags:"javascript,typescript,jquery,angular,vue"
        }
    }
};

let {skills,skills:{php,script}} = user;
console.log(php.name);
console.log(script.tags);
console.log(skills);
let Employess = [
    {
        department:'it',
        name:'abon'
    },
    {
        department:'sales',
        name:'brkoli'
    }
];
for(var{department:dept1,name:nam1} of Employess){
    console.log(dept1+" "+nam1);
}

