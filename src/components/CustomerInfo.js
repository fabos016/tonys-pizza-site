import "bootstrap/dist/css/bootstrap.min.css";

function CheckoutItems() {
    return (

        <div style={{display: 'flex', flexWrap: 'wrap', textAlign: 'left', height: '400px', marginTop: '10px', fontSize: '30px'}}>
            <div style={{width: '45%', marginRight: '10%'}}>
                <label className="form-label">Name</label>
                <input className="form-control bg-dark text-white" />
            </div>

            <div style={{width: '45%'}}>
                <label className="form-label">Street Number</label>
                <input className="form-control bg-dark text-white" />
            </div>

            <div style={{width: '45%', marginRight: '10%'}}>
                <label className="form-label">City</label>
                <input className="form-control bg-dark text-white" />
            </div>

            <div style={{width: '45%'}}>
                <label className="form-label">Province</label>
                <input className="form-control bg-dark text-white" />
            </div>
        </div>

    );
}
  
export default CheckoutItems;