var dogs = [
{
  id: 0,
  photo: "/images/pepper seahawks.jpg",
  alt: "Ms. Pepper Potts",
  name: "Ms. Pepper Potts",
  breed: "Miniature Schnauzer Mix",
  color: "Salt & pepper",
  best_trick: "Bang Bang",
  personality: "Shy but sassy",
  rating: "&#xf1b0; &#xf1b0; &#xf1b0; &#xf1b0; &#xf1b0;",
  ratingText: "5.0 paws"
},

{
  id: 1,
  photo: "/images/harley-bowtie.jpg",
  alt: "Harley Jones",
  name: "Harley Jones",
  breed: "Pittbull/Boxer Mix",
  color: "Tan & white",
  best_trick: "High five",
  personality: "Lazy but loves to play and show off her toys",
  rating: "&#xf1b0; &#xf1b0; &#xf1b0; &#xf1b0; &#xf1b0;",
  ratingText: "5.0 paws"
},

{
  id: 2,
  photo: "/images/oreo.jpg",
  alt:"Oreo",
  name: "Oreo",
  breed: "Jack Russell Terrier",
  color: "White with spots",
  best_trick: "Dance",
  personality: "Loves to run and jump",
  rating: "&#xf1b0; &#xf1b0; &#xf1b0; &#xf1b0; &#xf1b0;",
  ratingText: "5.0 paws"
}
];


function createMenu(dog) {
  var menuItem = $('<a>');
  menuItem.addClass('list-group-item');
  menuItem.attr('id', dog.id);
  menuItem.attr('href', '#');
  menuItem.text(dog.name);
  return menuItem;
}


function renderCollectionViewItem(dogs) {
  var dogMenu = $('#dogMenu');

  for (var i = 0; i < dogs.length; i++) {
    var dogMenuItems = createMenu(dogs[i]);
    if (dogMenuItems) {
      dogMenu.append(dogMenuItems);
    }
  }
}


// jQuery document ready event
$(function () {
  $('.list-group-item').on("click",function(event) {
  //get the id of the link that was clicked
  var clickedDog = event.target.id;
    $('a.active').removeClass('active');
    $(this).addClass('active');

  renderDetailViewItem(clickedDog);

  });
});


function renderDetailViewItem(id) {
  var container = $('#dogDetail');
    //container.addClass('card mt-4');

  container.empty();

  var dogImg = $('<img>');
  dogImg.addClass('card-img-top img-fluid');
  dogImg.attr('src', dogs[id].photo);
  container.append(dogImg);

  var cardBody = $('<div>');
  cardBody.addClass('card-body');
  cardBody.attr('id', 'cardBodyId');

  var dogName = $('<h3>');
  dogName.addClass('card-title');
  dogName.text(dogs[id].name);

  var dogBreed = $('<h5>');
  dogBreed.text(dogs[id].breed);

  var dogColor = $('<p>');
  dogColor.html("<span>Color: </span>" + dogs[id].color);

  var dogTrick = $('<p>');
  dogTrick.html("<span>Best Trick: </span>" + dogs[id].best_trick);

  var dogPersonality = $('<p>');
  dogPersonality.html("<span>Personality: </span>" + dogs[id].personality);

  var dogRatingTitle = $('<h6>');
  dogRatingTitle.text("Good Dog Rating:");

  var dogRatingPaws = $('<i>');
  dogRatingPaws.attr('id', 'dogRatingPaws');
  dogRatingPaws.attr('style', 'font-size:16px; color:gold');
  dogRatingPaws.addClass('fa');
  dogRatingPaws.html(dogs[id].rating);

  var dogRatingText = $('<p>');
  dogRatingText.addClass('pInline');
  dogRatingText.text(dogs[id].ratingText
);

  cardBody.append(dogName);
  cardBody.append(dogBreed);
  cardBody.append(dogColor);
  cardBody.append(dogTrick);
  cardBody.append(dogPersonality);
  cardBody.append(dogRatingTitle);
  cardBody.append(dogRatingPaws);
  cardBody.append(dogRatingText);
  container.append(cardBody);
}


renderCollectionViewItem(dogs);
renderDetailViewItem(0);
  $('#0').addClass('active');
