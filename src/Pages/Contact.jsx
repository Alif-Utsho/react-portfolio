import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="text-center mb-5">
              <h1>Contact</h1>
            </div>
            <form className="col-md-6 col-10 mx-auto">
              <div class="form-group mb-3">
                <label>Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="InputPassword"
                  placeholder="Full name"
                />
              </div>
              <div class="form-group mb-3">
                <label>Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="InputEmail"
                  aria-describedby="emailHelp"
                  placeholder="name@example.com"
                />
              </div>
              <div class="form-group mb-3">
                <label>Phone</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Mobile number"
                />
              </div>
              <div class="form-group mb-3">
                <label>Message</label>
                <textarea
                  type="text"
                  class="form-control"
                  rows="4"
                  id="exampleInputPassword1"
                />
              </div>

              <button type="submit" class="btn btn-outline-primary">
                Submit
              </button>
            </form>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
<h1>Welcome to Contact</h1>;
