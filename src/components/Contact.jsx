import React from 'react'

const Contact = () => {
    const handleFormSubmit=(formData)=>{
        const formInputData=Object.fromEntries(formData.entries());
        console.log(formInputData)
    };
  return (
    <>
    <div className="section-contact">
        <h2 className='container-title'>Contact Us</h2>

        <div className="container-wrapper ">
            <form action={handleFormSubmit}>
                <input 
                type="text"
                className='form-control'
                placeholder='enter your name'
                name='username'
                required
                />
                <input 
                type="email"
                className='form-control'
                placeholder='enter your email'
                name='email'
                required
                />
                <textarea 
                type="text"
                className='form-control'
                placeholder='enter your message'
                name='message'
                required
                ></textarea>

                <button type="submit" value="send">Send</button>
            </form>
        </div>

    </div>
    </>
  )
}

export default Contact