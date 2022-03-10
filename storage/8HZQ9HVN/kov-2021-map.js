var view;
var zoom;
var svg;
var width = 1625;
var height = 1053;
var kovCtrl;
var colorsSet = false;


var colorMap = {
    'Eesti Keskerakond': '#007e5b',
    'Eesti Konservatiivne Rahvaerakond': '#2039b5',
    'Eesti Reformierakond': '#ffdb00',
    'Eesti Tulevikuerakond': '#ff8002',
    'Erakond Eesti 200': '#02c0c9',
    'Erakond Eestimaa Rohelised': '#88b04b',
    'ISAMAA Erakond': '#0f9ad7',
    'Erakond Isamaa ja Res Publica Liit': '#0f9ad7', //remove
    'Sotsiaaldemokraatlik Erakond': '#da322a',
    'Valimisliit': '#808080',
    'Üksikkandidaadid': '#808080',
};

function showCoords(id, dataName, fromSelect) {
    if (id.includes('0586') && id != '05861') {
        return;
    }

    var elements = document.getElementsByClassName('municipality')

    for (var element of elements) {
      element.classList.remove('active')
    }

    var elements = document.getElementsByClassName('cloned-municipality');
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }

    var e = window.event;
    var svgContainer = document.getElementById('kov-2021-view');
    if (fromSelect) {
        var copiedChild = document.getElementById(id);
        var clonedChild = copiedChild.cloneNode(true);
    } else {
        var copiedChild = e.target.parentElement;
        var clonedChild = copiedChild.cloneNode(true);
    }
    clonedChild.classList.add("active");
    clonedChild.classList.add("cloned-municipality");
    svgContainer.append(clonedChild);



    var element = document.getElementById(id);
    var parentElement = element.parentElement;
    if (id == '0784') {
        parentElement = document.getElementById(id);
    }
    var adminUnitCode = id;
    var parentUnitCode = element.getAttribute('parent-id');

    var cityCode = element.getAttribute('city-id');
    if (cityCode) {
        var copiedChild = document.getElementById(cityCode);
        var cityElement = copiedChild.cloneNode(true);
        cityElement.classList.add("cloned-municipality");
        svgContainer.append(cityElement);
    }

    if (!fromSelect && kovCtrl != undefined) {
        kovCtrl.changeCounty(parentUnitCode, adminUnitCode, false);
    }
    var position = getPosition(parentElement);
    var infoElement = document.querySelector('#info-selection');
    infoElement.textContent = element.getAttribute('data-name');

    document.querySelector('#info-selection').style.animationName = 'show';


    svg.transition()
        .duration(400)
        .call(
            zoom.transform,
            d3.zoomIdentity
                .translate(width / 2, height / 2)
                .scale(2.15)
                .translate(-position[0], -position[1])
        )
    var maakonnad = $('#Maakonnad');
    maakonnad.children().css({'opacity': 0.3})
    var maakonnad = $('#Tallinn-highlight');
    maakonnad.children().css({'opacity': 0.3})
    var maakonnad = $('#Saared');
    maakonnad.children().css({'opacity': 0.3})
    parentElement.style.opacity = 1;

}

function setMunicipalityColors(data) {
    if (!data && kovCtrl) {
        data = kovCtrl.winningParties;
    }
    if (!data || data.length == 0 || colorsSet) {
        return;
    }
    var elements = document.getElementsByClassName('municipality');
    for (var element of elements) {
        colorsSet = true;
        if (element.id) {
            var sD = data.filter(function(c) {
                return c.adminUnitCode == element.id;
            });
            if (sD.length == 1 && sD[0].partyVotes != 0) {
                if (sD[0].party.toLowerCase().includes('valimisliit')) {
                    var color = colorMap['Valimisliit'];
                } else {
                    var color = colorMap[sD[0].party];
                }
                element.children[0].style.fill = color;
                for (var child of element.children) {
                    child.style.fill = color;
                }
            }
        }
    }
}

function zoomIn() {
    svg.transition().call(zoom.scaleBy, 2);
}

function zoomOut() {
    svg.transition().call(zoom.scaleBy, 0.5);
}

function getPosition(element) {
    var box = element.getBBox()
    var x = box.x + box.width / 2;
    var y = box.y + box.height / 2;

    return [x, y]
}

function hide() {
    document.querySelector('#info-selection').style.animationName = 'hide';
    var infoElement = document.querySelector('#info-selection');
    infoElement.textContent = 'EESTI VABARIIK';

    if (kovCtrl != undefined) {
        kovCtrl.getOverrallResults();
    }

    reset();
}

function reset() {
    var position = getPosition(document.getElementById('kov-2021-view'));
    var maakonnad = $('#Maakonnad');
    maakonnad.children().css({'opacity': 1})
    var maakonnad = $('#Tallinn-highlight');
    maakonnad.children().css({'opacity': 1})
    var maakonnad = $('#Saared');
    maakonnad.children().css({'opacity': 1})

    var elements = document.getElementsByClassName('cloned-municipality');
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
    svg.transition()
        .duration(400)
        .call(
            zoom.transform,
            d3.zoomIdentity
                // .translate(width / 2, height / 2)
                .scale(0.95)
                // .translate(-position[0], -position[1])
                .translate(0, 0)
        )
}

var zoomReset = false;

window.onload = initOnLoad;

function initOnLoad() {
    if (document.querySelector('.kov-2021-svg') == null || svg != undefined) {
        return;
    }
    [width, height] = document.querySelector('.kov-2021-svg')
        .getAttribute('viewBox')
        .split(' ')
        .slice(-2)
        .map(Number);

    svg = d3.select(".kov-2021-svg")

    zoom = d3.zoom()
        .scaleExtent([0.9, 10])
        .on("zoom", zoomed);

    view = d3.select("#kov-2021-view");
    svg.call(zoom);

    function zoomed({ transform }) {
        var new_width = width * 0.8 * transform.k;
        var new_height = height * 0.8 * transform.k;

        if (!zoomReset && (transform.x > new_width
            || transform.x < -new_width
            || transform.y > new_height
            || transform.y < -new_height)) {
            zoomReset = true;
            var position = getPosition(document.getElementById('kov-2021-view'));
            svg.transition()
                .delay(300)
                .duration(400)
                .call(
                    zoom.transform,
                    d3.zoomIdentity
                        .translate(width / 2, height / 2)
                        .scale(0.95)
                        .translate(-position[0], -position[1])
                )
                .on("end", () => zoomReset = false);
            setTimeout(() => zoomReset = false, 500);
        }
        view.attr("transform", transform);
    }

    if (angular.element('[ng-controller="kov2021resultsController"]').length <= 0) {
        return;
    }

    kovScope = angular.element('[ng-controller="kov2021resultsController"]').scope();
    kovCtrl = kovScope;
    setMunicipalityColors();
}
