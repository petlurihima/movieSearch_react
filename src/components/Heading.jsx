import React from 'react'

const Heading = ({searchItem,setSearchItem,handleSubmit}) => {

  const handleInputChange=(event)=>{
    setSearchItem(event.target.value);
  }
  return (
    <>
      <div><h1 className='heading'>Movie Search</h1></div>
      <div className='container'>
        <h2>Enter the movie you want to search</h2>
        <input type="text" placeholder='Search Movie' value={searchItem} onChange={handleInputChange}/>
        <button onClick={handleSubmit}>Search</button>
      </div>
    </>
  )
}

export default Heading
