import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Pokemon from './pokemon.js';


function displayPokemonRefresh() {
  document.getElementById("pokemon-name").innerHTML = "";
  document.getElementById("front-image").innerHTML = "";
  document.getElementById("back-image").innerHTML = "";
}

$(document).ready(function () {
  $("#start").submit(function (event) {
    event.preventDefault();
    let userName = $("#user-name").val();
    $(".hide-me").show();
    $(".hide-this-later").hide();
    $("#new").click(function () {
      displayPokemonRefresh();
      let promise = Pokemon.apiCall();
      promise.then(response => {
        const body = JSON.parse(response);
        let pokemonName = body.species.name;
        let frontSprite = body.sprites.back_default;
        let backSprite = body.sprites.front_default;
        // $("#pokemon-name").text(" " + pokemonName);
        $("#pokemon-name").text(`${pokemonName}`);
        $("#name-here").text(userName);
        $(".hide-me-last").show();
        $(`<img src='${frontSprite}'>`).appendTo('#front-image');
        $(`<img src='${backSprite}'>`).appendTo('#back-image');
        console.log(pokemonName);
        console.log(body);
        console.log(body.sprites.back_default);
        console.log(userName);
      });
    });
    $("#reset").click(function () {
      window.location.reload();
    });
  });
});


// $(document).ready(function () {
//   $("#start").click(function () {
//     $("#start").hide();
//     let test = CurrencyExchange.getExchange();
//     test.then(function (response) {
//       const body = JSON.parse(response);
//       $("#main-body").show();
//       isoHtmlListener();
//       outputIsoCodes(body["conversion_rates"]);
//       $('#user-selection-form').submit(function (event) {
//         event.preventDefault();
//         const userUsdSelection = $("input[name='usdTotal']").val();
//         const isoCode = $("input[name='isoSelect']").val().toUpperCase();
//         let isoMathNumber = body["conversion_rates"][isoCode];
//         let convertedCurrencyNumber = math(userUsdSelection, isoMathNumber);
//         $('#usd-amount').show();
//         $('#convert-amount').show();
//         $('#usdNumberAmount').text(userUsdSelection);
//         $('#isoSelectionPrint').text(isoCode);
//         if (isNaN(convertedCurrencyNumber)) {
//           $('#isoNumberAmount').text("Iso Code Not Recognized Please ReEnter ISO");
//         } else {
//           $('#isoNumberAmount').text(convertedCurrencyNumber);
//         }
//       });
//     }, function (error) {
//       console.log(error);
//     });
//   });
// });
