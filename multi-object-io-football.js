var input = [
    {
      nama: 'Alfa',
      match: 'indonesia vs philipin',
      area: 'tribun barat'
    },
    {
      nama: 'Beta',
      match: 'indonesia vs malaysia',
      area: 'tribun barat'
    },
    {
      nama: 'Charlie',
      match: 'indonesia vs malaysia',
      area: 'tribun timur'
    },
    {
      nama: 'Delta',
      match: 'indonesia vs philipin',
      area: 'tribun timur'
    },
    {
      nama: 'Enigma',
      match: 'indonesia vs philipin',
      area: 'tribun barat'
    },
  ]


  var output=[];
  for (let i=1; i<input.length; i++) {
    var isUniqueMatch=true; //actions depends on if match is unique
    for(let j in output){   //loop over output array
      if(input[i].match === output[j].match) { //if input.match is in output, do the following actions before moving on to next input
         isUniqueMatch=false;
         if(input[i].area in output[j].area) {  //if input.area is a property in output.area 
           output[j].area[input[i].area] += " | " + input[i].nama;
         }
         else{
         output[j].area[input[i].area]=input[i].nama;
         }
          break;}
    }
    //if input.Match is unique, push to new object
    if(isUniqueMatch===true){
    output.push({
              match: input[i].match,
              area: {[input[i].area]: input[i].nama} 
              })
    
    
    }
  }
    
console.log(output)

  /**
   
    [
      { 
          match: 'indonesia vs philipin',
          area: {
            'tribun barat': 'Alfa | Enigma',
            'tribun timur': 'Delta'
          }
      },
      { 
          match: 'indonesia vs malaysia',
          area: {
            'tribun barat': 'Beta',
            'tribun timur': 'Charlie'
          }
      }
    ]
   */