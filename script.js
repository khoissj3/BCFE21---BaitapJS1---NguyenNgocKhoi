// Bài 1 - Tính tiền lương
let workDay = 20;
let salaryOneDay = 100000;
let salary = workDay * salaryOneDay;

// Bài 2 - Tính giá trị trung bình
let num1 = 1;
let num2 = 10;
let num3 = 17;
let num4 = 38;
let num5 = 13;

let trungBinh = (num1 + num2 + num3 + num4 + num5) / 5;

// Bài 3 - Quy đổi tiền
let $1 = 23500;
let nhapTienDollar = 100;
let tienVND = nhapTienDollar * $1;
console.log(tienVND);

// Bài 4 - Tính diện tích
let chieuDai = 100;
let chieuRong = 70;
let dienTich = chieuDai * chieuRong;
let chuVi = (chieuDai + chieuRong) * 2;
console.log(dienTich, chuVi);

// Bài 5 - Tính tổng 2 ký số
let so = 32;
let donVi = so % 10;
console.log(donVi);
let hangChuc = (so - donVi) / 10;
let tong = donVi + hangChuc;
console.log(hangChuc);
