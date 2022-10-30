function smoothScroll(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);
    
    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);
    
    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
function removeHidden() {
    // grab everything we need
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
}
function collapse(idMenu, arrowClass) {
    // grab everything we need
    const menu = document.querySelector("." + idMenu);
    const arrow = document.querySelector("." + arrowClass);
    if (arrow.getAttribute("d") == "M5 15l7-7 7 7") {
        arrow.setAttribute("d", "M19 9l-7 7-7-7");
    } else {
        arrow.setAttribute("d", "M5 15l7-7 7 7");
    }
    menu.classList.toggle("hidden");

}
function showGraph(classMenu, classImage, classBtn) {
    const menu = document.querySelector("." + classMenu);
    const image = document.querySelector("." + classImage);
    btn = document.querySelector("." + classBtn);
    menu.classList.toggle("hidden");
    image.classList.toggle("hidden");
    if (btn.innerHTML == "Show graph") {
        btn.innerHTML = "Show statistics";
    } else {
        btn.innerHTML = "Show graph";
    }
}
function toggleCases(btn) {
    image1 = document.querySelector(".daily_cases_graph");
    image2 = document.querySelector(".linear_cases_graph");
    image3 = document.querySelector(".logarithmic_cases_graph");

    para = document.querySelector("p.cases_p");
    desc = document.querySelector("p.desc_cases");
    extra = document.querySelector("p.extra_cases");

    switch (btn.id) {
        case "daily1":
            para.innerHTML = "Daily New Cases";
            desc.innerHTML = "Cases per Day";
            extra.innerHTML = "Data as of 0:00 GMT+0";

            if (image1.className.includes("hidden")) {
                image1.classList.toggle("hidden");
            }
            if (!image2.className.includes("hidden")) {
                image2.classList.toggle("hidden");
            }
            if (!image3.className.includes("hidden")) {
                image3.classList.toggle('hidden');
            }
            break;
        case "linear1":
            para.innerHTML = "Total cases";
            desc.innerHTML = "(Linear Scale)";
            extra.innerHTML = "";

            if (image2.className.includes("hidden")) {
                image2.classList.toggle("hidden");
            }
            if (!image1.className.includes("hidden")) {
                image1.classList.toggle("hidden");
            }
            if (!image3.className.includes("hidden")) {
                image3.classList.toggle('hidden');
            }
            break;
        case "logarithmic1":
            para.innerHTML = "Total cases";
            desc.innerHTML = "(Logarithmic Scale)";
            extra.innerHTML = "";

            if (image3.className.includes("hidden")) {
                image3.classList.toggle("hidden");
            }
            if (!image1.className.includes("hidden")) {
                image1.classList.toggle("hidden");
            }
            if (!image2.className.includes("hidden")) {
                image2.classList.toggle('hidden');
            }
            break;
    }
}

function toggleDeaths(btn) {
    image1 = document.querySelector(".daily_deaths_graph");
    image2 = document.querySelector(".linear_deaths_graph");
    image3 = document.querySelector(".logarithmic_deaths_graph");

    para = document.querySelector("p.deaths_p");
    desc = document.querySelector("p.desc_deaths");
    extra = document.querySelector("p.extra_deaths");

    switch (btn.id) {
        case "daily2":
            para.innerHTML = "Daily deaths";
            desc.innerHTML = "Deaths per Day";
            extra.innerHTML = "Data as of 0:00 GMT+0";

            if (image1.className.includes("hidden")) {
                image1.classList.toggle("hidden");
            }
            if (!image2.className.includes("hidden")) {
                image2.classList.toggle("hidden");
            }
            if (!image3.className.includes("hidden")) {
                image3.classList.toggle('hidden');
            }
            break;
        case "linear2":
            para.innerHTML = "Total deaths";
            desc.innerHTML = "(Linear Scale)";
            extra.innerHTML = "";

            if (image2.className.includes("hidden")) {
                image2.classList.toggle("hidden");
            }
            if (!image1.className.includes("hidden")) {
                image1.classList.toggle("hidden");
            }
            if (!image3.className.includes("hidden")) {
                image3.classList.toggle('hidden');
            }
            break;
        case "logarithmic2":
            para.innerHTML = "Total deaths";
            desc.innerHTML = "(Logarithmic Scale)";
            extra.innerHTML = "";

            if (image3.className.includes("hidden")) {
                image3.classList.toggle("hidden");
            }
            if (!image1.className.includes("hidden")) {
                image1.classList.toggle("hidden");
            }
            if (!image2.className.includes("hidden")) {
                image2.classList.toggle('hidden');
            }
            break;
    }
}


function searchTable(event) {
    // Declare variables
    var input, filter, table, tr, td, i, j, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.trim().toUpperCase();
    table = document.getElementById("tBody");
    tr = table.getElementsByTagName("tr");

    if (event.keys.velue() === 'Enter') {
        alert(event.value);
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td");
            for (j = 0; j < td.length; j++) {
                if (td[j]) {
                    txtValue = td[j].innerHTML || td[j].innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
        }
    }
}

