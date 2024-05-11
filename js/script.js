gsap.from("nav h2,nav ul li",{
	y:50,
	opacity:0,
	delay:1,
	duration:0.6,
	stagger:0.3
});
gsap.from(".left-section h1,.left-section p,.left-section a",{
	x:-100,
	opacity:0,
	delay:1,
	duration:1,
	stagger:0.6
})
gsap.from(".feature #choose",{
	scale:0,
	opacity:0,
	delay:2,
	duration:0.5,
	
});
gsap.from(".feature .line-clr",{
	x:-50,
	opacity:0,
	delay:2.2,
	duration:0.5,
	
});
gsap.from(".feature-right #one",{
	x:100,
	opacity:0,
	duration:1,
	stagger:0.3,
	scrollTrigger:{
		trigger:".feature-box #one",
		scroll:"body",
		marker:true,
		start:"top 60%",
		end:"top 40%",
		scrub:true,
	}
});

gsap.from(".feature-box #two",{
	x:-100,
	opacity:0,
	duration:1,
	stagger:0.3,
	scrollTrigger:{
		trigger:".feature-box #two",
		scroll:"body",
		start:"top 60%",
		end:"top 40%",
		scrub:true,
	}
});

gsap.from(".feature-right #three",{
	x:100,
	opacity:0,
	duration:1,
	stagger:0.3,
	scrollTrigger:{
		trigger:".feature-right #three",
		scroll:"body",
		marker:true,
		start:"top 60%",
		end:"top 40%",
		scrub:true,
	}
});
gsap.from(".feature-box #four",{
	x:-100,
	opacity:0,
	duration:1,
	stagger:0.3,
	scrollTrigger:{
		trigger:".feature-box #four",
		scroll:"body",
		marker:true,
		start:"top 60%",
		end:"top 40%",
		scrub:true,
	}
})
