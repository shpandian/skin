function createForm(header) {
    var form = document.createElement('form');
    var submitButton = document.createElement('input');
    var guideCheckbox = document.createElement('input');
    var guideLabel = document.createElement('label');
    var skinLargeCheckbox = document.createElement('input');
    var skinLargeLabel = document.createElement('label');

    guideCheckbox.setAttribute('type', 'checkbox');
    guideCheckbox.id = 'skin-guide';
    guideCheckbox.name = 'skin-guide';
    guideLabel.innerText = 'guidelines';
    guideLabel.setAttribute('for', 'skin-guide');

    skinLargeCheckbox.setAttribute('type', 'checkbox');
    skinLargeCheckbox.id = 'skin-large';
    skinLargeCheckbox.name = 'skin-large';
    skinLargeLabel.innerText = 'skin-large';
    skinLargeLabel.setAttribute('for', 'skin-large');

    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Apply');

    form.appendChild(guideCheckbox);
    form.appendChild(guideLabel);

    form.appendChild(skinLargeCheckbox);
    form.appendChild(skinLargeLabel);

    form.appendChild(submitButton);
    header.appendChild(form);
}

function createGuides(container) {
    var leftGuide = document.createElement('div');
    var rightGuide = document.createElement('div');

    leftGuide.className = "guide guide--left";
    rightGuide.className = "guide guide--right";

    container.appendChild(leftGuide);
    container.appendChild(rightGuide);
}

window.setTimeout(function() {
    var body = document.querySelector('body');
    var header = body.querySelector('header');
    var newClassList = [];
    var currentClassList = body.className === '' ? [] : body.className.split(' ');
    var queryString = window.location.search;
    var h1 = document.getElementsByTagName('h1')[0];

    createForm(header);
    createGuides(body);

    if (h1 && queryString.indexOf('skin-large=on') != -1 ) {
        newClassList.push('skin-large');
        h1.innerText += " - skin-large";
        document.getElementById('skin-large').checked = true;
    }

    if (queryString.indexOf('skin-guide=on') != -1 ) {
        newClassList.push('skin-guide');
        document.getElementById('skin-guide').checked = true;
    }

    var fullClassList = currentClassList.concat(newClassList);

    if (fullClassList.length > 0) {
        body.className = fullClassList.join(' ');
    }

}, 32);
