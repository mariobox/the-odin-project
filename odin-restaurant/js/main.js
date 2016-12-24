// Fixed Sections (Stored in Variables)

var logo = '<h1>La Punta Restaurant</h1>';

var callaoImage = '<img src="img/callao.jpg" width="350px" alt="Mirador de La Punta">' + '<br />' + '<p><small>Photo credits <a href="https://www.flickr.com/photos/danielangello/8719907643/">Daniela Angelo</a></small></p>' + '<br />';

var nav = '<ul class="navbar">' + '<li id="tab1">Home</li>' + '<li id="tab2">Menu</li>' + '<li id="tab3">Contact</li>' + '</ul>';

// Interchangeable Sections (On Tab Click | Stored in Variables)

var homeContent = '<div>' + '<h2>Home</h2>' + '<p>Welcome to the premier destination for authentic, sustainable food from the sea of Callao, Peru\'s main port and fishing hub.</p>' + '</div>';

var menuContent = '<div>' + '<h2>Menu</h2>' + '<p><strong>$20 PRIX FIX MENU</strong></p>' + '<hr />' + '<p><strong>Chupe de Camarones</strong> <em>Shrimp stew Peruvian style</em></p>' + '<p><strong>Saltado de Mariscos</strong> <em>Assorted seafood treats sauted with onions and peppers, served with french fries and rice</em> </p>' + '<p><strong>Flan con Dulce de Leche</strong> <em>Peruvian style creme brulee</em> </p>' + '</div>';

var contactContent = '<div>' + '<h2>Contact Us</h2>' + '<p>We are conveniently located at the end of the main beachfront boardwalk in La Punta, Callao.</p><p>We don\'t deliver, so come visit us!</p>' + '</div>';

// Display Default Home Page

$(document).ready(function () {
    $("#content").before(logo).before(callaoImage).before(nav);
    $("#content").html(homeContent);
    $("#tab1").addClass("active");
});

// Display Different Content Sections Depending on Which Tab is Clicked

$(document).ready(function () {

    $("#tab1").click(function () {
        $("#content").html(homeContent);
        $("ul.navbar li").removeClass();
        $("#tab1").addClass("active");
    });

    $("#tab2").click(function () {
        $("#content").html(menuContent);
        $("ul.navbar li").removeClass();
        $("#tab2").addClass("active");
    });

    $("#tab3").click(function () {
        $("#content").html(contactContent);
        $("ul.navbar li").removeClass();
        $("#tab3").addClass("active");
    });

});
