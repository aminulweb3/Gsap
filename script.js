var tl = gsap.timeline()
tl.from('h2', {
	y: -20,
	opacity: 0,
	duration:1,
	delay: 0.5
})
tl.from('h4', {
	y: -20,
	opacity: 0,
	duration:1,
	// delay: 0.5
	stagger: 0.3
})

tl.from("h1", {
	y:20,
	opacity:0,
	duration:1,
	scale:0.2
})

// // gsap.to("#box1", {
// //   x: 1200,
// //   duration: 2,
// //   delay: 1,
// //   rotate: 360,
// //   backgroundColor:'blue',
// //   borderRadius: '50%',
// //   scale: 0.5,


// // });
// gsap.to("#box1", {
// 	x:1000,
// 	duration: 2,
// 	delay: 1,
// 	rotate: 360,
// 	repeat: 1,
// 	yoyo:true
// })

// // gsap.to('#box2', {
// // 	x:500,
// // 	y: 500,
// // 	duration: 2,
// // 	delay:1
// // })
// gsap.from("#box2", {
//   x: 1200,

//   duration: 2,
//   delay: 1,
// });


// gsap.from('h1', {
// 	duration:2,
// 	opacity: 0,
//   delay: 1,
//   y:30,
//   stagger: 1,
  


// })


