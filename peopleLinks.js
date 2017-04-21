console.log('hello world');

catsVsDogs = {
  cat: 0,
  dog: 0
}

_.map(survey, function(person) {
  if (person.dogs_vs_cats == 'Cats') {
    catsVsDogs.cat++
  } else if (person.dogs_vs_cats == 'Dogs') {
    catsVsDogs.dog++
  }
})
