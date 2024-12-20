/*Code For Input of Each Buttons*/
/*Selecting All Necessary Elements & Objects*/
let calc__screen_small = $('.calc__screen-small');
let calc__screen_big = $('.calc__screen-big');
var virtual_memory = "";
var answers_memory;
var answers_memory1;

var a = -1;
var b = -1;

/*Memory For Previous Answers*/
let return_memory = [];

// let small__text = $('.small__text');

/*For The Numeric Keys*/
/*Button 7*/
$('.seven').on("click", ()=>{
    calc__screen_small.val(calc__screen_small.val() + "7");
    virtual_memory += "7";
});

/*Bitton 8*/
$('.eight').on("click", ()=>{
    calc__screen_small.val(calc__screen_small.val() + "8");
    virtual_memory += "8";
});

/*Button 9*/
$('.nine').on("click", ()=>{
    calc__screen_small.val(calc__screen_small.val() + "9");
    virtual_memory += "9";
});

/*Button 4*/
$('.four').on("click", ()=>{
    calc__screen_small.val(calc__screen_small.val() + "4");
    virtual_memory += "4";
});

/*Button 5*/
$('.five').on("click", ()=>{
    calc__screen_small.val(calc__screen_small.val() + "5");
    virtual_memory += "5";
});

/*Button 6*/
$('.six').on("click", ()=>{
    calc__screen_small.val(calc__screen_small.val() + "6");
    virtual_memory += "6";
});

/*Button 1*/
$('.one').on("click", ()=>{
    calc__screen_small.val(calc__screen_small.val() + "1");
    virtual_memory += "1";
});

/*Button 2*/
$('.two').on("click", ()=>{
    calc__screen_small.val(calc__screen_small.val() + "2");
    virtual_memory += "2";
});

/*Button 3*/
$('.three').on("click", ()=>{
    calc__screen_small.val(calc__screen_small.val() + "3");
    virtual_memory += "3";
});

/*Button 0*/
$('.zero').on("click", ()=>{
    calc__screen_small.val(calc__screen_small.val() + "0");
    virtual_memory += "0";
});

/*Button .*/
$('.dot').on("click", ()=>{
    calc__screen_small.val(calc__screen_small.val() + ".");
    virtual_memory += ".";
});

/*For Operation Keys*/
/*Button Clear*/
$('.clear').on("click", ()=>{
    calc__screen_small.val("");
    virtual_memory = "";
});

/*Button Half*/
$('.half').on("click", ()=>{
    calc__screen_small.val(calc__screen_small.val() + "÷2");
    virtual_memory += "/2";
    answers_memory = (virtual_memory);
    console.log(answers_memory)
    answers_memory1 = eval(answers_memory);
    calc__screen_big.val(answers_memory1);
});

/*Button Percentage*/
$('.percentage').on("click", ()=>{
    calc__screen_small.val(calc__screen_small.val() + "%");
    virtual_memory += "%";
});

/*Button Divide*/
$('.divide').on("click", ()=>{
    calc__screen_small.val(calc__screen_small.val() + "÷");
    virtual_memory += "/";
});


/*Button Times*/
$('.times').on("click", ()=>{
    calc__screen_small.val(calc__screen_small.val() + "×");
    virtual_memory += "*";
});

/*Button Minus*/
$('.minus').on("click", ()=>{
    calc__screen_small.val(calc__screen_small.val() + "-");
    virtual_memory += "-";
});

/*Button Plus*/
$('.plus').on("click", ()=>{
    calc__screen_small.val(calc__screen_small.val() + "+");
    virtual_memory += "+";
});

/*Button Equals*/
$('.equals').on("click", ()=>{
    a++;
    b++;
    b = a;
    answers_memory = (virtual_memory);
    answers_memory1 = eval(answers_memory);
    calc__screen_big.val(answers_memory1);
    return_memory[a] = answers_memory1;
    console.log(return_memory[a]);
});

/*Button Return*/
$('.return').on("click", ()=>{
    b--;
    console.log(return_memory[b]);
});








