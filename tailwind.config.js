  // tailwind.config.js
  module.exports = {
    purge: [],
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
         screens:{
          'sm': '576px',
          // => @media (min-width: 640px) { ... }
    
          'md': '768px',
          // => @media (min-width: 768px) { ... }
    
          'lg': '992px',
          // => @media (min-width: 1024px) { ... }
    
          'xl': '1200px',
          // => @media (min-width: 1280px) { ... }
    
          '2xl': '1400px',
          // => @media (min-width: 1536px) { ... }
         },
         colors:{
           phage:{
             primary:'#986271',
             light:'#F9FAFA',
             dark:'#313F52',
             accent:'#DAB897'
         }
        },
         fontFamily:{
           body:['Orkney'],
           header:['Montserrat']
         }
       },
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }
