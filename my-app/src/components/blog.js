import React from 'react'
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import '../css/BlogDetail.css'
function OneBlog() {
  return (
    <div>
        
    
    <div>
        <h2> Lockdowns lead to fewer people seeking medical care</h2>
     <br/>
     <p className='textupBlogD'>Great doctor if you need your family member to get effective immediate assistance, <br/>emergency treatment or a simple consultation.</p>
    <p> Calvin Carlo </p>
    </div>
    <br/>
    <div className='SideBarr'>
         <Box

      height={500}
      width={300}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
    >
        <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <div>

     {/* <h3 className='Recent-post'> Recent post</h3> */}
      </div>
    </Box>
        </div>
    <div> <img className='imgBlogDetail' src='https://doctris-landing-next.vercel.app/_next/image?url=%2Fimages%2Fblog%2F02.jpg&w=1920&q=75'/>
    </div>
   <br/>

   <div >
    <p className='textDownBlogd'>This is required when, for example, the final text is not yet available. Dummy text is also known as fill text.<br/> It is said that song composers of the past used dummy texts as lyrics when writing melodies in order<br/>
     to have a ready-made text to sing with the melody. Dummy texts have been in use by typesetters
     <br/>
     since the 16th century.
     <br/>
Due to its widespread use as filler text for layouts, non-readability is of 
     <br/>
great importance: human perception is tuned to recognize certain patterns and repetitions in texts.
<br/>
For this reason, dummy text usually consists of a more or less random series of words or syllables.</p>
   </div>
   <div className='Comments'>
    <h3> Comments : </h3>
   </div>
    </div>
  )
}
export default OneBlog
