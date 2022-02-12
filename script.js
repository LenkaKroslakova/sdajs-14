/**
 *PSČ
const Kladno = "ab34567"
function postalcode(psc) {
    const pscArray = Array.from(psc);
    pscArray.forEach((element, i)  => {
        //console.log(element, i)
        if (i === 0 || i === 1) {
            if (element.match(/[a-zA-Z]/)) {
                console.log ("prvni dva znaky jsou OK");
            };
        } else {
            element.match(/[0-9]/);
        }
    });
}
postalcode(Kladno);
 */

/**
 * stromcek
 */
/**function stromecek(delka){
    for (let i = 1; i <= delka; i++) {
        console.log("*".repeat(i))
    }
}
stromecek(5)
*/

/**
 * telefonne cislo - formatovanie
 * function formatPhoneNumber (numbers){
    return `(+` + numbers[0] + numbers [1] + `) ` + numbers[2] + numbers[3] + numbers[4] + `-` + numbers.slice(5, 8).join (“”) + `-` + numbers[8] + numbers[9] + numbers[10]
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
console.log(formatPhoneNumber(numbers))
 */

/**
 * function multiplicationTable(size) {
    let output = “”
    for (let i = 1; i <= size; i++) {
        let line = “”
        for (let j = 1; j <= size; j++) {
        line += j*i + ” ”
        }
        output += line + “\n”
    }
    return output
}
console.log(multiplicationTable(6));
 */

/**
 * 
 */