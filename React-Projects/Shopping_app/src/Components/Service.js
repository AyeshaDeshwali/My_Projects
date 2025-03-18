import React from "react";
import "./Service.css";

function Service() {
  return (
    <>
      <div className="service-container" id="service">
        <h2 className="service">
          <span className="highlight">Our</span> Services
        </h2>
        <p className="services-intro">
          Discover the range of services we offer to enhance your shopping
          experience.
        </p>
      </div>

      <div className="container">
        <div className="service-list">
          <div className="service-card">
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRQeW855plppvn23iyEc6wRnQa4IzH-eNDcwYO5vJDtIMnm4KM7svAccedRAP69"
              alt="Subscription Service"
              className="service-img"
            />
            <div className="service-info">
              <h3>Subscription Service</h3>
              <p>
                Opt for regular deliveries or special deals with our
                subscription options.
              </p>
            </div>
          </div>
          <div className="service-card">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTkDcjtD_gfbvsTN2cGKwPOxOdELP2TxyCuw6nF9yhHhsZ6H8bh39U1ZTkaMzUj"
              alt="Loyalty Program"
              className="service-img"
            />
            <div className="service-info">
              <h3>Loyalty Program</h3>
              <p>
                Earn rewards and benefits through our loyalty and referral
                program.
              </p>
            </div>
          </div>
          <div className="service-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVzJmkW-BMW4PHJIsH1GMeyldqoCzGJJBna9WRAi0hkeYYNbJKKXBNMkf8hSN1"
              alt="Free Shipping"
              className="service-img"
            />
            <div className="service-info">
              <h3>Free Shipping</h3>
              <p>
                Enjoy free shipping on orders above a certain amount or with
                membership.
              </p>
            </div>
          </div>
          <div className="service-card">
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQyghVf3Sh5Sr8fSdX_9exlbAT_VResHzkcniDgsM0NHqd_EpAiBK5kHc27ZWtF"
              alt="Expert Consultation"
              className="service-img"
            />
            <div className="service-info">
              <h3>Expert Consultation</h3>
              <p>
                Get personalized advice from our experts to help you make
                informed choices.
              </p>
            </div>
          </div>
          <div className="service-card">
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTxYzKrErnUr2Vggn5tQ-rjSqJKbY2BLFwQz55hetqU4pHKAEBbgYGanpma_Rcv"
              alt="Custom Orders"
              className="service-img"
            />
            <div className="service-info">
              <h3>Custom Orders</h3>
              <p>
                Place custom orders or personalize products to suit your needs.
              </p>
            </div>
          </div>
          <div className="service-card">
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRz04thDMBX5QnHatsoHh0jlz717k2UgT30WscN33oz8F9ACXUC-gKbMLBN17dC"
              alt="Installation Services"
              className="service-img"
            />
            <div className="service-info">
              <h3>Installation Services</h3>
              <p>
                We offer professional installation assistance for select
                products.
              </p>
            </div>
          </div>
          <div className="service-card">
            <img
              src="https://cdn.shopify.com/s/files/1/0070/7032/files/Blog_Asset_Generate_Excitement_1848x970px_01129db3-6881-4047-8d22-0e3e0f4da838.jpg?v=1655824168"
              alt="Pre-Order Options"
              className="service-img"
            />
            <div className="service-info">
              <h3>Pre-Order Options</h3>
              <p>Secure new products before they are officially available.</p>
            </div>
          </div>
          <div className="service-card">
            <img
              src="https://assets.aboutamazon.com/dims4/default/afe37e6/2147483647/strip/true/crop/1279x720+0+0/resize/1240x698!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Ff7%2Fd2%2F4ab528e1471f98dc1e1f301cf914%2Foption-1.jpg"
              alt="Gift Cards"
              className="service-img"
            />
            <div className="service-info">
              <h3>Gift Cards</h3>
              <p>Purchase gift cards for yourself or as gifts for others.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
