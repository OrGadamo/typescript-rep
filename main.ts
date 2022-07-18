function printMessageByNum(): void {
  let num: number = +document.getElementById("input_num").value;
  if (num > 10) console.log("greater then 10");
  if (num < 10) console.log("less then 10");
}
function printMessageByNumber(): void {
  let num: number = +document.getElementById("input_num").value;
  if (num > 10) {
    console.log("greater then 10");
    return;
  }
  num === 10 ? console.log("equal to 10") : console.log("less then 10");
}
function printMessageByUserNum(): void {
  let first: number = +document.getElementById("input_num1").value;
  let second: number = +document.getElementById("input_num2").value;
  if (first === second) {
    console.log(`they are equal`);
    return;
  }
  first > second
    ? console.log(`${first} is bigger`)
    : console.log(`${second} is bigger`);
}
function printMessageByNum(): void {
  let num: number = +document.getElementById("input_num").value;
  if (num > 10) console.log("greater then 10");
  if (num < 10) console.log("less then 10");
}
function printMessageByNumber(): void {
  let num: number = +document.getElementById("input_num").value;
  if (num > 10) {
    console.log("greater then 10");
    return;
  }
  num === 10 ? console.log("equal to 10") : console.log("less then 10");
}
function printMessageByUserNum(): void {
  let first: number = +document.getElementById("input_num1").value;
  let second: number = +document.getElementById("input_num2").value;
  if (first === second) {
    console.log(`they are equal`);
    return;
  }
  first > second
    ? console.log(`${first} is bigger`)
    : console.log(`${second} is bigger`);
}
function getMin(num1: number, num2: number): number {
  return num1 > num2 ? num2 : num1;
}
function getMinFromNumbers(num1: number, num2: number, num3: number): number {
  return Math.min(num1, num2, num3);
}
function getNumbersAvg(num1: number, num2: number, num3: number): number {
  return (num1 + num2 + num3) / 3;
}
function getNumbersSum(
  num1: number,
  num2: number,
  num3: number,
  num4: number
): number {
  return num1 + num2 + num3 + num4;
}
function getSecondNameInArray(arr: string[]): string {
  return arr[1];
}
function getFirstNameStartWithAChar(arr: string[]): string {
  // for(let i = 0; i<arr.length;i++){
  //   if(arr[i][0]==='A') return arr[i]
  // }
  let myName: string;
  arr.forEach((entry) => {
    if (entry[0] === "A") {
      myName = entry;
      return;
    }
  });
  return myName;
}
// console.log(getFirstNameStartWithAChar(["or","abe","batel","Ani","tom"]))
function checkIfEvenInArray(arr: number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) return true;
  }
  return false;
  // let answer:boolean = false;
  // arr.forEach(entry=>{
  //   if(entry%2===0) answer=true
  // })
  // return answer;
}
// console.log(checkIfEvenInArray([1,3,5,7,5,1]))
function getDateObj(myDate: string): Date {
  return new Date(myDate);
}
// console.log(getDateObj('1/1/1998'))
function printStringByNumber(text: string, printNum: number): void {
  for (let i = 0; i < printNum; i++) {
    console.log(text);
  }
}
// printStringByNumber("hello",2)
function printHelloMessage(myName: string, age: number): string {
  return age > 18 ? `Welcome ${myName}` : `No Entry ${myName}`;
}
// console.log(printHelloMessage("Or",19))
function checkNameStarterChar(fName: string, lName: string): any {
  return fName[0] === lName[0] ? fName[0] : 0;
}
// console.log(checkNameStarterChar("rr","radamo"))
function checkArrayEntries(arr: any[]): string {
  switch (arr.length) {
    case 0:
      return "no data";
    case 1:
      return "single entry";
    case 2:
      return "two entries";
    default:
      return "There are many entries";
  }
}
// console.log(checkArrayEntries([1,2,3]))
function sortByText(arr: number[], text: string): any {
  switch (text) {
    case "reverse":
      return arr.reverse();
    case "sortUp":
      return arr.sort((a, b) => a - b);
    case "sortDown":
      return arr.sort((a, b) => b - a);
    case "string":
      return arr.toString();
    default:
      return arr;
  }
}
// console.log(sortByText([1,3,2,1,7,6],"reverse"))/
function sortArrayByType(arr: any[]): any[] {
  let sortArray: any[] = [];
  arr.forEach((entry) => {
    for (let i = 0; i < sortArray.length; i++) {
      let helperArr: any[];
      if (typeof sortArray[i] === typeof entry) {
        helperArr = sortArray.slice(0, i);
        helperArr.push(entry);
        sortArray = helperArr.concat(sortArray.slice(i));
        break;
      } else if (i == sortArray.length - 1) {
        sortArray.push(entry);
        break;
      }
    }
    if (sortArray.length === 0) {
      sortArray.push(entry);
    }
  });
  // let helperArr:any[]=[];
  // for(let i =0;i<sortArray.length;i++){
  //   if(Array.isArray(sortArray[i])){
  //     helperArr.push(sortArray.splice(i,1)[0]);
  //     i--;
  //   }
  // }
  // sortArray = sortArray.concat(helperArr);
  return sortArray;
}
// console.log(sortArrayByType([[],{},[7],1,true,[5],{},"hello",false,12,"dalia",["t"],true,{},[]]))
