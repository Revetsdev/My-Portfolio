//toggle
    const hamburger = document.querySelector('.hamburger');
	const navList = document.querySelector('.nav-list ul');

	// Toggle active class on click
	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		navList.classList.toggle('active');
	});

	// Close menu when a link is clicked
	document.querySelectorAll('.nav-list ul a').forEach(link => {
		link.addEventListener('click', () => {
			hamburger.classList.remove('active');
			navList.classList.remove('active');
		});
	});
//end toggle

/*VantaJs*/

VANTA.GLOBE({
    el: "#vantajs",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
	size: 1.35
  })

/*End VantaJs*/