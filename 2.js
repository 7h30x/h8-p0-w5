/*Logic Challenge - Naik Angkot
Problem
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]

*/function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    result=[];
    for (i=0; i<arrPenumpang.length; i++) {
      result.push({});
      let obj=result[result.length-1];
     
      obj.penumpang= arrPenumpang[i][0];
      obj.naikDari=arrPenumpang[i][1];
      obj.tujuan=arrPenumpang[i][2];
      var distance= rute.slice(rute.indexOf(obj.naikDari), rute.indexOf(obj.tujuan))
    
      obj.bayar=2000 * (distance.length)
  
    }
    return result;
  
  }

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

//console.log(naikAngkot([])); //[]