var alphabet = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  v: '...-',
  x: '-..-',
  y: '-.--',
  z: '--..'
};

var swapAlph = swapAlp(alphabet);

var firstWord = "hello world";

var secondWord = "we love javascript";

function encode(a){
  var newArray =[];
  for (var i=0;i<a.length;i++){
    for (alp in alphabet){
      if (a.charAt(i) == alp){
        newArray.push(alphabet[alp]);
      }
    }
    if (a.charAt(i) == " "){
      newArray.push(a.charAt(i));
    }
  }
  return newArray;
}

var userInput = prompt("enter a string");

console.log(encode(userInput));

need to do function of finding key using value (below is wrong)

function findKey (obj,value){
  return Object.keys(obj).find(key => obj[key] === value);
}

function swapAlp(a){
  var newObj = {};
  for (alp in alphabet){
    newObj[a[alp]] = alp;
  }
  return newObj;
}

function decode(b){
  var newArray = [];
  var j = 0;
  for (var i = 0;i<b.length;i++){
    if(b.charAt(i)==" "){
      var morse = b.substring(j,i);
      j = i+1;
      for (a in swapAlph){
        if(morse === a){
          newArray.push(swapAlph[a]);
        }
      }
    }
  }
  newArray.push(swapAlph[b.substring(j,b.length)]);
  var str = newArray.toString()
  return str;
}

console.log(decode('... .- -- ..- . .-..    -- --- .-. ... .    .. -. ...- . -. - . -..    -- --- .-. ... .    -.-. --- -.. .'));
