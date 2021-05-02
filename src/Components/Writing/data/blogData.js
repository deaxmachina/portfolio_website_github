// data for the preview of the blogposts (not the actual content of them)


const blogData = [
  {
    id: 'd3-react-start', 
    title: "Getting started with D3.js in React",
    date: 'Apr 2021',
    category: 'tutorial',
    imgUrl: 'https://live.staticflickr.com/65535/51140128795_068dcfc6f2_o.png',
    smallImgUrl: 'https://live.staticflickr.com/65535/51124368892_d5eff0b322_o.png',
    description: 
     <>
      I recently completed a 100 Days of Code challenge with React and D3 and I wanted to share my thoughts 
      on the two main approaches for combining these frameworks, both of which are designed to control the 
      DOM in their own way. We will compare these approaches and go in depth into a couple of examples 
      --bar chart, tooltips, d3-force and d3-brush--, focusing specifically on the option I have tended to
      prefer, which uses the useEffect and useRef React hooks to hand over DOM access to D3.
     </>
  },
  /*
  {
    id: 'placeholder-title1', 
    title: "Placeholder Title 1",
    date: 'Apr 2021',
    category: 'dataviz',
    imgUrl: 'https://live.staticflickr.com/65535/51124680829_f6bc2a8b08_o.png',
    smallImgUrl: 'https://live.staticflickr.com/65535/51124680829_f6bc2a8b08_o.png',
    description: 
     <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
     </>
  },
  {
    id: 'placeholder-title2', 
    title: "Placeholder Title 2",
    date: 'Apr 2021',
    category: 'other',
    imgUrl: 'https://live.staticflickr.com/65535/51124843638_1740d2df10_o.png',
    smallImgUrl: 'https://live.staticflickr.com/65535/51124843638_1740d2df10_o.png',
    description: 
     <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
     </>
  }
  */
];

export default blogData;