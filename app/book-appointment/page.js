import { site, telHref, whatsappHref, opdSchedule, opdNote } from "@/data/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { pageMeta, breadcrumbSchema } from "@/data/seo";

export const metadata = pageMeta({
  title: "Dr. Maqsood Ali Khan | Book an ENT Appointment in Mumbai",
  description: "Book a consultation with Dr. Maqsood Ali Khan, ENT, Head-Neck and Skull-Base Surgeon. OPD: Tue-Thu 6 PM at Masina Hospital, Mon & Fri 7 PM at Saifee Hospital and Mon & Fri 5 PM at Gramy Hospital. All strictly by appointment. Book on WhatsApp or call +91 98204 03437.",
  path: "/book-appointment/",
  keywords: site.keywordSets.appointment,
});

export default function BookAppointment() {
  return (
    <div className="main-wrapper">
      <JsonLd data={breadcrumbSchema([{name:"Home",path:"/"},{name:"Book Appointment",path:"/book-appointment/"}])} />
      <Header />

               
    
    



    
    <section className="page-header">
        <div className="page-header-bg">
            <img src="/assets/img/page-header-bg.jpg" alt="" />
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
                    <div className="appointment-image appointment-portrait">
                        <img src="/assets/img/maqsood-office.jpg" alt="Dr. Maqsood Ali Khan seated at his desk in the consulting room" />
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="appointment-box">
                        <div className="section-label">
                            <span>Schedule your visit online</span>
                        </div>
                        <h2>Take the next step and schedule an appointment today</h2>
                        <div className="d-flex flex-wrap gap-3 mt-4">
                            <a href={telHref} className="btn btn-primary">
                                <i className="fa-solid fa-phone"></i> Call Us
                            </a>
                            <a href={whatsappHref()} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-whatsapp"></i> WhatsApp Us
                            </a>
                        </div>
                        <p className="mt-3">
                            Call or WhatsApp us on <strong><a href={telHref}>{site.phone}</a></strong>
                        </p>
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
                    Consultations at Masina iMISS Center (Masina Hospital), Saifee Hospital and Gramy Hospital are
                    strictly by appointment. Please call or WhatsApp to book your slot.
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
                            <td className="time">5:00 PM</td>
                            <td>
                                <h2>Dr. Maqsood Ali Khan</h2>
                                <span>Gramy Hospital</span>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <h2>Dr. Maqsood Ali Khan</h2>
                                <span>Gramy Hospital</span>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="time">6:00 PM</td>
                            <td></td>
                            <td>
                                <h2>Dr. Maqsood Ali Khan</h2>
                                <span>Masina iMISS Center, Masina Hospital</span>
                            </td>
                            <td>
                                <h2>Dr. Maqsood Ali Khan</h2>
                                <span>Masina iMISS Center, Masina Hospital</span>
                            </td>
                            <td>
                                <h2>Dr. Maqsood Ali Khan</h2>
                                <span>Masina iMISS Center, Masina Hospital</span>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="time">7:00 PM</td>
                            <td>
                                <h2>Dr. Maqsood Ali Khan</h2>
                                <span>Saifee Hospital</span>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <h2>Dr. Maqsood Ali Khan</h2>
                                <span>Saifee Hospital</span>
                            </td>
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
