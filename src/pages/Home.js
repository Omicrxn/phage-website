import React from "react"
import Hero from "../components/Hero"
 
function Home(props) {
  return (
        <Hero title={props.title} title2={props.title2} subTitle={props.subTitle}/>
  );
}
 
export default Home;