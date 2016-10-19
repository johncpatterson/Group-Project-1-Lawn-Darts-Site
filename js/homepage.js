$.ajax({
	url: 'https://json-data.herokuapp.com/darts/testimonials',
	success: function(result){
		console.log(result);

		var personArray = result.results
		console.log(personArray)

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