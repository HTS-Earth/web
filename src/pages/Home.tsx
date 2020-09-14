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
                <h2>Update 1.0.2</h2>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam blanditiis
                reiciendis odit excepturi sint officiis dolor cupiditate expedita aperiam
                velit architecto voluptate voluptas dolore, quis repellendus et
                voluptatibus harum a? Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Incidunt nihil suscipit voluptate. Cum odit magni, quia sapiente ab
                molestias tempore possimus et beatae neque dolore dolorum consequatur
                nihil, illo autem! Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Cum mollitia autem labore quisquam quam quibusdam numquam
                recusandae? Impedit voluptas veritatis quisquam dolorum perferendis sed
                saepe quidem, optio laudantium ea ut! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. At tenetur impedit fugit error est accusamus
                enim, alias perspiciatis quod veniam praesentium! Possimus voluptatum
                libero suscipit voluptatem ducimus! At, aperiam voluptates.
                </p>
                <p style={{textAlign: 'right'}}>2020-08-20</p>
            </div>
            </div>
            </div> 
        )
    }
}