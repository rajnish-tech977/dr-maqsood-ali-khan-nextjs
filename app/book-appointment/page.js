import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Book an Appointment | Dr. Maqsood Ali Khan",
  description: "Book a consultation with Dr. Maqsood Ali Khan, ENT, Head-Neck & Skull-Base Surgeon at Masina and Saifee Hospitals, Mumbai.",
};

export default function BookAppointment() {
  return (
    <div className="main-wrapper">
      <Header />

               
    
    



    
    <section className="page-header">
        <div className="page-header-bg">
            <img src="/assets/img/page-header-bg.jpg" alt="img" />
        </div>
        <div className="container">
            <div className="page-header-inner">
                <h1>Book an Appointment</h1>
                <ul className="thm-breadcrumb list-unstyled">
                    <li><a href="/">Home</a></li>
                    <li><span>/</span></li>
                    <li>Book an Appointment</li>
                </ul>
            </div>
        </div>
    </section>
    

    
    <section className="appointment-section">
        <div className="container">
            <div className="row align-items-lg-center g-4">
                <div className="col-lg-5">
                    <div className="appointment-image">
                        <img src="/assets/img/appointment-img.png" alt="Appointment" />
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="appointment-box">
                        <div className="section-label">
                            <span>Make An Appointment</span>
                        </div>
                        <h2>Contact us for any medical help and fill out an appointment form</h2>
                        <form className="appointment-form">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="ap-field">
                                        <label>Full Name</label>
                                        <input type="text" placeholder="Evan Edwards" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="ap-field">
                                        <label>Email Address</label>
                                        <input type="email" placeholder="example@gmail.com" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="ap-field">
                                        <label>Phone Number</label>
                                        <input type="text" placeholder="+1 234 567 890" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="ap-field">
                                        <label>Booking Date</label>
                                        <input type="date" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="ap-field">
                                        <label>Service</label>
                                        <select>
                                            <option>Select Service</option>
                                            <option>Head &amp; Neck / Skull-Base Surgery</option>
                                            <option>Endoscopic Thyroid Surgery</option>
                                            <option>Sleep Apnea &amp; Snoring Treatment</option>
                                            <option>Voice &amp; Laryngeal Surgery</option>
                                            <option>Rhinoplasty &amp; Nasal Surgery</option>
                                            <option>General ENT &amp; Vertigo Care</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="ap-field">
                                        <label>Doctor</label>
                                        <select>
                                            <option>Dr. Maqsood Ali Khan</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="gender-group">
                                        <label><input type="radio" name="gender" /> Male</label>
                                        <label><input type="radio" name="gender" /> Female</label>
                                        <label><input type="radio" name="gender" /> Prefer not to say</label>
                                    </div>
                                    <button type="button" className="btn btn-primary">
                                        Confirm Appointment
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    


    
    <section className="doctor-calendar">
        <div className="container">
            <div className="calendar-header">
                <div className="section-label">
                    <span>Calendar</span>
                </div>
                <h2>OPD Availability</h2>
                <p>
                    Confirmed OPD hours are at Masina Hospital, Byculla. For Saifee Hospital and other
                    consulting locations, please contact the hospital reception directly to confirm timing.
                </p>
            </div>
            <div className="calendar-table-wrap">
                <table className="calendar-table">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="time">7.00 PM – 9.00 PM</td>
                            <td></td>
                            <td>
                                <h2>Dr. Maqsood Ali Khan</h2>
                                <span>Masina Hospital OPD</span>
                            </td>
                            <td>
                                <h2>Dr. Maqsood Ali Khan</h2>
                                <span>Masina Hospital OPD</span>
                            </td>
                            <td>
                                <h2>Dr. Maqsood Ali Khan</h2>
                                <span>Masina Hospital OPD</span>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
    

    
        
        
          <Footer />
    </div>
  );
}
