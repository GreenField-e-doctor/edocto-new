import React from 'react'
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
// import dummyBlogs from './dummyBlogs'; 

import './BlogDetail.css'
const dummyComments = [
  {
    id: 1,
    author: "John Doe",
    content: " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour ",
    timestamp: "2024-04-01 10:00 AM"
  }, 
  {
    id: 2,
    author: "Jane Smith",
    content: " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour ",
    timestamp: "2024-04-01 11:30 AM"
  },
  {
    id: 3,
    author: "Mike Johnson",
    content: " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour ",
    timestamp: "2024-04-01 1:45 PM"
  }
];

function OneBlog() {
  
  return (
    <div>
      
    
    <div>
        <h2> Lockdowns lead to fewer people seeking medical care</h2>
     <br/>
     <p className='textupBlogD'>Great doctor if you need your family member to get effective immediate assistance, <br/>emergency treatment or a simple consultation.</p>
    <p> Calvin Carlo 29th Nov 2023</p>
    </div>
    
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

     <h3 className='Recent-post'> Recent post</h3>
     <div className='LastBlogsDiv'>
    <img className='LastBlogs' src='https://doctris-landing-next.vercel.app/_next/image?url=%2Fimages%2Fblog%2F07.jpg&w=1920&q=75' />
      <p  className='LastBlogsP'>Consultant Business</p>
     </div>
    
     <div className='LastBlogsDiv'>
    <img className='LastBlogs' src='https://doctris-landing-next.vercel.app/_next/image?url=%2Fimages%2Fblog%2F08.jpg&w=1920&q=75' />
      <p className='LastBlogsP'>Look On The Glorious Balance</p>
     </div>
     

     <div className='LastBlogsDiv'>
    <img className='LastBlogs' src='https://doctris-landing-next.vercel.app/_next/image?url=%2Fimages%2Fblog%2F01.jpg&w=1920&q=75' />
      <p  className='LastBlogsP'>Research Financial.</p>
     </div>
      </div>
    </Box>
        </div>
     <img className='imgBlogDetail' src='https://doctris-landing-next.vercel.app/_next/image?url=%2Fimages%2Fblog%2F02.jpg&w=1920&q=75'/>
  
  
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
  
   <div className='Comment'>
 <hr/>  
    
        <h3>Comments:</h3>
        
        {dummyComments.map(comment => (
          <div key={comment.id}>
            <p><strong>{comment.author}</strong> - {comment.timestamp}</p>
            <p className='content'>{comment.content}</p>
          </div>
        ))}
      </div>
      <div className='Leave-Comment'>
      <h3  className='Leave-CommentN'>Leave Comment :</h3>
      <form className='form'>
      Your Comment
    <input  className='yout-comment' type="text" name="name" placeholder="your Comment"/>
    <div>

  <label>
    Name:
    <input className='name' type="text" name="name" placeholder="name"/>
  </label>
  <label>
    Email:
    <input className='email' type="text" name="email" placeholder="email"/>
  </label>
    </div>
  <input className='send' type="submit" value="send Message " />
</form>
      </div>
      
   
    </div>
    
  )
}
export default OneBlog
