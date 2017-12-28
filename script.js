var dogs = [
{
  id: 0,
  photo: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/22154710_10107136239116508_2638049624306936034_n.jpg?oh=c1925c773e57aa7c82ae6b94d3c37f57&oe=5A7EF35F",
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
  photo: "https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-8/334103_361508963917197_2017804697_o.jpg?oh=32cac0f4230212696b383a1aaadb36ec&oe=5A45DAB3",
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
  photo: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/22366272_10107160164030788_6873823909106004014_n.jpg?oh=711573d4e6ffa80b92de35ae1d42f698&oe=5A7BF501",
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
