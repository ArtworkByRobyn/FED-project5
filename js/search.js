const search = document.querySelector( '#search' );
const boxTexts = document.querySelectorAll( '.gallery' );

const handleSearch = event => {
    const searchTerm =
event.target.value.toLowerCase();

boxTexts.forEach(boxText => {
    const text = boxText.textContent.toLowerCase();
    const box = boxText.parentElement;

    if (text.includes(searchTerm)) {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
    });

};

search.addEventListener('keyup', handleSearch);