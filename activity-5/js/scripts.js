//Package Data Array
var data = [
    {
        name: 'Gitlens',
        description: 'GitLens is a powerful open-source extension for Visual Studio Code built and maintained by GitKraken',
        author: 'GitKraken',
        url: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens',
        downloads: 40334981,
        stars: 856,
        price: 'Free',
        selector: 'p1'
    },
    {
        name: 'Path Intellisense',
        description: 'The path intellisense extension helps to autocomplete filenames.',
        author: 'Christian Kohler',
        url: 'https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense',
        downloads: 15860295,
        stars: 122,
        price: 'Free',
        selector: 'p2'
    }
];

//(Atom) Package constructor function
function Package(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;

    this.getFormattedDownloads = function () {
        return this.downloads.toLocaleString();
    };

    this.getFormattedStars = function () {
        return this.stars.toLocaleString();
    };
}

/********************
 * Utility functions
 * ***************** */

//Returns today's date, formatted
var getTodaysDate = function () {
    var today = new Date();
    return today.toDateString();
};

//Returns DOM element by id
var getEl = function (id) {
    return document.getElementById(id);
}

/**
 * @param {Package} package
 * @return {void}
 */


var writePackageInfo = function(package) {
    var selector = package.selector,
     nameEl = getEl(selector + '-name'),
     descEl = getEl(selector + '-description'),
     authEl = getEl(selector + '-author'),
     downloadEl = getEl(selector + '-downloads'),
     starsEl = getEl(selector + '-stars');

     //Write package data to DOM elements
nameEl.textContent = package.name;
descEl.textContent = package.description;
authEl.textContent = package.author;
downloadEl.textContent = package.getFormattedDownloads();
starsEl.textContent = package.getFormattedStars();
}



/**
 * Utilize package data and constructor objs to 
 * construct each package, then write it to the page
 */
var init = function() {
    //write data
    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    /**Write package data one-by-one
     * or by using a for loop if you are comfortable doing so
     */
    
    //one-by-one
    var emmet = new Package(data[0]);
    writePackageInfo(emmet);

    var beautify = new Package(data[1]);
    writePackageInfo(beautify);
}

//Call the init function to run the script
init();