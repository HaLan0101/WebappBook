const url="https://api.itbook.store/1.0/new";
// function getResults(query) {
//     fetch(url)
//       .then(data => {
//         return data.json();
//       })
//       .then(displayResults);
// }
// function displayResults(data){
//     console.log(data);
    // let title=document.querySelector("#title");
//     title.innerText=`${data.books[0].title}`;
    // let subtitle=document.querySelector("#subtitle");
//     subtitle.innerText=`${data.books[0].title}`;
    // let img=document.querySelector("#img");
//     img.src=date.url;
// }
function fetchData(){
    fetch('https://api.itbook.store/1.0/new')
        .then(response => response.json())
        .then(data => {
            let output = '<h1>Lists of Books</h1>';
                    output += '<ul>';
                    data['books'].forEach(function(book) {
                        output += `
                            <li>
                                ${book.title}
                            </li>
                        `;
                    });
                    output += '</ul>'
                    document.getElementById("response").innerHTML = output;
        })
}
fetchData();