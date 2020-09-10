import React from "react";
interface NewsSection {
    image?: File,
    header: string,
    text: string
}
interface NewsPublishProps {

}
interface NewsPublishState {
    title: string,
    summary: string,
    thumbnail?: File,
    date: Date,
    content: NewsSection[],
    currentSection: NewsSection
}
export default class NewsPublish extends React.Component<NewsPublishProps, NewsPublishState>{
    constructor(props: NewsPublishProps) {
        super(props);
        this.state = {
            title: '',
            summary: '',
            date: new Date(),
            content: [],
            currentSection: { header: '', text: '' }
        }
    }
    addSection(){
        let c = this.state.content;
        c.push(this.state.currentSection);
        this.setState({content: c});
        this.setState({currentSection: {header: '', text: '', image: undefined}});
    }
    render() {
        console.log(this.state.currentSection.header);
        console.log(this.state.currentSection.text);
        return (
            <div className="NewsPublishContainer">
                <div className="input-group mb-3">
                    <span>News Title</span>
                    <input type="text" className="form-control" placeholder="Title of news" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
                </div>
                <div className="input-group">
                    <span >Summary</span>
                    <textarea className="form-control" aria-label="With textarea" maxLength={150}></textarea>
                </div>
                <div>
                    <label>Thumbnail image</label>
                    <input type="file" accept=".png" onChange={(e) => this.setState({ thumbnail: e.target.files![0] })} />
                </div>
                <div style={{ width: '100%', height: 3, backgroundColor: 'black', marginBottom: 30 }}></div>
                <div>
                    <label>Image 1</label>
                    <input type="file" accept=".png" onChange={(e) => {const v = e.target?.files![0]; this.setState(prevState => ({ currentSection: { ...prevState.currentSection, image: v }}))}} />
                </div>
                <div className="input-group mb-3">
                    <span>Title</span>
                    <input type="text" className="form-control" placeholder="Title of news" value={this.state.currentSection.header}  onChange={(e) => {const v = e.target?.value; this.setState(prevState => ({ currentSection: { ...prevState.currentSection, header: v }}))}} />
                </div>

                <div className="input-group">
                    <span >Text</span>
                    <textarea className="form-control" aria-label="With textarea" maxLength={150} value={this.state.currentSection.text} onChange={(e) => {const v = e.target?.value; this.setState(prevState => ({ currentSection: { ...prevState.currentSection, text: v }}))}}></textarea>
                </div>
                <button onClick={() => this.addSection()}>Add section</button>
            </div>
        )
    }
}   