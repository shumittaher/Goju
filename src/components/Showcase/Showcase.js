import React from 'react'
import bigPicture1 from '../../images/big-picture1.jpg'
import bigPicture2 from '../../images/big-picture2.jpg'
import bigPicture3 from '../../images/big-picture3.jpg'
import bigPicture4 from '../../images/big-picture4.jpg'



const Showcase = () => {
    return (
        <div>

            <div className="m-10 p-5 border-8 border-green-400	  border-solid	 rounded-lg grid grid-cols-2 gap-4">

               <div>
                   <img className="object-contain	  border rounded-lg" src={bigPicture1} alt="" />
                   <p className="font-semibold	text-xl	">Our Students Have Participated in National and International level tounatments. We have so far acheive 10 Gold Medals from this school</p>
               </div>

               <div>
                   <img className="object-contain	  border rounded-lg" src={bigPicture2} alt="" />
                   <p className="font-semibold	text-xl	">Our special classes for woman and girls are highly effective in boosting up women's health and confidence</p>
               </div> 
 
               <div>
                   <img className="object-contain	  border rounded-lg" src={bigPicture3} alt="" />
                   <p className="font-semibold	text-xl	">Children can learn self dicipline and grow up to be idle members of the scociety. Karate gives them perserverance and bonds to last a lifetime. </p>
               </div> 
               <div>
                   <img className="object-contain	  border rounded-lg" src={bigPicture4} alt="" />
                   <p className="font-semibold	text-xl	">Join our Alumni and be proud of this great community who help each other grow.</p>
               </div> 
            </div>

        </div>
    )
}

export default Showcase
