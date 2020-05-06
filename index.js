const dogsUrl = 'http://localhost:3000/dogs'
const robotsUrl= 'http://localhost:3000/robots'

// fetch(dogsUrl)
//     .then(r => r.json())
//     // .then(console.log)
//     .then(itemsArr => itemsArr.forEach(item => getEachItem(item)))

// function getEachItem(item) {
//     console.log(item.dogName)
// }

submitData( 'alex', 'asuthamm@gmail.com' )

function submitData( name, email ) {
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
          name,
          email
        } )
      } )
      .then( r => r.json())
      .then( obj => { 
          document.body.innerHTML = obj[ "id" ] 
      } )

      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )
}