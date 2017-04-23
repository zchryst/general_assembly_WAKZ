
var venn_sets = [
             {sets: ['0'], label: "SQL", size: 852},
             {sets: ['1'], label: "JavaScript", size: 1033},
             {sets: ['2'],  label: "C#", size: 560},
             {sets: ['3'],  label: "Java", size: 626},
             {sets: ['4'],  label: "PHP", size: 455},
             {sets: ['5'],  label: "Python", size: 394},
             {sets: ['6'],  label: "SQL Server", size: 378},
             {sets: ['7'],  label: "Node.js", size: 334},
             {sets: ['8'],  label: "AngularJS", size: 343},
             {sets: ['9'],  label: "Android", size: 313}];


              //  {sets: ['A','B'], size: 2},


var venn_count = 10;
var venn_ints = [];
var venn_ints_count = 0;

for(i=0; i< venn_sets.length; i++){
//  for(j=i; j< venn_sets.length; j++){
    venn_ints.push({sets:[i, 1], size: 0});
    for(k=0; k< survey.length; k++){
      var lang = survey[k].tech_do.split("; ");
      if(lang.indexOf(venn_sets[i].label)!= -1 && lang.indexOf(venn_sets[1].label)!= -1){
        venn_ints[venn_ints_count].size++;
      }
    }
    venn_ints_count++;
//  }
}

venn_sets = venn_sets.concat(venn_ints);




// generate a counter for all languages from var survey

var inSets = function (arr, val) {
  return arr.some(function(arrVal) {
    return val === arrVal.label;
  });
}


var donut_sets = [];
var donut_count = 0;

for (i=0; i< survey.length; i++){
  var lang = survey[i].tech_do.split("; ");

  for(j=0; j< lang.length; j++){

    if (inSets(donut_sets, lang[j])){
      var elem = donut_sets.filter(function( obj ) {
        return obj.label == lang[j];
      });
      elem[0].value++;
    }
    else{
//      donut_sets.push({sets:[donut_count], label:lang[j], size: 1});
      donut_sets.push({label:lang[j], value: 1});
      donut_count++;
    }
  }
}
