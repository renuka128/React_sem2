import React, { useState } from 'react';

function DonationForm({ addDonor }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [bloodType, setBloodType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newDonor = { id: Date.now(), name, email, bloodType }; // Temporary ID
        addDonor(newDonor);
        setName('');
        setEmail('');
        setBloodType('');
    };

    const formStyle = {
        margin: '20px 0',
        padding: '20px',
        backgroundColor: '#f0f8ff',
        borderRadius: '10px',
    };

    return (
        <div style={formStyle}>
            <h3>Sign Up to Donate Blood</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ width: '100%', padding: '10px', margin: '10px 0' }}
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
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
                    <option value="">Select Blood Type</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                </select>
                <button type="submit" style={{ padding: '10px', backgroundColor: '#b22222', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
            </form>
        </div>
    );
}

export default DonationForm;
