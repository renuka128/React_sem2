import React from 'react';

function DonorList({ donors, deleteDonor, setEditingDonor }) {
    return (
        <div style={{ margin: '20px', padding: '20px', backgroundColor: '#f0f8ff', borderRadius: '10px' }}>
            <h3>Donor List</h3>
            <ul>
                {donors.length > 0 ? (
                    donors.map(donor => (
                        <li key={donor.id} style={{ margin: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
                            <span>{donor.name} ({donor.bloodType})</span>
                            <div>
                                <button
                                    onClick={() => setEditingDonor(donor)}
                                    style={{ marginRight: '10px', padding: '5px 10px', backgroundColor: '#f0ad4e', color: '#fff' }}
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteDonor(donor.id)}
                                    style={{ padding: '5px 10px', backgroundColor: '#d9534f', color: '#fff' }}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))
                ) : (
                    <li>No donors yet</li>
                )}
            </ul>
        </div>
    );
}

export default DonorList;
