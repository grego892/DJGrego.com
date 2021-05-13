let data = [];
let x = "";
function getBirds(){
    var birdd = document.getElementById("birdd");
    var birdSelected = birdd.options[birdd.selectedIndex].value;
    fetch('https://api.ebird.org/v2/data/obs/'+birdSelected+'/recent?sort=date&key=bg3jo7g6vasr')
    .then((res) => res.json())
    .then((data) => {
      let table = `
            <table class="styled-table"> 
                <tr class="active-row">
                  <th>Common Name</th>
                  <th>Location</th>
                  <th>How Many</th>
                  <th>Date/Time</th>
               </tr>
               <tr>`
      
      for (i = 0; i < data.length; i++) {
        table += `
          <tr><td>${data[i].comName}</td>
          <td>${data[i].locName}</td>
          <td>${data[i].howMany}</td>
          <td>${data[i].obsDt}</td></tr>
       `
        };

      table += `</tr>             
                  </table>`;
            document.getElementById('output').innerHTML = table;
            });
};

getBirds();