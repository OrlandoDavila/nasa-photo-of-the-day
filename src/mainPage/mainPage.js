import React from 'react'

 function MainPage(props) {
    const {data} = props
    console.log(props);
    console.log(data);

        return (
            
            <div> 
                <p>{data.title}</p>
                <p>{data.date}</p>
                <img src = {data.url} alt = {data.title}/>
                <p>{data.explanation}</p>    
            </div>
            
        )
}

export default MainPage