$(document).ready(function () { 
    const actors = $('#actors');
    $(window).on("load", function () {
        $.ajax({
            type: "GET",
            url: "https://swapi.dev/api/people/",
            dataType: "json",
            async: "true",
            success: function (response) {
                displayPerson(response.results)
            }
        })    
    })

    const displayPerson = (person) => {
        const htmlString = person.map(p => {
            return `<div class="actor">
                        <a href="#"><img class="actor-poster" src="images/${p.name}.jpg" alt="actor-poster"></a>
                        <div class="actor-description">
                            <h1 class="actor-title"><a class="actor-link" href="#">${p.name}</a></h1>
                        </div>
                    </div>`;
        }).join('');
        actors.html(htmlString)
    }
})