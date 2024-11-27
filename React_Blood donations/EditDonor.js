import React, { useState } from 'react';

function EditDonor({ donor, updateDonor }) {
    const [name, setName] = useState(donor.name);
    const [email, setEmail] = useState(donor.email);
    const [bloodType, setBloodType] = useState(donor.bloodType);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedDonor = { ...donor, name, email, bloodType };
        updateDonor(updatedDonor);
    };

    return (
        <div style={{ margin: '20px', padding: '20px', backgroundColor: '#f0f8ff', borderRadius: '10px' }}>
            <h3>Edit Donor</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ width: '100%', padding: '10px', margin: '10px 0' }}
                    required
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: '100%', padding: '10px', margin: '10px 0' }}
                    required
                />
                <select
                    value={bloodType}
                    onChange={(e) => setBloodType(e.target.value)}
                    style={{ width: '100%', padding: '10px', margin: '10px 0' }}
                    required
                >
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                </select>
                <button type="submit" style={{ padding: '10px', backgroundColor: '#5cb85c', color: '#fff' }}>Update</button>
            </form>
        </div>
    );
}

export default EditDonor;
