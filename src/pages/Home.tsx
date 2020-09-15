import React from "react";
import './Home.css'
interface HomeProps{

}
interface HomeState{

}
export default class Home extends React.Component<HomeProps, HomeState>{
    constructor(props: HomeProps){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div>
            <div className="m">
                <h1>HTS Earth</h1>
                <h3>A real life world inside Minecraft</h3>
            <div className="codeContainer">
                <code className="code">IP: htsearth.online </code>
            </div>
            </div>
            <div className="newsContainer">
                <h1>Anouncements</h1>
                <div className="article">     
                <h2>HTS Earth S3 Trailer</h2>   
                <p>
                <iframe 
                    width="710" 
                    height="400" 
                    src="https://www.youtube.com/embed/WXWIi-UMvqU" 
                    frameBorder="0" 
                    data-allow="autoplay; encrypted-media" 
                    allowFullScreen></iframe>
                </p>
                <p style={{textAlign: 'right'}}>2020-09-15</p>
            </div>
            </div>
            </div> 
        )
    }
}