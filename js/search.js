const search = document.querySelector( '#search' );
const boxTexts = document.querySelectorAll( '.gallery a' );

const handleSearch = event => {
    const searchTerm =
event.target.value.toLowerCase();

boxTexts.forEach(boxText => {
    const text = boxText.getAttribute('data-caption').toLowerCase();

    if (text.includes(searchTerm)) {
        boxText.style.display = "block";
    } else {
        boxText.style.display = "none";
    }
    });

};

search.addEventListener('keyup', handleSearch);