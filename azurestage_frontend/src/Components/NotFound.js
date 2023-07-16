import "./NotFound.css";
function NotFound() {
    return ( 
    <>
        <div className="ImageBackGround">
            <div className="container " style={{width: "100vh", height: "30vh", borderRadius: "10px", backdropFilter: "blur(30px)", alignItems: "center", justifyContent: "center" }}>
            <h1 className='mt-5'>Page Not Found</h1>
            <p className='mb-5'><b>The requested page could not be found.</b></p>
        </div>
        </div>
    </>
     );
}

export default NotFound;