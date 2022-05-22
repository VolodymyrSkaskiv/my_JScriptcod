const str = "0123456789ABCDEF" //16 -ковий алфавіт
let rez = ""
let key8
let find_key

// Друк кількості варіантів ключів для k  бітних ключів 
for(k = 16; k < 4097; k = 2*k){
    my_print(k)
}
console.log("\n")

//Проведемо пошук для 8 бітного ключа key8 = "0012AF94" і засікаємо час пошуку
let date = new Date()
let t = date.getTime()

key8 = "002FAF94"
console.log("Пошук 8 бітного ключа", key8);
find_key = keyOk8(key8)
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


//Проведемо пошук рандомного 8 бітного ключа і засікаємо час пошуку
key8 = randomKey(8);
console.log("Пошук 8 бітного рандомного ключа", key8);
find_key = keyOk8(key8)
date = new Date()
console.log("Шуканий ключ: ", find_key, "час пошуку: ", date.getTime() - t, "мілісекунд\n")


// Викликаємо функцію randomKey(k), де к 16, 32,64,128,256,512,1024, 2048, 4096
function my_print(k){
    console.log(k," ",numOfKeyOptions(k))
}

//Функція видає кількість варіантів ключів в залежності від кількості біт в ключі
function numOfKeyOptions(k){
    let rez = 1;
    for (i =0; i< k; i++){
        rez = rez * 2
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