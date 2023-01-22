import '../css/DisplayNews.css'
function DisplayNews({ news }) {
  return (
    
    <div className="card" style={{width: '12rem',height:'20rem',fontSize:'1rem',overflow:'hidden'}}>
      <img className="card-img-top" src={news.urlToImage} alt="newsImg" style={{height:'10rem'}} />
      <div className="card-body">
        <h5 className="card-title" style={{fontSize:'1rem',height:'5rem',overflow:'hidden'}}>{news.title}</h5>
       
        <a href={news.url} className="btn btn-primary readmore">
          Read More
        </a>
      </div>
    </div>
   
  );
}
export default DisplayNews;
