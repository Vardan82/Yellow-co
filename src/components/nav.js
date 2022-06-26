import {useState} from "react"

function Nav(){
    const[play, setPlay] = useState(false)
    const [menu, setMenu] = useState(false)
    return(
        <div className="nav_header">
            <div className="menu"   onClick={()=> setMenu(!menu)} style={{display:menu? "none":""}} > MENU </div>
            
       
            <div className="nav">
                   
                <ul className="main_nav" style={{display:menu? "block":"none"}}>
                   <li ><a href="" > EVENTS </a></li>
                   <li><a href=""> GUIDANCE GROUPS  </a></li>
                   <li><a href="">  BECOME A MEMBER </a></li>
               </ul>
            {menu && <span className="menu_footer"  onClick={()=> setMenu(!menu)} > MENU</span>}
            </div>
            
            <div className="nav_yellow_co_img_div">
                <div className=".yellow_co_img_div"> <img className="yellow_co_img"  src="./img/Wordmark (1).png"/></div>
                    <div className="nav_no_block">
                            <ul className="main_nav_no_block">
                                <li ><a href="" > EVENTS </a></li>
                                <li><a href=""> GUIDANCE GROUPS  </a></li>
                                <li><a href="">  BECOME A MEMBER </a></li>
                            </ul>
                    </div>
            </div>
            <div className="title">
                <h1> holistic support, accountability & community for your meaningful work </h1>
                <h3 className="content"> CONNECT WITH YOURSELF, YOUR WORK, AND OTHERS </h3>
            </div>
            <div className="become_a_member">
                <a href=""> BECOME A MEMBER </a>
            </div>
            <div className="video">
          
                <iframe className="videpPopup" width="92%" height="597px" src="https://player.vimeo.com/video/388148182?app_id=122963&wmode=opaque" >
                
                </iframe>
            <div className="div_icon_video" onClick={()=> setPlay(!play)}> <img className="icon_video" src={play ? "": "./img/burger.jpg"}/></div>
            </div>
            <div className="mask"  style={{display: play ? "block" : "none"}}></div>
    
                <div className="popup"    style={{display: play ? "block" : "none"}} > 
                    <div className="hover_div" > <span className="hover_div_span"></span> <img className="hover_div_img"  src={play ? "./img/x.images.png": ""} onClick={()=> setPlay(!play)}></img> </div>
                    <iframe className="videpPopup" width="100%" height="100%" src="https://player.vimeo.com/video/388148182?app_id=122963&wmode=opaque" >
                   
                   </iframe>
                   
                   <div className="div_icon_video_x" onClick={()=> setPlay(!play)}> <img className="icon_video_x" src={play ? "./img/x.images.png": ""}/></div>
                </div>
                
             
        </div>
        
    )
}

export default Nav