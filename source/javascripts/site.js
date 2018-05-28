$(document).ready(function() {

  //Display Dropdown
	$('.dropbtn').click(function(){
		$(this).parent().find('.dropdown-content').toggle();
	})

  //Responsive Nav Menu
  $('.toggle-nav-mobile').click(function(){
    $('.header-nav').addClass('display');
  })
  $('.bg').click(function(){
    $('.header-nav').removeClass('display');
  })

  //Select Team Member
  $('.picture').click(function(){
    var name = $(this).data( "name" );
    var description = $(this).data( "desc" );
    var area = $(this).data( "area" );

    $('.bio').addClass('visible-bio');
    $('.bio .name').text(name);
    $('.bio .desc').text(description);
    $('.bio .area').text(area);

  })

  $('.close-bio').click(function(){
    $('.bio').removeClass('visible-bio');
  })
  
});

/*Dropdowns*/

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}