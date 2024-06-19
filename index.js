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
    else if (tab == 'Home') {
      el.innerHTML = `<div style="display:flex; flex-direction: row;">
      <img id="portrait" style="margin-right: 1rem; margin-top:1rem;" src="Images/sean.jpg" width="260rem" height="250rem">

      <div>
        I am a 6th year Ph. D. student at the University of Oregon studying under the direction of Dr. Ellen Eischen.
        I am currently seeking data science positions in the greater Seattle area. 
        You can find several data driven projects I've worked on over the last year under the data science tab.
        My dissertation generalizes the theory of Hermitian Jacobi forms to degree greater than 2 and gives some non-vanishing results for the Fourier coefficients
        of Hermitian modular forms as a consequence. Outside of math I am interested in the natural world. I am very active on <a href = "https://www.inaturalist.org/people/3861712">iNaturalist</a> 
        both with the uploading of my own observations and with the identification of others. You can see some of the best photos I've taken under the Nature tab.
      </div>
    </div>`
    }
    else if (tab == 'Mathematics') {
      el.innerHTML = `
      <div style="display:flex; flex-direction: column;">
        <div style="display:flex; flex-direction: row; margin-bottom:2rem;">
            <img id="portrait" style="margin-right: 1rem" src="Images/The_modular_group_PSL_2(Z).png" width="260rem" length="250rem">

            <div>
                As a PhD student at University of Oregon I studied Hermitian Jacobi Forms under Dr. Ellen Eischen.
                My thesis extends Klaus Haverkamp's "Hermitian Jacobi Forms" to higher degree and gives some non-vanishing results for Fourier coefficients of Hermitian modular forms as a consequence.
                You can find a link to my dissertation <a href="Documents/Hermitian_Jacobi_Forms_of_Higher_Degree.pdf">here</a>.
            </div>
        </div>
    </div>
    `
    }
    else if (tab == 'Nature') {
      el.innerHTML = `
      <div style="display:flex; flex-direction: column;">
          <img id ="Nature_Photo" src="Images/Nature Photos/C_leichtlinii.jpeg">
          <img id ="Nature_Photo" src="Images/Nature Photos/E_dorsatum.jpg">
          <img id ="Nature_Photo" src="Images/Nature Photos/E_lacteata.jpeg">
          <img id ="Nature_Photo" src="Images/Nature Photos/K_fragrans.jpg">
          <img id ="Nature_Photo" src="Images/Nature Photos/M_uniflora.jpeg">
          <img id ="Nature_Photo" src="Images/Nature Photos/C_bubulcus.jpeg">
    </div>
    `
    }
  };