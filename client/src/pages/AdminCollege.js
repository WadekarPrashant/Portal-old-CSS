import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminCollege.css'; // Import the CSS file

const AdminCollege = () => {
    const [colleges, setColleges] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchColleges = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/admin/colleges'); 
                setColleges(response.data);
            } catch (err) {
                setError('Error fetching colleges');
                console.error(err);
            }
        };

        fetchColleges();
    }, []);

    return (
        <div className="image">
        <div className="container">
            <h1>Colleges</h1>
            {error && <p className="error-message">{error}</p>}
            <ul className="responsive-table">
                <li className="table-header">
                    <div className="col col-1">College Name</div>
                    <div className="col col-2">State</div>
                    <div className="col col-3">City</div>
                    <div className="col col-4">Address</div>
                    <div className="col col-5">College Code</div>
                    <div className="col col-6">Branch</div>
                    <div className="col col-7">Course</div>
                    <div className="col col-8">Courses Available</div>
                    <div className="col col-9">Course Cutoffs</div>
                    <div className="col col-10">Minimum Criteria</div>
                    <div className="col col-11">Maximum Criteria</div>
                    <div className="col col-12">Spot Round Dates</div>
                    <div className="col col-13">Approved By</div>
                </li>
                {colleges.length > 0 ? (
                    colleges.map(college => (
                        <li className="table-row" key={college._id}>
                            <div className="col col-1" data-label="College Name">{college.collegeName}</div>
                            <div className="col col-2" data-label="State">{college.state}</div>
                            <div className="col col-3" data-label="City">{college.city}</div>
                            <div className="col col-4" data-label="Address">{college.address}</div>
                            <div className="col col-5" data-label="College Code">{college.collegeCode}</div>
                            <div className="col col-6" data-label="Branch">{college.branch || 'N/A'}</div>
                            <div className="col col-7" data-label="Course">{college.course || 'N/A'}</div>
                            <div className="col col-8" data-label="Courses Available">{college.coursesAvailable.join(', ')}</div>
                            <div className="col col-9" data-label="Course Cutoffs">
                                {college.courseCutoffs ? (
                                    Object.keys(college.courseCutoffs).map(key => (
                                        <div key={key}>
                                            {key}: {college.courseCutoffs[key].General}
                                        </div>
                                    ))
                                ) : (
                                    'No cutoffs available'
                                )}
                            </div>
                            <div className="col col-10" data-label="Minimum Criteria">{college.minStudentCriteria}</div>
                            <div className="col col-11" data-label="Maximum Criteria">{college.maxCriteria}</div>
                            <div className="col col-12" data-label="Spot Round Dates">{college.spotRoundDates}</div>
                            <div className="col col-13" data-label="Approved By">{college.approvedBy}</div>
                        </li>
                    ))
                ) : (
                    <li className="table-row">
                        <div className="col" data-label="No colleges found" colSpan="13">No colleges found</div>
                    </li>
                )}
            </ul>
        </div>
        </div>
    );
};

export default AdminCollege;
