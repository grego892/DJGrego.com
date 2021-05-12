document.getElementById("getBirds").addEventListener
('click', getBirds);

function getBirds(){
    fetch('https://api.ebird.org/v2/data/obs/US-TX-245/recent?key=bg3jo7g6vasr')
    .then((res) => res.json())
    .then((data) => {

        let tbl = document.createElement("table");
        let tblBody = document.createElement("tbody");
        data.forEach(d => {
            let row = document.createElement("tr");
            row.appendChild(document.createTextNode(d.comName));
            //row.appendChild(document.createTextNode(d.locName));
            //row.appendChild(document.createTextNode(d.obsDt));
            //row.appendChild(document.createTextNode(d.howMany));
            tblBody.appendChild(row);
        });

        tbl.appendChild(tblBody);
        console.log(output);
        document.getElementById("output").appendChild(tbl);
        
    })
}