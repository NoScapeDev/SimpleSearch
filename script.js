const API_KEY = 'AIzaSyChYph9hri56n74KuLrHh-NAevt86b0JaA'
const CX = '37c63a7231b8e422c'

function search(query) {
  const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX}&q=${query}`

  return fetch(url)
    .then(response => response.json())
    .then(data => data.items)
}

document.getElementById('search-button').addEventListener('click', function() {
  const searchInput = document.getElementById('search-input')
  const query = searchInput.value


  search(query).then(function(results) {
    const resultsContainer = document.getElementById('results-container')
    resultsContainer.innerHTML = ''

    results.forEach(function(result) {
      const resultDiv = document.createElement('div')
      resultDiv.classList.add('result')
	  
	  const resultLink = document.createElement('div')
      resultLink.classList.add('result-link')
      resultLink.href = result.link
      resultLink.textContent = result.link
      resultDiv.appendChild(resultLink)
	  
      const resultTitle = document.createElement('a')
      resultTitle.classList.add('result-title')
      resultTitle.innerHTML = result.title
	  resultTitle.href = result.link  /* Set the href attribute to the URL of the result */
      resultDiv.appendChild(resultTitle)
      
      const resultDescription = document.createElement('div')
      resultDescription.classList.add('result-description')
      resultDescription.innerHTML = result.snippet
      resultDiv.appendChild(resultDescription)
	  
      resultsContainer.appendChild(resultDiv)
    })
  })
})
