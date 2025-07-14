import axios from 'axios'
import React, { use, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import NavNews from './NavNews'

const Newsview = () => {

    const[news,newNews]=useState(
        {

            
  "status": "ok",
  "totalResults": 58,
  "articles": []
        }
    )
    const fetchDatafrom=()=>{
        axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=76b8ab2dbb52488387ed4a75452f253a").then(
          (responses)=>{
            newNews(responses.data)

          } 
         
        ).catch()
    }

    useEffect(()=>{fetchDatafrom()},[])
    return (
        <div>
<NavNews/>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                           

                           {news.articles.map(
                            (value,index)=>{
                                return(

                                     <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                                <div class="card" >
                                    <img src={value.urlToImage} class="card-img-top" alt="..."/>
                                        <div class="card-body">
                                            <p class="card-text">Title:{value.title}</p>
                                             <p class="card-text">publishedAt:{value.publishedAt}</p>
                                              {/* <p class="card-text">Link:<a href={value.url} target='blank'>CLick HERE</a></p> */}
                                              {/* <a href={value.url} class="btn btn-primary disabled" tabindex="-1" role="button" aria-disabled="true">Click to View</a> */}
                                              <button className="btn btn-success"> <a href={value.url} style={{color:'white',textDecoration:'none'}} target='blank'>click to view</a> </button>
                                        </div>
                                </div>
                            </div>
                                )
                            }
                           )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Newsview