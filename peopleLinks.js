console.log('hello world');

var catsVsDogs = {
  cat: 0,
  dog: 0
};

_.map(survey, function(person) {
  if (person.dogs_vs_cats == 'Cats') {
    catsVsDogs.cat++
  } else if (person.dogs_vs_cats == 'Dogs') {
    catsVsDogs.dog++
  }
})

var hardcoreFans = {
  trek: {
    count: 0,
    "Disagree completely": 0,
    "Disagree somewhat": 0,
    "Neutral": 0,
    "Agree completely": 0,
    "Agree somewhat": 0
  },
  star: {
    count: 0,
    "Disagree completely": 0,
    "Disagree somewhat": 0,
    "Neutral": 0,
    "Agree completely": 0,
    "Agree somewhat": 0
  }
};

mars_ans = [];





function treckWarsMars(person) {
  var agreeLevel = person.agree_mars;
  if (person.star_wars_vs_star_trek == 'Star Wars') {
    // debugger
    hardcoreFans.star.count++
    hardcoreFans.star[agreeLevel] += 1;
  } else if (person.star_wars_vs_star_trek == 'Star Trek') {
    hardcoreFans.trek.count++
    hardcoreFans.trek[agreeLevel]++
  }
}

var mars_likely_aliens_yes = {
  aliens: {
    count: 0,
    "Disagree completely": 0,
    "Disagree somewhat": 0,
    "Neutral": 0,
    "Agree completely": 0,
    "Agree somewhat": 0
  },
  no_aliens: {
    count: 0,
    "Disagree completely": 0,
    "Disagree somewhat": 0,
    "Neutral": 0,
    "Agree completely": 0,
    "Agree somewhat": 0
  }
};

function aliensMars(person) {
  var agreeLevel = person.agree_mars;
  if (person.aliens == 'Yes') {
    // debugger
    mars_likely_aliens_yes.aliens.count++
    mars_likely_aliens_yes.aliens[agreeLevel] += 1;
  } else if (person.aliens == 'No') {
    mars_likely_aliens_yes.no_aliens.count++
    mars_likely_aliens_yes.no_aliens[agreeLevel]++
  }
}

_.map(survey, aliensMars);
_.map(survey, treckWarsMars);

function ready() {
  console.log('ground control to major tom');

  var wind = window,
    	 d = document,
    	  e = d.documentElement,
    	   g = d.getElementsByTagName('body')[0]

  var svg = d3.select('div').append('svg')
              .attr('class', 'chartWrapper');

  var mars = svg.append("circle")
                .attr('cx', 30)
                .attr("cy", 30)
                .attr("r", 20)
                .style("fill", '#planet-mars');

  var patternContainer = svg.append("div").attr("class","patternContainer");

  patternContainer.append('pattern')
			.attr('id', 'planet-mars')
			.attr('class', "pattern")
			.attr('patternContentUnits', 'objectBoundingBox')
			.attr('width', 20)
			.attr('height', 20)
		  .append("image")
			.attr('class', "patternImage")
			.attr("src", './media/planet-mars-circle.svg')
			.attr('width', 1)
			.attr('height', 1);

};

ready();
