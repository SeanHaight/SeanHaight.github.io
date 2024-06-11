function replaceMain(tab) {
    const el = document.getElementById("main");
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
    if (tab == 'Data Science') { //first flex-direction row needs to be changed
      el.innerHTML = `
      <div style="display:flex; flex-direction: column;">
        <div style="display:flex; flex-direction: row; margin-bottom:2rem;">
            <img id="portrait" style="margin-right: 1rem" src="Images/arbutus.jpg" width="260rem" length="250rem">

            <div>
                I used iNaturalist data to create a range map for the species in the genus <a href="https://www.inaturalist.org/taxa/51047-Arbutus">Arubuts</a>.
                Rather than mapping individual observations I wrote a clustering algorthim to group the observations into reasonable populations and constructed polygons for each population.
                You can find the map <a href="GeoDjango/index.html">here</a> and the github with all the code <a href=https://github.com/SeanHaight/madroneRange>here</a>.
            </div>
        </div>

        <div style="display:flex; flex-direction: row; margin-bottom:2rem;">
            <img id="portrait" style="margin-right: 1rem" src="Images/salmon.jpeg" width="260rem" length="250rem">

            <div>
                Working together with three other students I modeled Salmon viability in the Strait of Georgia using a wide variety of environmental factors. 
                You can find a link to the github <a href="https://github.com/SeanHaight/SalmonPopulationProject">here</a>.
            </div>
        </div>

        <div style="display:flex; flex-direction: row; margin-bottom:2rem;">
            <img id="portrait" style="margin-right: 1rem" src="Images/rosa.jpg" width="260rem" length="250rem">

            <div>
                I developed a image classification model to distinguish between photos of roses in bloom and those that are not in bloom. 
                To do this I trained a convolutional neural network on 4000 labeled iNaturalist images. 
                For just roses I achieved a generalization accuracy of 93%. 
                I'm currently working to expand this model from just roses to all angiosperms in the Northwest, excluding Poaceae (grasses).
                You can find the github <a href="https://github.com/SeanHaight/FlowerIdentificationProject">here</a>.   
            </div>
        </div>
    </div>
    `
    }
    else if (tab == 'research') {
      el.innerHTML = `<h3>
        I am interested in number theory and combinatorics, particularly using analytic methods.
        <br>The following is a list of papers I've worked on.
        <br><br>
      </h3>`
      
      for (let i = 0; i < paperList.length; i++) {
        const { title, journal_title, journal_link, year, pdf_link } =  paperList[i];
        el.append(paperGen(title, journal_title, journal_link, year, pdf_link));
      }
    }
  };