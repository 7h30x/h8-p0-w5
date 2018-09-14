/* 
Logic Challenge: Highest Score
Implementasikan function highestScore untuk mendapatkan student dengan nilai tertinggi dari setiap class:

Output yang diharapkan berupa Object Literal dengan format sebagai berikut:

{
  <class>: { name: <name>, score: <score> },
  <class>: { name: <name>, score: <score> },
  <class>: { name: <name>, score: <score> }
}


*/function highestScore (students) {
  var results={};
  if (!students.length) {
    return results;
  }
  var classList=[students[0].class];  //list to hold classnames
  var filteredClassList;
  for (obj of students) {   //populate classlist with unique class names
    var state=true;
    for (i=0;i<classList.length; i++) {
      if (obj.class === classList[i]) {
        state=true;
        break;
      }
      state=false;
    }
    if (state===false) {
      classList.push(obj.class);
    }
  }

for (j in classList) {  //for each class populate with students from initial array object, sort them based on score
  filteredClassList=(students.filter(obj => obj.class===classList[j])).sort((a,b) => b.score - a.score ); //returns new sorted array
  var className=classList[j];
  results[className]= {}
  results[className].name= filteredClassList[0].name;
   results[className].score= filteredClassList[0].score;
  
}

return results
}





console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}

