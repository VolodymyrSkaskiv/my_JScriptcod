/* 
numOfKeyOptions(k) Функція видає кількість варіантів ключів в залежності від кількості біт в ключі
randomKey(k) Функція для рандомного ключа (к) - бітної довжини
keyOk8(k) Функція для пошуку 8 бітного ключа ПРАЦЮЄ ШВИДШЕ НІЖ keyOk(k)
keyOk(k) Функція для пошуку ключа 8, 16, 32, 64, 128, 256, 1024, 2048, 4096, (к) - бітної довільної довжини

keyOk(randomKey(k)) пошук к - бітного рандомного ключа
*/

const str = "0123456789ABCDEF" //16 -ковий алфавіт
let rez = ""
let key8, key16, key
let find_key

// Друк кількості варіантів ключів для k  бітних ключів 
for(kil = 16n; kil < 4097n; kil = 2n*kil){
    my_print(kil)
}
console.log("\n")

//Проведемо пошук для 8 бітного ключа key8 = "0012AF94" і засікаємо час пошуку
let date = new Date()
let t = date.getTime()

key8 = "002FAF94"
console.log("Пошук 8 бітного ключа", key8, "функцією keyOk8()");
find_key = keyOk8(key8)
date = new Date()
console.log("Шуканий ключ: ", find_key, "час пошуку: ", date.getTime() - t, "мілісекунд\n")


//Проведемо пошук для 8 бітного ключа key8 = "0012AF94" функцією keyOk() і засікаємо час пошуку
date = new Date()
t = date.getTime()

key8 = "002FAF94"
console.log("Пошук 8 бітного ключа", key8, "функцією keyOk()");
find_key = keyOk(key8)
date = new Date()
console.log("Шуканий ключ: ", find_key, "час пошуку: ", date.getTime() - t, "мілісекунд\n")

//Проведемо пошук для 8 бітного ключа і засікаємо час пошуку
date = new Date()
t = date.getTime()

key8 = "0142AF9F"
console.log("Пошук 8 бітного ключа", key8);
find_key = keyOk8(key8)
date = new Date()
console.log("Шуканий ключ: ", find_key, "час пошуку: ", date.getTime() - t, "мілісекунд\n")


//Проведемо пошук рандомного 16 бітного ключа і засікаємо час пошуку
date = new Date()
t = date.getTime()
key16 = "000000000142AF9F"
console.log("Пошук 16 бітного ключа", key16, " функцією keyOk()");
find_key = keyOk(key16)
date = new Date()
console.log("Шуканий ключ: ", find_key, "час пошуку: ", date.getTime() - t, "мілісекунд\n")

//Проведемо пошук рандомного 8 бітного ключа і засікаємо час пошуку
date = new Date()
t = date.getTime()
key8 = randomKey(8);
console.log("Пошук 8 бітного рандомного ключа", key8, " функцією keyOk8()");
find_key = keyOk8(key8)
date = new Date()
console.log("Шуканий ключ: ", find_key, "час пошуку: ", date.getTime() - t, "мілісекунд\n")

//Проведемо пошук рандомного 32 бітного ключа і засікаємо час пошуку
date = new Date()
t = date.getTime()
key16 = "0000000000000000000000000142A19F"
console.log("Пошук 32 бітного ключа", key16, " функцією keyOk()");
find_key = keyOk(key16)
date = new Date()
console.log("Шуканий ключ: ", find_key, "час пошуку: ", date.getTime() - t, "мілісекунд\n")


// Викликаємо функцію randomKey(k), де к 16, 32,64,128,256,512,1024, 2048, 4096
function my_print(k){
    console.log(Number(k)," ",numOfKeyOptions(k))
}

//Функція видає кількість варіантів ключів в залежності від кількості біт в ключі
function numOfKeyOptions(k){
    let rez = 1n;
    for (i =0n; i< k; i++){
        rez = rez * 2n
    }
    return rez
}

//Функція для представлення числа у 16 системі
function numOfHexStr (k){
    //let str = "0123456789ABCDEF";
    return str[k];
}

//Функція для рандомного ключа (к) - бітної довжини
function randomKey(k){
    let rKey = "";
    let rez;
    for (i = 0; i < k; i++){
        rez = Math.floor(Math.random()*16);
        rKey = rKey + numOfHexStr (rez)
    }
    return rKey
}

function bigint_hex(k) {
    let p = 1;
    let rez = 16n;
    //визначаємо розміpність масиву в 16 системі, p - кількість елементів
    while (k >= rez) {
      rez = rez * 16n;
      p++;
    }
    //console.log("p = ", p);
    let rez_n = [];
    let rez16 = [];
  
    for (i = 0; i < p; i++) {
      rez16[i] = numOfHexStr(Number(k % 16n));
      //console.log(i, " ", rez16[i]);
      k = (k - (k % 16n)) / 16n;
      rez_n = rez_n + rez16[i];
    }
  
    //розвертаємо масив
    let k1 = Array.from(rez_n); //формуємо масив символів
    k1 = k1.reverse(); // розвертаємо масив
    rez_n = k1.join(""); //склеюємо масив
  
    //console.log(rez_n);
    return rez_n;
  }

function keyOk (k){
    let n = k.length;
    let my_key = ""
    let key_f = 0n
    let str_0 = "0"
    while(k !== my_key){
        my_key = bigint_hex(key_f)
        if (my_key.length < n){ 
            str_0 = "0"
            my_key = str_0.repeat(n-my_key.length) + my_key 
            //дописуємо нулі спереду н-д 1А --> 0000001А для 8 біт,  000000000000001А для 16 біт і т.д.
        }
        key_f++
    }

    if (my_key == k){
        //console.log(my_key)
        return my_key
    }
}


//Функція для перевірки ключа на відповідність 8 - бітної довжини
function keyOk8 (k){
    let n = k.length;
    let my_key
    for (i = 0; i< 16; i++) {
        for(i1 = 0; i1<16; i1++){
            for (i2 = 0; i2< 16; i2++) {
                for(i3 = 0; i3<16; i3++){
                    for (i4 = 0; i4< 16; i4++) {
                        for(i5 = 0; i5<16; i5++){
                            for (i6 = 0; i6< 16; i6++) {
                                for(i7 = 0; i7<16; i7++){
                                    my_key = numOfHexStr(i)+numOfHexStr(i1) + numOfHexStr(i2)+numOfHexStr(i3) +
                                    numOfHexStr(i4)+numOfHexStr(i5) +numOfHexStr(i6)+numOfHexStr(i7); 
                                    if (my_key == k){
                                        //console.log(my_key)
                                        return my_key
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}