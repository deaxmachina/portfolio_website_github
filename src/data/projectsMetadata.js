const projectsMetadata = [
  {
    id: 'kanji-radicals', 
    hasPage: true, 
    tag: 'side-project',
    title: "Kanji with radicals",
    websiteUrl: "https://kanjiviz.netlify.app/",
    imgUrl: "https://live.staticflickr.com/65535/52269112884_7c92e1bbd0_h.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/52269112884_7c92e1bbd0_h.jpg",
    individualPageImgUrl: 'https://live.staticflickr.com/65535/52269112884_7c92e1bbd0_h.jpg',
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/52269112884_7c92e1bbd0_h.jpg",
    backgroundColour: "#b575a8",
    responsibleFor: 'everything: data processing, design, visualisation, page code',
    tools: 'Svelte, D3.js, HTML5 Canvas, Python',
    client: '',
    standardLayout: true, 
    description: 
    <>
    <p>
        Network graphs showing the connections between kanji and radicals they include. 
        My hypothesis was that visualising kanji like this, i.e. using a force graph that 
        naturally nudges kanji which contain similar building blocks together, might help with kanji memorisation. 
        I also used the classification by concept by Wiki dataset to explore patterns between kanji belonging 
        to similar meaning categories and their constituent parts.
    </p>
    </>
  },
  {
    id: 'i-dont-like-you', 
    hasPage: true, 
    tag: 'side-project',
    title: "Hate Crime in London - data art",
    websiteUrl: "https://deaxmachina.github.io/hatecrime_uk_p5/",
    imgUrl: 'https://live.staticflickr.com/65535/51359070135_7aaf27802e_o.png',
    smallImgUrl: 'https://live.staticflickr.com/65535/51359070135_7aaf27802e_o.png',
    individualPageImgUrl: 'https://live.staticflickr.com/65535/51357330062_7e5e5d40f1_o.png',
    individualPageSmallImgUrl: 'https://live.staticflickr.com/65535/51357330062_7e5e5d40f1_o.png',
    backgroundColour: "#51AF98",
    responsibleFor: 'everything: data gathering, design, visualisation, page code',
    tools: 'p5.js',
    client: 
    <>
      <em>personal project</em> for 
      the <a className="link-project" href="https://showcase.p5js.org/" target='_blank'>p5.js 2021 Showcase: The Love Ethic!</a> 
    </>,
    standardLayout: true, 
    description: 
    <>
    <p>
      I created this piece as a submission to the p5.js 2021 Showcase in July 2021. 
      I wanted to express with data art both the existing and the missing numbers behind 
      racist hate crime in the UK, and specifically in London. 
    </p>
    </> 
  },
  {
    id: 'anime-timeline', 
    hasPage: true, 
    tag: 'side-project',
    title: "Timeline of Anime",
    websiteUrl: "https://animetimeline.netlify.app/",
    imgUrl: 'https://live.staticflickr.com/65535/51100639753_1f4281a9e2_o.png',
    smallImgUrl: 'https://live.staticflickr.com/65535/51100904620_e7c1a12e14_o.png',
    individualPageImgUrl: "https://live.staticflickr.com/65535/51100639753_1f4281a9e2_o.png",
    individualPageSmallImgUrl: 'https://live.staticflickr.com/65535/51100904620_e7c1a12e14_o.png',
    backgroundColour: "#4E1B34",
    responsibleFor: 'everything: data processing, design, visualisation, page code',
    tools: 'D3.js, React, Python',
    client: '',
    standardLayout: true, 
    description: 
    <>
      <p>
        I started this project with the idea of expressing through visualisation 
        the evolution of anime genres over time. Was sci-fi more popular in the 90s, were the 2000s truly the 
        ‘golden age’ of anime, and if so, what genres were prevalent during that time? As is often the case, 
        the story I imagined the data would tell was different to reality. 
      </p>
      <br />
      <p>
        <a style={{color: "#4E1B34"}} className="link-project" href="https://animetimelinedemo.netlify.app/" target="_blank">Here</a> is
        the version I used for a D3 talk 
        I gave at LeWagon Tokyo; the GitHub repository is  
        over <a style={{color: "#4E1B34"}} className="link-project" href="https://github.com/deaxmachina/lewagon_demo_vanilla" target="_blank">here</a>.
      </p>
    </>    
  },
  {
    id: 'co2-emissions', 
    hasPage: true, 
    tag: 'side-project',
    title: "CO2 Emissions in Cities",
    websiteUrl: "https://co2cities.netlify.app/",
    imgUrl: "https://live.staticflickr.com/65535/51100260017_687728e4c8_o.png",
    smallImgUrl: "https://live.staticflickr.com/65535/51100260017_687728e4c8_o.png",
    individualPageImgUrl: "https://live.staticflickr.com/65535/51100260017_687728e4c8_o.png",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/51100260017_687728e4c8_o.png",
    backgroundColour: "#2E5659",
    responsibleFor: 'everything: data preparation, visualisation, website',
    tools: 'D3.js, React, Python',
    client: 
    <>
        Hackathon project for <a href="https://climate-crisis.devpost.com/" className="link-project" target="_blank"> 2021 Climate Crisis AI Hackathon</a> by <a href="https://launchlab.ai/" className="link-project" target="_blank">AI Launch Lab</a> and <a href="https://www.climatereality.ca/" className="link-project" target="_blank">The Climate Reality Project Canada</a>. 
    </>,
    standardLayout: true, 
    description: 
    <>
      <p>
        Completed over the course of one weekend (~30 hours) in January 2021.
        Visualisation that can be used to view average CO2 emissions of cities worldwide at a glance, 
        as well as to dive into the data for a specific city – 
        both its emissions and trends over time. 
      </p>
    </>
  },
  {
    id: 'japanese-earthquakes', 
    hasPage: true, 
    tag: 'side-project',
    title: "Earthquake Disasters in Japan",
    websiteUrl: "https://japan-earthquakes.netlify.app/",
    imgUrl: "https://live.staticflickr.com/65535/51100108341_dffc0a04d8_o.png",
    smallImgUrl: "https://live.staticflickr.com/65535/51100108341_dffc0a04d8_o.png",
    individualPageImgUrl: "https://live.staticflickr.com/65535/51100108341_dffc0a04d8_o.png",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/51100108341_dffc0a04d8_o.png",
    backgroundColour: "#286380",
    responsibleFor: 'everything: data preparation, visualisation, website',
    tools: 'D3.js, React, GSAP, Python',
    client: <>individual project while at <em>the University of Tokyo</em></>,
    standardLayout: true, 
    description:
    <>
      <p>
        Between September 2020 and March 2021, I worked on a project to record the memories of survivors of 
        the 2011 Tohoku earthquake and tsunami disaster in north Japan. I wanted to find out more about the 
        history of earthquakes in Japan and set out to create this visualisation, where you can see the magnitude 
        and number of casualties over time side by side. 2011 saw the biggest earthquake in recorded Japanese history, 
        but the deadliest one (1923 Kanto) was far smaller in intensity. 
      </p>
    </>
  },
  {
    id: 'aot-paths', 
    hasPage: true, 
    tag: 'side-project',
    title: "The paths",
    websiteUrl: "https://aot-paths.netlify.app/",
    imgUrl: "https://live.staticflickr.com/65535/52268877683_37540de79c_h.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/52268877683_37540de79c_h.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/52268877683_37540de79c_h.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/52268877683_37540de79c_h.jpg",
    backgroundColour: "#6d91f6",
    responsibleFor: 'everything',
    tools: 'Three.js',
    client: '',
    standardLayout: true, 
    description: 
    <>
      <p>
        A small tribute to the animanga Attack on Titan – a 3D scene of “the Paths”. 
        Note that I did not optimise this! It works great on an overpowered MacBook, but not so great on an older computer or phone.    
      </p>
    </>
  },
  {
    id: 'words-lifetime', 
    hasPage: false, 
    tag: 'side-project',
    title: "Words we say in a lifetime - scrollytelling with D3.js",
    websiteUrl: "https://lifetimeofwords.netlify.app/",
    imgUrl: 'https://live.staticflickr.com/65535/51182741664_87330e57a0_o.jpg',
    smallImgUrl: 'https://live.staticflickr.com/65535/51182741664_87330e57a0_o.jpg',
    individualPageImgUrl: "https://live.staticflickr.com/65535/51183053540_9ed8338364_o.png",
    individualPageSmallImgUrl: 'https://live.staticflickr.com/65535/51183053540_9ed8338364_o.png',
    backgroundColour: "#805880",
    responsibleFor: 'data preparation, visualisation, website',
    tools: 'D3.js, GSAP, Python',
    description: ""
  },
  {
    id: 'co2-trees', 
    hasPage: false, 
    tag: 'side-project',
    title: "Trees and CO2 in the atmosphere - data art with p5.js",
    websiteUrl: "https://deaxmachina.github.io/p5_trees/",
    imgUrl: 'https://live.staticflickr.com/65535/51276665860_581042e6c9_o.png',
    smallImgUrl: 'https://live.staticflickr.com/65535/51276665860_581042e6c9_o.png',
    individualPageImgUrl: "https://live.staticflickr.com/65535/51276665860_581042e6c9_o.png",
    individualPageSmallImgUrl: 'https://live.staticflickr.com/65535/51276665860_581042e6c9_o.png',
    backgroundColour: "#219ebc",
    responsibleFor: 'visualisation, website',
    tools: 'p5.js, JavaScript',
    description: ""
  },
  {
    id: 'anime-colours', 
    hasPage: true, 
    tag: 'side-project',
    title: "Visualisations of colours in anime",
    websiteUrl: "https://observablehq.com/@deaxmachina/colours-in-arcane",
    imgUrl: "https://live.staticflickr.com/65535/52269365575_8aab9f523a_h.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/52269365575_8aab9f523a_h.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/52269365575_8aab9f523a_h.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/52269365575_8aab9f523a_h.jpg",
    backgroundColour: "#252e25",
    responsibleFor: 'data gathering, concept, visualisation',
    tools: 'D3.js, HTML5 Canvas, GSAP, Python',
    client: '',
    standardLayout: true, 
    description: 
    <> 
    <p>
    The mood of an animation contained in its colour palette. A collection of visualisations of colour in anime, currently including: <a href="https://observablehq.com/@deaxmachina/all-the-colours-in-totoro"
      style={{color: "#252e25"}} className="link-project" target="_blank">Totoro</a>, <a href="https://observablehq.com/@deaxmachina/colours-in-arcane"
      style={{color: "#252e25"}} className="link-project" target="_blank">Arcane</a>
    </p>
    </>
  },
  {
    id: 'fortune-ceos', 
    hasPage: false, 
    tag: 'side-project',
    title: "Fortune 1000 CEOs",
    websiteUrl: "https://observablehq.com/@deaxmachina/fortune-1000-us-companies-2020",
    imgUrl: "https://live.staticflickr.com/65535/52268899061_251d619abf_h.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/52268899041_a73ec3416e_h.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/52268899061_251d619abf_h.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/52268899041_a73ec3416e_h.jpg",
    backgroundColour: "#de7457",
    responsibleFor: 'design, visualisation',
    tools: 'D3.js',
    client: 'personal project',
    standardLayout: true, 
    description: ""
  },
  {
    id: 'sakura-kyoto',
    hasPage: false, 
    tag: 'side-project', 
    title: "Cherry Blossom Bloom Times in Kyoto",
    websiteUrl: "https://observablehq.com/@deaxmachina/cherry-blossom-bloom-times-in-kyoto",
    imgUrl: 'https://live.staticflickr.com/65535/51102462279_101779f316_o.png',
    smallImgUrl: 'https://live.staticflickr.com/65535/51102629263_70096ca930_o.png',
    individualPageImgUrl: "https://live.staticflickr.com/65535/51102462279_101779f316_o.png",
    individualPageSmallImgUrl: 'https://live.staticflickr.com/65535/51102629263_70096ca930_o.png',
    backgroundColour: "#e27396",
    responsibleFor: 'data preparation, visualisation, website',
    tools: 'D3.js, Python',
    description: ""
  },
  {
    id: 'kimono-colours', 
    hasPage: false, 
    tag: 'side-project',
    title: "Colours in kimono",
    websiteUrl: "https://observablehq.com/@deaxmachina/radial-graph-kimono-colours",
    imgUrl: "https://live.staticflickr.com/65535/52268953988_7c20b9d0e8_h.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/52268918601_728af332db_h.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/52268918601_728af332db_h.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/52268918601_728af332db_h.jpg",
    backgroundColour: "#F47983",
    responsibleFor: 'everything',
    tools: 'D3.js',
    client: 'personal project',
    standardLayout: true, 
    description: ""
  },
  {
    id: 'it-is-getting-hotter', 
    hasPage: true, 
    tag: 'work-reuters',
    title: "Reuters | It's getting hotter all year round",
    websiteUrl: "https://graphics.reuters.com/CLIMATE-CHANGE/znpneamnkvl/",
    imgUrl: "https://live.staticflickr.com/65535/52269448720_59e1b67673_h.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/52269448720_59e1b67673_h.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/52269448720_59e1b67673_h.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/52269448720_59e1b67673_h.jpg",
    backgroundColour: "#aea4db",
    responsibleFor: 'data collection, visualisation design and code',
    tools: 'D3.js, HTML5 Canvas, Svelte',
    client: <><em>Reuters Graphics</em></>,
    standardLayout: true, 
    description:  <></>
  },
  {
    id: 'fleeing-ukraine', 
    hasPage: true, 
    tag: 'work-reuters',
    title: "Reuters | Fleeing Ukraine",
    websiteUrl: "https://graphics.reuters.com/UKRAINE-CRISIS/REFUGEES/dwvkrqzlnpm/",
    imgUrl: "https://live.staticflickr.com/65535/52268982976_717bf74290_h.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/52268982976_717bf74290_h.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/52268982976_717bf74290_h.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/52268982976_717bf74290_h.jpg",
    backgroundColour: "#547eab",
    responsibleFor: 'code for 3D and 2D graphs, visualisation and page design (partial)',
    tools: 'Three.js, D3.js, HTML5 Canvas, Svelte',
    client: <><em>Reuters Graphics</em></>,
    standardLayout: true, 
    description:  <></>
  },
  {
    id: 'europe-gas-tracker', 
    hasPage: true, 
    tag: 'work-reuters',
    title: "Reuters | How much of Europe's gas storage is filled",
    websiteUrl: "https://graphics.reuters.com/UKRAINE-CRISIS/EUROPE-GAS/zdvxozxzopx/",
    imgUrl: "https://live.staticflickr.com/65535/52280053967_fb5900df39_h.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/52280049477_31107f1c8f_h.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/52280049477_31107f1c8f_h.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/52280049477_31107f1c8f_h.jpg",
    backgroundColour: "#547eab",
    responsibleFor: 'front-end code (visualisation and page)',
    tools: 'D3.js, Svelte',
    client: <><em>Reuters Graphics</em></>,
    standardLayout: true, 
    description:  <></>
  },
  {
    id: 'french-elections', 
    hasPage: true, 
    tag: 'work-reuters',
    title: "Reuters | French Elections 2022",
    websiteUrl: "https://graphics.reuters.com/FRANCE-ELECTION/POLLS/zjvqkomzlvx/polls/",
    imgUrl: "https://live.staticflickr.com/65535/52268037402_5f3de30dee_h.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/52268037402_5f3de30dee_h.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/52268037402_5f3de30dee_h.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/52268037402_5f3de30dee_h.jpg",
    backgroundColour: "#182438",
    responsibleFor: 'data collection and processing, visualisation design and code, page code',
    tools: 'D3.js, HTML5 Canvas, Svelte, Python',
    client: <><em>Reuters Graphics</em></>,
    standardLayout: true, 
    description: <></>
  },
  {
    id: 'covid-swells', 
    hasPage: true, 
    tag: 'work-reuters',
    title: "Reuters | Covid swells return to Europe",
    websiteUrl: "https://graphics.reuters.com/HEALTH-CORONAVIRUS/EUROPE/klvyknwllvg/index.html",
    imgUrl: "https://live.staticflickr.com/65535/52269140548_d850c34089_h.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/52269275779_1543937678_h.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/52269275779_1543937678_h.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/52269275779_1543937678_h.jpg",
    backgroundColour: "#547fb1",
    responsibleFor: 'data processing (partial), visualisation design (partial) and code for swells graphs and vaccination pacing graph',
    tools: 'D3.js, Svelte, Python',
    client: <><em>Reuters Graphics</em></>,
    standardLayout: true, 
    description: ''
  },
  {
    id: 'war-ukraine-food-crisis', 
    hasPage: true, 
    tag: 'work-reuters',
    title: "Reuters | The war in Ukraine is fuelling a global food crisis.",
    websiteUrl: "https://graphics.reuters.com/UKRAINE-CRISIS/FOOD/zjvqkgomjvx/",
    imgUrl: "https://live.staticflickr.com/65535/52268148217_55aff3e04c_h.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/52268148217_55aff3e04c_h.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/52268148217_55aff3e04c_h.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/52268148217_55aff3e04c_h.jpg",
    backgroundColour: "#d65562",
    responsibleFor: 'hero graphic, page design and code, some of the graphs on the page',
    tools: 'Datawrapper, D3.js, Svelte, Adobe Illustrator',
    client: <><em>Reuters Graphics</em></>,
    standardLayout: true, 
    description: ''
  },
  {
    id: 'road-to-stalemate', 
    hasPage: true, 
    tag: 'work-reuters',
    title: "Reuters | The Road to Stalemate",
    websiteUrl: "https://graphics.reuters.com/UKRAINE-CRISIS/CONTROL/gdpzygorxvw/",
    imgUrl: "https://live.staticflickr.com/65535/52269159878_371c4c3cba_h.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/52269159878_371c4c3cba_h.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/52269159878_371c4c3cba_h.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/52269159878_371c4c3cba_h.jpg",
    backgroundColour: "#ea8677",
    responsibleFor: 'technical implementation of maps (partial) and other page code (partial)',
    tools: 'D3.js, HTML5 Canvas, Svelte',
    client: <><em>Reuters Graphics</em></>,
    standardLayout: true, 
    description: ''
  },
  {
    id: 'ukraine-civilians', 
    hasPage: true, 
    tag: 'work-reuters',
    title: "Reuters | Under fire: Civilian lives and homes destroyed by the conflict",
    websiteUrl: "https://graphics.reuters.com/UKRAINE-CRISIS/CIVILIANS/zgpomygqmpd/",
    imgUrl: "https://live.staticflickr.com/65535/52268201602_fe49481d1f_h.jpg",
    smallImgUrl: "https://live.staticflickr.com/65535/52268201602_fe49481d1f_h.jpg",
    individualPageImgUrl: "https://live.staticflickr.com/65535/52268201602_fe49481d1f_h.jpg",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/52268201602_fe49481d1f_h.jpg",
    backgroundColour: "#2e343f",
    responsibleFor: 'technical implementation of video components',
    tools: 'Svelte',
    client: <><em>Reuters Graphics</em></>,
    standardLayout: true, 
    description: ''
  },
  {
    id: 'covid-news-timeline-japan',
    hasPage: true,  
    tag: 'work-other',
    title: "Covid-19 Event Timeline in Japan",
    websiteUrl: "https://wtnv-lab.github.io/yahoo_news_covid_timeline/",
    imgUrl: 'https://live.staticflickr.com/65535/51225744751_40fe1a4bd2_o.png',
    smallImgUrl: 'https://live.staticflickr.com/65535/51226514274_36a7971232_o.png',
    individualPageImgUrl: "https://live.staticflickr.com/65535/51225744751_40fe1a4bd2_o.png",
    individualPageSmallImgUrl: 'https://live.staticflickr.com/65535/51225744751_40fe1a4bd2_o.png',
    backgroundColour: "#2B505F",
    responsibleFor: 'NLP, visualisation, website',
    tools: 'D3.js, GSAP, Python',
    client: <em>individual research project at the University of Tokyo</em>,
    standardLayout: true, 
    description: 
    <>
        <br/>
        The aim of this archive project was to document the events and topics surrounding the Covid-19 pandemic in Japan, 
        starting from Jan 2020 and running until Dec 2021, primarily via the use of news headlines. 

        The data is 
        from <a style={{color: "#2B505F"}} className="link-project" target="blank" href="http://agora.ex.nii.ac.jp/crisis/covid-19/mass-media/">the Covid-19 News Analysis Database</a> by <a style={{color: "#2B505F"}} className="link-project" target="blank"  href="http://agora.ex.nii.ac.jp/~kitamoto/">Prof Asanobu Kitamoto</a>; articles from Yahoo! Japan. 

    </>
        
  },
  {
    id: 'iwate-archive', 
    hasPage: true, 
    tag: 'work-other',
    title: "Tohoku Earthquake 10th Anniversary Archive",
    websiteUrl: "https://311narratives.archiving.jp",
    imgUrl: "https://live.staticflickr.com/65535/51100202969_ab9cbb0a93_o.png",
    smallImgUrl: "https://live.staticflickr.com/65535/51100210929_d1f6d1a474_o.png",
    individualPageImgUrl: "https://live.staticflickr.com/65535/51100210929_d1f6d1a474_o.png",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/51100210929_d1f6d1a474_o.png",
    backgroundColour: "#222E3A",
    responsibleFor: 'data analysis, NLP, visualisation, website',
    tools: 'D3.js, React, Python (spaCy)',
    client: <>
    <b>for: </b> 
    <a style={{color: "#222E3A"}} className="link-project" href="https://www.iwate-np.co.jp/" target="_blank">Iwate Nippo 岩手日報</a> and <a style={{color: "#222E3A"}} className="link-project" href="https://labo.wtnv.jp/" target="_blank">Watanave Lab</a> at the University of Tokyo 
    </>,
    standardLayout: true, 
    description:  
    <>
      <p>
        The objective of this archive-visualisation was to create a virtual space to
        preserve the thoughts, memories and narratives of survivors of 
        the <a a style={{color: "#222E3A"}} className="link-project" href="https://en.wikipedia.org/wiki/2011_T%C5%8Dhoku_earthquake_and_tsunami" target="_blank">2011 Tohoku earthquake and tsunami disaster</a>,
        using the content of over 500 interviews. This included people’s 
        movements after 11th March 2011, their messages to their deceased loved ones, the 
        rebuilding of their homes, and their experiences over the past 10 years. 
      </p>
      <br />
      <p>
        I was humbled by the experience of working so closely with people who have lived through this 
        disaster, and by the trust placed in me, a non-Japanese non-native speaker, to work with this
        valuable data. My talented colleague, Dr Takata Yurina created 
        a <a style={{color: "#222E3A"}} className="link-project" href="https://311stories.archiving.jp/" target="_blank">map of the movements</a> of
        people whose homes were destroyed – many of them having to move over 4 times in the past 10 years. 
        The full archive page can be viewed 
        on <a style={{color: "#222E3A"}} className="link-project" href="https://www.iwate-np.co.jp/page/higashinihon2021#01-01" target="_blank">the Iwate Nippo website</a>.     
      </p>

    </>
  },
  {
    id: 'tdb-companies-graph', 
    hasPage: true, 
    tag: 'work-other',
    title: "Company Business Relationships Graphs",
    websiteUrl: "https://wtnv-lab.github.io/yahoo_news_covid_timeline/",
    imgUrl: 'https://live.staticflickr.com/65535/51357233830_24893c43ef_o.png',
    smallImgUrl: 'https://live.staticflickr.com/65535/51357233830_24893c43ef_o.png',
    individualPageImgUrl: 'https://live.staticflickr.com/65535/51509252857_26eb8a7148_o.png',
    individualPageSmallImgUrl: 'https://live.staticflickr.com/65535/51509252857_26eb8a7148_o.png',
    backgroundColour: "#62488F",
    responsibleFor: 'visualisation, website',
    tools: 'D3.js, HTML5 Canvas, React.js, Python',
    client: <em> Teikoku Databank, Ltd. 株式会社 帝国データバンク</em>,
    standardLayout: false, 
    description: 
    <></> 
  },
  {
    id: 'olympics-museum', 
    hasPage: true, 
    tag: 'work-other',
    title: "Tokyo Olympics Museum School Trip",
    websiteUrl: "https://olympics.netlify.app/",
    imgUrl: "https://live.staticflickr.com/65535/51100179841_0cfe4b31b2_o.png",
    smallImgUrl: "https://live.staticflickr.com/65535/51100319547_51b0024bbb_o.png",
    individualPageImgUrl: "https://live.staticflickr.com/65535/51100179841_0cfe4b31b2_o.png",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/51100319547_51b0024bbb_o.png",
    backgroundColour: "#A62343",
    responsibleFor: 'data collection, visualisation, website',
    tools: 'D3.js, React, Rough.js, Python',
    client: <>for <em>the University of Tokyo</em></>,
    standardLayout: true, 
    description:  
    <>
      <p>
        A collaborative project between the Universities 
        of Tokyo and Tsukuba, coordinated by teaching bodies in Japan, with the purpose of producing 
        materials for classroom study prior to school trips to 
        the <a href="https://japan-olympicmuseum.jp/en/" style={{color: "#A62343"}} className="link-project" target="_blank">Olympics Museum in Tokyo</a>.
        The target audience was secondary school students in schools all around Japan. 
      </p>
      <br />
      <p>
        The questions and accompanying visualisations serve the purpose of cues for group discussions among 
        the students before they visit the museum and aim to bring up important topics around the history 
        and goals of the Olympics and Paralympics. The current iteration is a rough draft, or a PoC to show 
        what is possible through the use of interactive visualisations. 
        The Japanese version can be found <a href="https://olympicsjp.netlify.app/" style={{color: "#A62343"}} className="link-project" target="_blank">here</a>.
      </p>
    </>
  },
]


export default projectsMetadata; 