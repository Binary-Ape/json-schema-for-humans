// region SEARCH FUNCTIONS
// Build an index on loading webpage
const index = new Map()
const SearchInput = debounce(() => filter_properties());
let autocomplete = document.getElementById("property_autocomplete")

// Get all Properties and make a unique set
let properties = Array.from(document.querySelectorAll(".property-name"),
    property => property.innerHTML.toLowerCase()
)
properties = [...new Set(properties)].sort()

// Index Things we need to make the search snappy
// Map Properties -> [Accordion Items, Accordion Collapses]
properties.forEach(function (property) {
    // Autocomplete
    let option = document.createElement("option")
    option.value = property
    option.innerHTML = property
    autocomplete.appendChild(option)

    // Build out
    let parents = []
    document.querySelectorAll("div.accordion-item[property='" + property + "']").forEach(item => {
        get_parents(item, parents)
    })

    index.set(property,
        [
            document.querySelectorAll("div.accordion-item[property='" + property + "']"),
            document.querySelectorAll("div.accordion-collapse[property='" + property + "']"),
            parents
        ]
    )
})


function filter_properties() {
    let hide = []
    let found = []
    let open = []
    let filter = document.getElementById("property_search").value.toLowerCase();

    index.forEach(function (property_info, property) {
        let accordion_items = property_info[0]
        // let collapse_items = property_info[1] // TBD - for opening to depth
        let parents = property_info[2]
        if (property.toLowerCase().indexOf(filter) > -1) {
            found.push(...accordion_items, ...parents)
        } else {
            hide.push(...accordion_items, ...parents)
        }
    })

    hide = new Set(hide.filter((el) => !found.includes(el)))

    hide.forEach(function (item) {
        if (filter.length !== 0 && item.classList.contains("show")) {
            const toggle = new bootstrap.Collapse(item)
        }
    })
    found = new Set(found)
    found.forEach(function (item) {
        if (!item.classList.contains("show")) {
            const toggle = new bootstrap.Collapse(item)
        }
    })
}

function get_parents(element, parents) {
    parent = element.parentNode.closest(".accordion-item")
    if (parent) {
        parents.push(parent)
        get_parents(parent, parents)
    }
    return parents
}

function debounce(callback, wait = 300) {
    let timeoutId = null;
    return (...args) => {
        window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
            callback(...args);
        }, wait);
    };
}

// endregion