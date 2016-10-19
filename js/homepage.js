$.ajax({
	url: 'https://json-data.herokuapp.com/darts/testimonials',
	success: function(result){

		var personArray = result.results

		$('#personName1').append(`
			${personArray[0].name}
		`)

		$('#quote1').append(`
			"${personArray[0].review}"
		`)

		$('#personName2').append(`
			${personArray[1].name}
		`)

		$('#quote2').append(`
			"${personArray[1].review}"
		`)

		$('#personName3').append(`
			${personArray[2].name}
		`)

		$('#quote3').append(`
			"${personArray[2].review}"
		`)
	}
})

$.ajax({
	url: 'https://json-data.herokuapp.com/darts/companies',
	success: function(result){
		console.log(result);

		var companyArray = result.results
		console.log(companyArray[0].image_url)

		$('.company1').append(`
			<img src=${companyArray[0].image_url}>
		`)

		$('.company2').append(`
			<img src=${companyArray[1].image_url}>
		`)

		$('.company3').append(`
			<img src=${companyArray[2].image_url}>
		`)

		$('.company4').append(`
			<img src=${companyArray[3].image_url}>
		`)
	}
})