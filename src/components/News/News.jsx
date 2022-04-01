import classes from "./News.module.css";

function News(props){
    return(
        <div className={classes.news}>
            <h1>News!</h1>
            <ul>
                <li>News 1</li>
                <li>News 2</li>
                <li>News 3</li>
            </ul>
        </div>
    )
}
export default News;