import React, { useEffect, useState } from "react"
import './search.css'
import profile from '../../assets/Make Your Day.jpeg'

const Search =()=>{
    const [ searchData, setSearchData ] = useState("")
    
    const [ resData, setResData ] = useState(null)
    const [ profileImg, setProfileImg] = useState(profile)
 
   
     //Api Requesting 
      useEffect(()=>{
          
         async function fetchData(){
            try {
                const response = await fetch(`https://api.github.com/users/${searchData}`)
                const json = await response.json()
                
                if(json.message && json.message.includes("API rate limit exceeded")){
                   console.log('API rate limit exceeded')
                    
                   alert("API rate limit exceeded")
                   setResData(null)
                   setProfileImg(profile)
                }else{
                   setResData(json)
                   setProfileImg(json.avatar_url)
                  
                }
            } catch (error) {
                setResData(null)
                setProfileImg(profile)
               
            }
         }
           
         if(searchData.trim() !== ""){
             fetchData()
         }else{
              setResData(null)
              setProfileImg(profile)
         }
      
      },[ searchData ])


      //handle the Search Data
      const handleChange = (event)=>{
        setSearchData(event.target.value)
      }


    return(
       <div className="search_container">
            <div className="input_container">
                    <input type="text" value={ searchData } onChange={ handleChange } placeholder="Search User Name..." />
                    
            </div>

            <div className="result_details_container">
                  <div className="profile_Container">
                   
                    <img src={ profileImg }
                         alt="profile"  width={597} height={587}
                         onError={()=> setProfileImg(profile)}
                     />
                     
                  </div>
                  {resData == null ? (
                         
                         <div>
                         <h4>UserName</h4>
                          
                         </div>
                           
                          ) : (
                            <h4>{resData.login}</h4>
                          )}
            
                           <div className="res_details">
                                 <ul className="details_list">
                                        <li><strong>Name </strong>     <span> { resData? resData.name : "User's Name"} </span></li>
                                        <li><strong>Public_Repos </strong>  <span> { resData? resData.public_repos :' 0'} </span></li>
                                        <li><strong>Followers </strong> <span> { resData? resData.followers :' 0'} </span></li>
                                        <li><strong>Following </strong> <span> { resData? resData.following :'0'} </span></li>
                                        <li><strong>created_at </strong> <span> { resData? new Date(resData.created_at).toLocaleString() :'None'} </span></li>
                                  </ul>
                            </div>


                             <div className="bio_container">
                               <strong style={{marginRight:'10px'}}> Bio  &nbsp;  &rarr;  </strong> &nbsp;
                                  { resData? resData.bio :'No Data'} </div>
                     
            </div>
       </div>
    )
}

export default Search